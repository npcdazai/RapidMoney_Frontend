"use client";
import { Row, Col } from "antd";
import React, { useEffect, useRef } from "react";
import blogs from "@/json/blogs/blogs.json";
import BlogCard from "@/components/blogs/BlogCard";
import blog1 from "./assets/blog-1.jpg";
import blog2 from "./assets/blog-2.jpg";
import blog3 from "./assets/blog-3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BlogListing() {
  const imageArray = [blog1, blog2, blog3];

  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    // Animate title
    gsap.fromTo(
      titleRef.current,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate each card with stagger
    gsap.fromTo(
      cardsRef.current,
      {
        autoAlpha: 0,
        y: 60,
        scale: 0.95,
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="container mx-auto py-24">
      <h1 className="text-4xl font-bold text-center pb-12">Blogs</h1>

      <Row gutter={[24, 32]}>
        {blogs.map((blog, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={8}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <BlogCard item={{ ...blog, image: imageArray[index] }} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
