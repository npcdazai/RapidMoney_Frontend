"use client";
import React, { useEffect, useState } from "react";
import { Input, Spin, Empty } from "antd";
import { RiSearchLine } from "react-icons/ri";
import styles from "./blog-details.module.scss";
import endpoints from "@/constants/endpoints";
import requests from "@/utils/api";
import { useRouter } from "next/navigation";

export default function BlogCategory() {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const fetchCategories = async (query = "") => {
    setLoading(true);
    try {
      const api = requests();
      let url = endpoints.get_blog_category;
      if (query) {
        url += `?search=${encodeURIComponent(query)}`;
      }
      const response = await api.get(url);
      setCategories(response?.data || []);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchCategories(search);
    }, 400); // debounce
    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="lg:sticky top-[100px] z-10">
      {/* Search Input */}
      <div className="border border-[#D9D9D9] rounded-t-lg p-[30px] bg-white">
        <Input
          placeholder="Search Here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`px-4 py-2 border border-[#D0D5DD] focus:border-[#B9B9B9] shadow-none ${styles.categoriesSearch}`}
          prefix={<RiSearchLine size={20} color="#667085" />}
        />
      </div>

      {/* Category List */}
      <div className="border-t-0 border border-[#D9D9D9] rounded-b-lg p-[30px] bg-white">
        <h4 className="font-semibold font-24 dark-color mb-5 ">Categories</h4>

        {loading ? (
          <div className="text-center py-6">
            <Spin size="small" />
          </div>
        ) : categories.length === 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No Categories Found"
          />
        ) : (
          <ul
            className={`font-16 space-y-4 text-[#4C4C4C] ${styles.categoriesList}`}
          >
            {categories.map((cat) => (
              <li
                key={cat.id}
                onClick={() => router.push(`/blogs?category=${cat.slug}`)}
                className="pl-2 list-disc list-inside cursor-pointer hover:text-[#79CA00] transition-colors"
              >
                {cat.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
