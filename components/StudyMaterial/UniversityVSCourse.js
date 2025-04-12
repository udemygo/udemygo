"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function UniversityVSCourse({ children }) {
  const pathname = usePathname();

  return (
    <div>
      <div className="h-auto bg-amber-50 md:pt-[20%] pt-[50%] lg:px-1 flex flex-col justify-center items-center rounded-4xl">
        <div className="bg-white max-w-fit p-1 flex gap-4 rounded-4xl">
          <Link
            href="/explore-universities/university-catalog"
            className={`rounded-4xl px-2 py-1 ${pathname === "/explore-universities/university-catalog" ? "bg-black text-white font-bold" : "text-black font-medium"}`}
          >
            University
          </Link>
          <Link
            href="/explore-universities/course-catalog"
            className={`rounded-4xl px-2 py-1 ${pathname === "/explore-universities/course-catalog" ? "bg-black text-white font-bold" : "text-black font-medium"}`}
          >
            Courses
          </Link>
        </div>
        <div className="my-5 text-4xl font-black text-gray-800 flex flex-col justify-center items-center">
          <p>
            Your Next{" "}
            <span className="px-3 py-2 bg-white rounded-4xl">Academic</span>
          </p>
          <p>Journey Awaits.</p>
        </div>
        {children}
      </div>
    </div>
  );
}