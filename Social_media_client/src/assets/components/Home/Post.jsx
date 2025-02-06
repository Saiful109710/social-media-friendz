import React from "react";
import { Pencil, Trash2, Heart, MessageCircle, Share } from "lucide-react";

const Post = ({ post,onEdit, onDelete }) => {
  return (
    <div className="relative rounded-2xl shadow-lg p-5 bg-white/10 backdrop-blur-md border border-white/20">
      {/* Floating Edit & Delete Buttons */}
      <div className="absolute top-3 right-3 flex gap-2">
        <button
          className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
          onClick={() => onEdit(post)}
        >
          <Pencil className="w-5 h-5 text-white" />
        </button>
        <button
          className="bg-red-500/20 p-2 rounded-full hover:bg-red-500/30 transition cursor-pointer"
          onClick={() => onDelete(post._id)}
        >
          <Trash2 className="w-5 h-5 text-red-400" />
        </button>
      </div>

      {/* Post Content */}
      <h1 className="text-lg font-semibold text-white">{post.text}</h1>
      {post.media && (
        <img className="w-full rounded-lg mt-3" src={post.media} alt="Post Media" />
      )}

      {/* Divider */}
      <div className="border-t border-white/20 my-4"></div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <button className="flex items-center justify-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
          <Heart className="w-5 h-5 text-red-400" /> <span className="text-white">Like</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
          <MessageCircle className="w-5 h-5 text-blue-400" /> <span className="text-white">Comment</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
          <Share className="w-5 h-5 text-green-400" /> <span className="text-white">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
