import React from "react";
import BlogsComponent from "./Blogs";
import './blogs.css';
import PostsComponent from "./Posts";

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
interface PostData {
  title: string;
  imageUrl: string;
  author: string;
  authorAvatar: string;
  date: string;
  link: string;
  bgColor: string;
  decription?: string;
}
interface PostsProps {
  bigTitle: string;
  description: string;
  postsData?: PostData[]
}

export const Blogs: React.FC<BlogsProps> = ({ title, description, blogsData }) => {
  return <BlogsComponent title={title} description={description} blogsData={blogsData} />
}

export const Posts: React.FC<PostsProps> = ({bigTitle, description, postsData}) => {
  return <PostsComponent bigTitle={bigTitle} description={description} postsData={postsData} />
}