// components/BlogPage.tsx
import Image from 'next/image';
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    description: "Explore the latest trends in web technologies, frameworks, and best practices shaping the future.",
    image: "/blogs/future-of-web-dev.webp",
    date: "April 25, 2025",
    author: "Anas Malik",
  },
  {
    id: 2,
    title: "Mastering UX/UI Design in 2025",
    description: "Discover the newest UX/UI principles that will define the next generation of digital products.",
    image: "/blogs/future-of-web-dev.webp",
    date: "April 24, 2025",
    author: "Anas Malik",
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Apps",
    description: "Techniques and strategies to make your Next.js applications faster and more efficient.",
    image: "/blogs/future-of-web-dev.webp",
    date: "April 23, 2025",
    author: "Anas Malik",
  },
  {
    id: 4,
    title: "Why TypeScript Is the Future",
    description: "TypeScript's rise in modern development explained with real-world benefits and case studies.",
    image: "/blogs/future-of-web-dev.webp",
    date: "April 22, 2025",
    author: "Anas Malik",
  },
  {
    id: 5,
    title: "AI and Web Development: A New Era",
    description: "How artificial intelligence is reshaping the way we build, design, and optimize websites.",
    image: "/blogs/future-of-web-dev.webp",
    date: "April 21, 2025",
    author: "Anas Malik",
  },
  {
    id: 6,
    title: "Building Scalable Applications with Microservices",
    description: "A practical guide to microservices architecture and how to implement it successfully.",
    image: "/blogs/future-of-web-dev.webp",
    date: "April 20, 2025",
    author: "Anas Malik",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-white py-16 mt-32 rounded-2xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-transparent bg-gradient-to-bl from-slate-900 via-slate-600 to-slate-400 bg-clip-text mb-4">Latest Blogs</h2>
          <p className="text-transparent bg-gradient-to-bl from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-base sm:text-lg">Stay updated with the latest insights and stories</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg hover:shadow-2xl cursor-pointer hover:scale-105 transition-all duration-200 ease-in rounded-2xl overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="flex items-center justify-between text-sm text-blue-500">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
