"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className="bg-gray-300">
      <nav className="flex justify-center gap-5">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-black" : "text-white"
          } font-bold text-2xl`}
        >
          홈
        </Link>
        <Link
          href="about"
          className={`${
            pathname === "/about" ? "text-black" : "text-white"
          } font-bold text-2xl`}
        >
          소개
        </Link>
      </nav>
    </div>
  );
}
