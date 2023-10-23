import React from "react";
import BlogsComponent from "./Blogs";
import './blogs.css';

interface BlogData {
  tag: string;
  title: string;
  imageUrl: string;
  link: string;
  bgColor: string;
}
interface BlogsProps {
  title?: string;
  description?: string;
  blogsData?: BlogData[]
}

export const Blogs: React.FC<BlogsProps> = ({ title, description, blogsData }) => {
  return <BlogsComponent title={title} description={description} blogsData={blogsData} />
}