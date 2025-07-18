"use client";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Typography } from "antd";
import Image from "next/image";
const { Paragraph } = Typography;

const BlogShare = ({ title }) => {
  const pathname = usePathname();
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);

  return (
    <div className="flex gap-6 flex-col md:flex-row md:items-center">
      <span className="font-24">Share On</span>
      <div className="flex items-center gap-4 flex-wrap">
        <LinkedinShareButton url={shareUrl}>
          <Image
            src={linkedin}
            alt={"LinkedIn"}
            width={24}
            height={24}
            className="hover:scale-110 transition-transform"
          />
        </LinkedinShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <Image
            src={twitter}
            alt={"Twitter"}
            width={24}
            height={24}
            className="hover:scale-110 transition-transform"
          />
        </TwitterShareButton>

        <FacebookShareButton url={shareUrl} quote={title}>
          {/* <FacebookIcon size={32} round /> */}
          <Image
            src={facebook}
            alt={"Facebook"}
            width={24}
            height={24}
            className="hover:scale-110 transition-transform"
          />
        </FacebookShareButton>

        <Paragraph
          copyable={{
            text: shareUrl,
            // icon: [
            //   <SmileOutlined key="copy-icon" />,
            //   <SmileFilled key="copied-icon" />,
            // ],
            tooltips: ["Click to copy blog link", "Copied!"],
          }}
          style={{ marginBottom: 0 }}
          className="!mb-0 text-sm !text-[#4C4C4C]"
        >
          Copy Link
        </Paragraph>
      </div>
    </div>
  );
};

export default BlogShare;
