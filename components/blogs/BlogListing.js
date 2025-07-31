// "use client";
// import { Row, Col, Button, Spin, Empty, Result } from "antd";
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import BlogCard from "@/components/blogs/BlogCard";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import endpoints from "@/constants/endpoints";
// import requests from "@/utils/api";
// import { useSearchParams } from "next/navigation";
// import BlogCardSkeleton from "@/components/blogs/BlogCardSkeleton";

// gsap.registerPlugin(ScrollTrigger);

// export default function BlogListing() {
//   const titleRef = useRef(null);
//   const cardsRef = useRef([]);
//   cardsRef.current = [];

//   const [blogs, setBlogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [loadingMore, setLoadingMore] = useState(false);
//   const [isFetching, setIsFetching] = useState(false);

//   const searchParams = useSearchParams();
//   const category = searchParams.get("category");

//   // const getBlogs = async (pageNum = 1, initialLoad = false) => {
//   //   if (isFetching) return;
//   //   if (total !== null && blogs.length >= total) return;

//   //   setIsFetching(true);
//   //   if (!initialLoad) setLoadingMore(true);
//   //   else setLoading(true);

//   //   try {
//   //     const api = requests();
//   //     let url = `${endpoints.get_blogs}?page=${pageNum}&limit=6`;
//   //     if (category) url += `&category=${category}`;

//   //     const response = await api.get(url);

//   //     const data = response?.data || {
//   //       data: [],
//   //       total: 0,
//   //       current_page: pageNum,
//   //     };

//   //     setBlogs((prev) => (pageNum === 1 ? data.data : [...prev, ...data.data]));
//   //     setTotal(data?.pagination?.total);
//   //     setPage(data?.pagination?.currentPage);
//   //   } catch (error) {
//   //     console.error("Failed to fetch blogs:", error);
//   //   } finally {
//   //     setLoading(false);
//   //     setLoadingMore(false);
//   //     setIsFetching(false);
//   //   }
//   // };

//   const getBlogs = useCallback(
//   async (pageNum = 1, initialLoad = false) => {
//     if (isFetching) return;
//     if (total !== null && blogs.length >= total) return;

//     setIsFetching(true);
//     if (!initialLoad) setLoadingMore(true);
//     else setLoading(true);

//     try {
//       const api = requests();
//       let url = `${endpoints.get_blogs}?page=${pageNum}&limit=6`;
//       if (category) url += `&category=${category}`;

//       const response = await api.get(url);

//       const data = response?.data || {
//         data: [],
//         total: 0,
//         current_page: pageNum,
//       };

//       setBlogs((prev) => (pageNum === 1 ? data.data : [...prev, ...data.data]));
//       setTotal(data?.pagination?.total);
//       setPage(data?.pagination?.currentPage);
//     } catch (error) {
//       console.error("Failed to fetch blogs:", error);
//     } finally {
//       setLoading(false);
//       setLoadingMore(false);
//       setIsFetching(false);
//     }
//   },
//   [isFetching, total, blogs.length, category] // include all dependencies used inside the function
// );

//   // Animation + initial data fetch
//   useEffect(() => {
//     getBlogs(1, true);

//     gsap.fromTo(
//       titleRef.current,
//       { autoAlpha: 0, y: 40 },
//       {
//         autoAlpha: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 85%",
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, [category,getBlogs]);

//   // Animate blog cards on update
//   useEffect(() => {
//     if (!cardsRef.current.length) return;
//     gsap.fromTo(
//       cardsRef.current,
//       {
//         autoAlpha: 0,
//         y: 60,
//         scale: 0.95,
//       },
//       {
//         autoAlpha: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.9,
//         ease: "power3.out",
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 85%",
//         },
//       }
//     );
//   }, [blogs]);

//   return (
//     <section className="container mx-auto pt-120 pb-120">
//       <h1 ref={titleRef} className="text-4xl font-bold text-center pb-12">
//         Blogs
//       </h1>

