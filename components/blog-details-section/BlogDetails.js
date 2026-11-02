"use client";
import React, { useEffect, useRef } from "react";
import { Row, Col, Divider, Avatar } from "antd";
import Image from "next/image";
import styles from "./blog-details.module.scss";
import Link from "next/link";
import BlogCard from "../blogs/BlogCard";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import dayjs from "dayjs";
import BlogCategory from "@/components/blog-details-section/BlogCategoy";
import BlogShare from "@/components/blog-details-section/BlogShare";
import DOMPurify from "isomorphic-dompurify";

function decodeQuillCodeBlocks(html) {
  if (!html) return "";

  let result = "";

  // 1. Convert Quill 2 ql-code-block-container blocks into rendered markup
  if (html.includes("ql-code-block")) {
    const containerMarker = '<div class="ql-code-block-container"';
    let startIndex = html.indexOf(containerMarker);
    let currentIndex = 0;

    while (startIndex !== -1) {
      result += html.slice(currentIndex, startIndex);

      let openTagEnd = html.indexOf(">", startIndex);
      if (openTagEnd === -1) break;

      let depth = 1;
      let pos = openTagEnd + 1;

      while (depth > 0 && pos < html.length) {
        const nextOpen = html.indexOf("<div", pos);
        const nextClose = html.indexOf("</div>", pos);

        if (nextClose === -1) break;

        if (nextOpen !== -1 && nextOpen < nextClose) {
          depth++;
          pos = nextOpen + 4;
        } else {
          depth--;
          if (depth === 0) {
            pos = nextClose + 6;
            break;
          }
          pos = nextClose + 6;
        }
      }

      const containerInner = html.slice(openTagEnd + 1, pos - 6);

      const lines = [];
      const lineRegex =
        /<div[^>]*class="[^"]*ql-code-block[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
      let match;
      while ((match = lineRegex.exec(containerInner)) !== null) {
        lines.push(match[1]);
      }

      const joined = (lines.length > 0 ? lines.join("\n") : containerInner)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");

      // If the code block contains HTML/CSS/scripts, render it as real HTML
      if (/<[a-z!][\s\S]*>/i.test(joined)) {
        if (/<script\b[^>]*>[\s\S]*?<\/script>/i.test(joined)) {
          const transformed = joined.replace(
            /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
            (sMatch) =>
              `<div class="rendered-blog-embed" data-embed-code="${encodeURIComponent(
                sMatch
              )}"></div>`
          );
          result += transformed;
        } else {
          result += joined;
        }
      } else {
        result += `<pre class="ql-syntax"><code>${joined
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</code></pre>`;
      }

      currentIndex = pos;
      startIndex = html.indexOf(containerMarker, currentIndex);
    }

    result += html.slice(currentIndex);
  } else {
    result = html;
  }

  // 2. Also decode Quill 1 pre.ql-syntax containing HTML / scripts
  result = result.replace(
    /<pre[^>]*class="[^"]*ql-syntax[^"]*"[^>]*>([\s\S]*?)<\/pre>/gi,
    (match, innerContent) => {
      const decoded = innerContent
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");

      if (/<[a-z!][\s\S]*>/i.test(decoded)) {
        if (/<script\b[^>]*>[\s\S]*?<\/script>/i.test(decoded)) {
          return decoded.replace(
            /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
            (sMatch) =>
              `<div class="rendered-blog-embed" data-embed-code="${encodeURIComponent(
                sMatch
              )}"></div>`
          );
        }
        return decoded;
      }
      return match;
    }
  );

  // 3. Convert .blog-embed-wrapper with data-embed-code into rendered embed containers
  result = result.replace(
    /<div[^>]*class="[^"]*blog-embed-wrapper[^"]*"[^>]*data-embed-code="([^"]+)"[^>]*>[\s\S]*?<\/div>/gi,
    (match, encodedCode) => {
      return `<div class="rendered-blog-embed" data-embed-code="${encodedCode}"></div>`;
    }
  );

  // 4. Convert any escaped <script> tags: &lt;script...&gt;...&lt;/script&gt;
  result = result.replace(
    /&lt;script\b([^&]*)&gt;([\s\S]*?)&lt;\/script&gt;/gi,
    (match, attrs, code) => {
      const decodedAttrs = attrs
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");
      const decodedCode = code
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");
      const fullScript = `<script${decodedAttrs}>${decodedCode}</script>`;
      return `<div class="rendered-blog-embed" data-embed-code="${encodeURIComponent(
        fullScript
      )}"></div>`;
    }
  );

  // 5. Convert any raw <script> tags to embed containers so DOMPurify won't delete them
  result = result.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    (match) => {
      return `<div class="rendered-blog-embed" data-embed-code="${encodeURIComponent(
        match
      )}"></div>`;
    }
  );

  return result;
}

