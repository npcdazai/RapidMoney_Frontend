"use client";
import { Row, Col, Divider, Avatar } from "antd";
import Image from "next/image";
import styles from "./blog-details.module.scss";
import Link from "next/link";
import BlogCard from "../blogs/BlogCard";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import dayjs from "dayjs";
import BlogCategory from "@/components/blog-details-section/BlogCategoy";
import BlogShare from "@/components/blog-details-section/BlogShare";
import DOMPurify from "dompurify";

const decodeHTMLEntities = (text) => {
  if (typeof window === "undefined") return text; 

  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

const BlogDetails = ({ data }) => {
   const decodedHTML = decodeHTMLEntities(data?.description);
  const sanitizedHTML = DOMPurify.sanitize(decodedHTML, {
    ADD_TAGS: ["iframe"],
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
      `.replace(/\n\s+/g, " "); // Minify the srcdoc content

      return `<iframe ${before} src="${src}" srcdoc='${srcdocContent}' loading="lazy" style="max-width:560px; width:100%;  border-radius:20px" ${after}></iframe>`;
    }
  );
  return (
    <section className={`${styles.section} pt-120 pb-120`}>
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="flex flex-col max-w-[520px] w-full gap-6 mb-8">
          <h1 className="section-title">{data?.title}</h1>
          <span className="font-weight-medium font-18 text-[#737373]">
            {" "}
            {[data?.author?.firstName, data?.author?.lastName].join(" ")} •{" "}
            {dayjs(data?.createdAt).format("DD MMM YYYY")}
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

            {/* Content Loop */}
            {/* {data?.content?.map((item, idx) => (
              <div key={idx} className="pb-11">
                <h2 className="font-24 dark-color font-weight-bold pb-5">
                  {item?.heading}
                </h2>
                <p className="font-16 dark-color">{item?.paragraph}</p>
              </div>
            ))} */}

            <div className="pb-11">
              <div
              className={styles.blogContent}
                dangerouslySetInnerHTML={{
                  __html: htmlWithLazyIframes || data?.description || "",
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
                {/* <span className="font-24">Share On</span> */}
                {/* <div className="flex items-center gap-3 flex-wrap">
                {socialLinks?.map((link, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                    >
                      <Image
                        src={socialIcons[link.icon]}
                        alt={link.platform}
                        width={24}
                        height={24}
                        className="hover:scale-110 transition-transform"
                      />
                    </Link>
                  );
                })}
              </div> */}
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
                  <span className="dark-color font-14">
                    {data?.author?.bio}
                  </span>
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
