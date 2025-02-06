import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { AiOutlineComment, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import Post from "./Post";
import useGetPost from "../../../hooks/useGetPost";


const Posts = () => {
  const {posts,isLoading,refetch} = useGetPost()

  const handleLikeBtn = async (id) => {
    const {data} = await axios.patch(`http://localhost:3000/getPosts/${id}`,{like:1})
    refetch();
  }

  const handleDeletePost = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`)
    refetch();
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <>
         <Post onDelete={handleDeletePost} key={post._id} post={post}></Post>
        </>
      ))}
    </div>
  );
};

export default Posts;
