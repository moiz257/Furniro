import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import { AiFillCalendar } from "react-icons/ai";
import { FaTag } from "react-icons/fa";
import React from "react";

const BlogPage = () => {
  // Dynamic data for images and titles
  const blogPosts = [
    {
      id: 1,
      image: "/blog.jpeg",
      title: "Going all-in with millennial design",
    },
    {
      id: 2,
      image: "/blog1.png",
      title: "Exploring new ways of decorating",
    },
    {
      id: 3,
      image: "/blog2.png",
      title: "Handmade pieces that took time to make",
    },
  ];

  const recentPosts = [
  
    {
      id: 2,
      image: "/sm2.png",
      title: "Colorful office redesign",
      date: "03 Aug 2022",
    },
    {
      id: 3,
      image: "/sm3.png",
      title: "Handmade furniture ideas",
      date: "03 Aug 2022",
    },
    {
      id: 4,
      image: "/sm4.png",
      title: "Tips for minimalist decor",
      date: "03 Aug 2022",
    },
    {
      id: 5,
      image: "/sm5.png",
      title: "How to decorate small spaces",
      date: "03 Aug 2022",
    },
  ];

  return (
    <div className="bg-white px-4 py-8 lg:px-20 sm:mt-8 md:mt-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Blog Posts Section */}
        <div className="flex-1">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="mb-8  rounded-lg shadow-md overflow-hidden"
            >
              {/* Blog Image */}
              <Image
                src={post.image}
                alt={`Blog Post ${post.id}`}
                width={600}
                height={400}
                className="w-full h-[450px] object-cover"
              />
              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center space-x-6  text-[#9F9F9F] text-sm mb-4">
                  <p className="flex items-center">
                  <IoPerson className="flex gap-2" />
                    <span className="material-icons ml-1">person</span> Admin
                  </p>
                  <p className="flex items-center">
                  <AiFillCalendar className="flex gap-2" />
                    <span className="material-icons ml-1">calendar_today</span>{" "}
                    14 Oct 2022
                  </p>
                  <p className="flex items-center">
                  <FaTag className="flex gap-2" />
                    <span className="material-icons ml-1">category</span> Wood
                  </p>
                </div>
                <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                <p className="text-[#000000] mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ...
                </p>
                <button className="text-[#000000] font-medium underline">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4 ">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Crafts", "Design", "Handmade", "Interior", "Wood"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-[#000000]"
                  >
                    <span>{category}</span>
                    <span className="text-sm">({Math.floor(Math.random() * 10) + 1})</span>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center space-x-4">
                  <Image
                    src={post.image}
                    alt={`Recent Post ${post.id}`}
                    width={600}
                    height={600}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-sm font-medium">{post.title}</h4>
                    <p className="text-gray-500 text-xs">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button className="w-8 h-8 flex justify-center items-center bg-yellow-600 text-white rounded">
          1
        </button>
        <button className="w-8 h-8 flex justify-center items-center bg-[#F9F1E7] text-[#000000] rounded">
          2
        </button>
        <button className="w-8 h-8 flex justify-center items-center bg-[#F9F1E7] text-[#000000] rounded">
          3
        </button>
        <button className="px-4 py-2 bg-[#F9F1E7] text-[#000000] rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
