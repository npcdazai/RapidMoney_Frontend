import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import dayjs from 'dayjs';

export default function BlogCard({ item }) {
  console.log("BlogCard item:", item);
  return (
    <div className="flex flex-col gap-4 h-full group">
      <Link href={"/blogs/" + item?.seo?.slug} className="h-full">
        <div className="overflow-hidden h-full rounded-3xl ">
          <Image
            src={item?.featuredImg?.[0]?.url}
            alt={item?.title}
            width={500}
            height={300}
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-105 rounded-3xl"
          />
        </div>
      </Link>

      <p className="font-14 font-weight-semibold purple-color">
        {[item?.author?.firstName, item?.author?.lastName].join(" ")} • {dayjs(item?.createdAt).format('DD MMM YYYY')}
      </p>

      {/* Title */}
      <Link href={"/blogs/" + item?.seo?.slug} className="">
        <h3 className="font-24 font-weight-bold dark-color">{item.title}</h3>
      </Link>

      {/* CTA */}
      <Link
        href={"/blogs/" + item?.seo?.slug}
        className="font-18 font-weight-medium dark-color flex items-center gap-2 group hover:!text-[#79CA00] transition-colors duration-300"
      >
        Learn More
        <span className="text-[#79CA00] transform transition-transform duration-300 group-hover:translate-x-1">
          <RiArrowRightLine size={24} />
        </span>
      </Link>
    </div>
  );
}