const BlogDetails = ({ data }) => {
  const contentRef = useRef(null);

  const processedContent = decodeQuillCodeBlocks(data?.description);

  const sanitizedHTML = DOMPurify.sanitize(processedContent, {
    ADD_TAGS: [
      "iframe",
      "blockquote",
      "style",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "scrolling",
      "referrerpolicy",
      "width",
      "height",
      "src",
      "title",
      "loading",
      "data-embed-code",
      "data-embedded-script",
      "target",
      "style",
      "class",
    ],
  });

  const htmlWithLazyIframes = sanitizedHTML.replace(
    /<iframe([^>]*?)src="([^"]+)"([^>]*)><\/iframe>/g,
    (match, before, src, after) => {
      const videoIdMatch = src.match(/\/embed\/([^/?]+)/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;

      if (!videoId) {
        return match;
      }

      const srcdocContent = `
        <style>
          * { padding: 0; margin: 0; overflow: hidden; }
          html, body { height: 100%; }
          img, span { position: absolute; width: 100%; top: 0; bottom: 0; margin: auto; }
          span { height: 1.5em; text-align: center; font: 48px/1.5 sans-serif; color: white; text-shadow: 0 0 0.5em black; }
        </style>
        <a href="${src}">
          <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="Video Thumbnail">
          <span>▶</span>
        </a>
      `.replace(/\n\s+/g, " ");

      return `<iframe ${before} src="${src}" srcdoc='${srcdocContent}' loading="lazy" style="max-width:560px; width:100%; border-radius:20px" ${after}></iframe>`;
    }
  );

  // Client-side script execution and embed activation
  useEffect(() => {
    if (!contentRef.current) return;

    // 1. Process all .rendered-blog-embed containers
    const embedContainers = contentRef.current.querySelectorAll(
      ".rendered-blog-embed, [data-embed-code]"
    );

    embedContainers.forEach((container) => {
      if (container.dataset.initialized === "true") return;
      container.dataset.initialized = "true";

      const encodedCode = container.getAttribute("data-embed-code");
      if (!encodedCode) return;

      let code = "";
      try {
        code = decodeURIComponent(encodedCode);
      } catch (e) {
        code = encodedCode;
      }

      if (!code) return;

      // Parse code into HTML elements and executable scripts
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = code;

      const scripts = [];
      Array.from(tempDiv.childNodes).forEach((child) => {
        if (child.nodeName && child.nodeName.toLowerCase() === "script") {
          scripts.push(child);
        } else {
          container.appendChild(child.cloneNode(true));
        }
      });

      // Execute extracted scripts by creating fresh script tags
      scripts.forEach((oldScript) => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value);
        });

        if (oldScript.src) {
          newScript.async = true;
        } else {
          newScript.text = oldScript.text || oldScript.textContent || "";
        }

        container.appendChild(newScript);
      });

      // Notify common third-party widgets if present
      if (typeof window !== "undefined") {
        if (
          window.twttr &&
          window.twttr.widgets &&
          typeof window.twttr.widgets.load === "function"
        ) {
          window.twttr.widgets.load(container);
        }
        if (
          window.instgrm &&
          window.instgrm.Embeds &&
          typeof window.instgrm.Embeds.process === "function"
        ) {
          window.instgrm.Embeds.process();
        }
      }
    });

    // 2. Also execute any direct script tags that might exist in the blog content
    const directScripts = contentRef.current.querySelectorAll(
      "script:not([data-executed='true'])"
    );
    directScripts.forEach((oldScript) => {
      oldScript.setAttribute("data-executed", "true");
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      if (oldScript.src) {
        newScript.async = true;
      } else {
        newScript.text = oldScript.text || oldScript.textContent || "";
      }
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }, [htmlWithLazyIframes]);

  return (
    <section className={`${styles.section} pt-120 pb-120`}>
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="flex flex-col max-w-[520px] w-full gap-6 mb-8">
          <h1 className="section-title">{data?.title}</h1>
          <span className="font-weight-medium font-18 text-[#737373]">
            {" "}
            {[data?.author?.firstName, data?.author?.lastName].join(" ")} •{" "}
            {dayjs(data?.publishedAt || data?.updatedAt).format("DD MMM YYYY")}
          </span>
        </div>

        <Row gutter={[32, 32]}>
          {/* Main Content */}
          <Col xs={24} lg={16}>
            <div className="rounded-xl overflow-hidden pb-[32px]">
              <Image
                src={data?.featuredImg?.[0]?.url}
                alt={data?.title}
                width={740}
                height={400}
                className="rounded-[24px] object-cover  w-full"
              />
            </div>

            <div className="pb-11">
              <div
                ref={contentRef}
                className={styles.blogContent}
                dangerouslySetInnerHTML={{
                  __html: htmlWithLazyIframes || "",
                }}
              ></div>
            </div>

            <Divider
              variant="dashed"
              style={{ borderColor: "#B9B9B9" }}
              dashed
            ></Divider>

            {data?.title ? (
              <div className="flex gap-6 pt-10">
                <BlogShare title={data?.title} />
              </div>
            ) : null}

            <div className="pt-8">
              <div className="border border-[#C7C7C7] p-4 rounded-[24px] px-8 py-6 bg-white shadow flex flex-col gap-5">
                <div className="flex gap-5">
                  {data?.author?.profileImg?.[0]?.url ? (
                    <Avatar
                      src={data?.author?.profileImg?.[0]?.url}
                      size={65}
                    ></Avatar>
                  ) : (
                    <Avatar size={65}>
                      {data?.author?.firstName?.charAt(0) +
                        data?.author?.lastName?.charAt(0)}
                    </Avatar>
                  )}
                  <div className="flex-1 gap-2 flex flex-col justify-center">
                    <span className="font-14 font-semibold text-[#737373]">
                      Author
                    </span>
                    <h3 className="text-md font-semibold mb-1">
                      {data?.author?.firstName + " " + data?.author?.lastName}
                    </h3>
                  </div>
                </div>
                <div>
                  <span className="dark-color font-14">{data?.author?.bio}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                {data?.hasPrevious ? (
                  <Link
                    href={`/blogs/${data?.previousSlug}`}
                    className="flex items-center gap-3 group !cursor-pointer"
                  >
                    <span className="w-12 h-12 rounded-full bg-[#F8F8F9] flex items-center justify-center hover:shadow-md cursor-pointer">
                      <RiArrowLeftLine size={24} color="#000" />
                    </span>
                    <span className="font-16 dark-color group-hover:text-primary transition">
                      Previous Article
                    </span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 opacity-40 !cursor-not-allowed">
                    <button
                      className="w-12 h-12 rounded-full bg-[#F8F8F9] flex items-center justify-center !cursor-not-allowed"
                      disabled
                    >
                      <RiArrowLeftLine size={24} />
                    </button>
                    <span className="font-16 dark-color">Previous Article</span>
                  </div>
                )}

                {/* Next Article */}
                {data?.hasNext ? (
                  <Link
                    href={`/blogs/${data?.nextSlug}`}
                    className="flex items-center gap-3 group !cursor-pointer"
                  >
                    <span className="font-16 dark-color group-hover:text-primary transition cursor-pointer">
                      Next Article
                    </span>
                    <span className="w-12 h-12 rounded-full bg-[#F8F8F9] flex items-center justify-center hover:shadow-md !cursor-pointer">
                      <RiArrowRightLine size={24} color="#000" />
                    </span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 opacity-40 !cursor-not-allowed">
                    <span className="font-16 dark-color">Next Article</span>
                    <button
                      className="w-12 h-12 rounded-full bg-[#F8F8F9] flex items-center justify-center !cursor-not-allowed"
                      disabled
                    >
                      <RiArrowRightLine size={24} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col xs={24} lg={8}>
            <BlogCategory />
          </Col>
        </Row>

        {data?.relatedBlogsDetails?.length > 0 ? (
          <div className="mt-32">
            <h2 className="section-title pb-10 text-center">Related Blogs</h2>
            <Row gutter={[24, 24]}>
              {data?.relatedBlogsDetails?.map((blog, idx) => (
                <Col key={idx} xs={24} sm={24} md={8}>
                  <BlogCard item={{ ...blog }} />
                </Col>
              ))}
            </Row>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogDetails;
