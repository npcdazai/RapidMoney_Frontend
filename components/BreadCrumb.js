"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto w-full  pt-4 pl-3 md:pl-1 flex justify-start">

      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm">
          
          {/* Home */}
          <li>
            <Link
              href="/"
              className="text-[#8adf0b] hover:none transition"
            >
              Home
            </Link>
          </li>

          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            const isLast = index === pathSegments.length - 1;
            const name = segment.replace(/-/g, " ");

            return (
              <li key={href} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />

                {isLast ? (
                  <span className="text-[#7BC903] font-semibold capitalize">
                    {name}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-[#8adf0b] hover:underline capitalize"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