//       {loading ? (
//         <div className="text-center py-32">
//           <Spin size="large" />
//         </div>
//       ) : blogs.length === 0 ? (
//         <div className="text-center py-10">
//           <Result
//             status="404"
//             title="No Blogs Found"
//             subTitle="Sorry, we couldn't find any blogs."
//           />
//         </div>
//       ) : (
//         <Spin spinning={loadingMore}>
//           <Row gutter={[24, 32]}>
//             {(loading ? Array.from({ length: 3 }) : blogs).map(
//               (blog, index) => (
//                 <Col
//                   key={index}
//                   xs={24}
//                   sm={24}
//                   md={8}
//                   ref={(el) => (cardsRef.current[index] = el)}
//                 >
//                   {loading ? <BlogCardSkeleton /> : <BlogCard item={blog} />}
//                 </Col>
//               )
//             )}

//             {/* {loadingMore &&
//               Array.from({ length: 1 }).map((_, index) => (
//                 <Col key={`skeleton-${index}`} xs={24} sm={24} md={8}>
//                   <BlogCardSkeleton />
//                 </Col>
//               ))} */}
//           </Row>

//           {blogs.length < total && (
//             <div className="text-center mt-12">
//               <button
//                 className={`apply-btn apply-btn-light flex item-center gap-3`}
//                 onClick={() => getBlogs(page + 1)}
//                 disabled={loading}
//               >
//                 Load More
//               </button>
//             </div>
//           )}
//         </Spin>
//       )}
//     </section>
//   );
// }


"use client";
import { Row, Col, Spin, Result } from "antd";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import endpoints from "@/constants/endpoints";
import requests from "@/utils/api";
import { useSearchParams } from "next/navigation";
import BlogCardSkeleton from "@/components/blogs/BlogCardSkeleton";

gsap.registerPlugin(ScrollTrigger);

export default function BlogListing({
  initialBlogs = [],
  initialTotal = 0,
  initialPage = 1,
  category: initialCategory = null,
}) {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [page, setPage] = useState(initialPage);
  const [total, setTotal] = useState(initialTotal);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || initialCategory;

  const getBlogs = useCallback(
    async (pageNum = 1, initialLoad = false) => {
      if (isFetching) return;
      if (total !== null && blogs.length >= total) return;

      setIsFetching(true);
      if (!initialLoad) setLoadingMore(true);
      else setLoading(true);

      try {
        const api = requests();
        let url = `${endpoints.get_blogs}?page=${pageNum}&limit=6`;
        if (category) url += `&category=${category}`;

        const response = await api.get(url);

        const data = response?.data || {
          data: [],
          total: 0,
          current_page: pageNum,
        };

        setBlogs((prev) =>
          pageNum === 1 ? data.data : [...prev, ...data.data]
        );
        setTotal(data?.pagination?.total);
        setPage(data?.pagination?.currentPage);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
        setIsFetching(false);
      }
    },
    [isFetching, total, blogs.length, category]
  );

  // Animation + handle category change
  useEffect(() => {
    // Fetch blogs only if no initial data or category changes
    if (!initialBlogs.length || category !== initialCategory) {
      getBlogs(1, true);
    }

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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [category, initialBlogs.length, initialCategory, getBlogs]);

  // Animate blog cards on update
  useEffect(() => {
    if (!cardsRef.current.length) return;
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
  }, [blogs]);

  return (
    <section className="container mx-auto pt-120 pb-120">
      <h1 ref={titleRef} className="text-4xl font-bold text-center pb-12">
        Blogs
      </h1>

      {loading ? (
        <div className="text-center py-32">
          <Spin size="large" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-10">
          <Result
            status="404"
            title="No Blogs Found"
            subTitle="Sorry, we couldn't find any blogs."
          />
        </div>
      ) : (
        <Spin spinning={loadingMore}>
          <Row gutter={[24, 32]}>
            {(loading ? Array.from({ length: 3 }) : blogs).map((blog, index) => (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={8}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                {loading ? <BlogCardSkeleton /> : <BlogCard item={blog} />}
              </Col>
            ))}
          </Row>

          {blogs.length < total && (
            <div className="text-center mt-12">
              <button
                className="apply-btn apply-btn-light flex item-center gap-3"
                onClick={() => getBlogs(page + 1)}
                disabled={loading || loadingMore}
              >
                Load More
              </button>
            </div>
          )}
        </Spin>
      )}
    </section>
  );
}