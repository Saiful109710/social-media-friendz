import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import useAxiosPublic from './useAxiosPublic';

const useGetPost = () => {
  const axiosSecure = useAxiosPublic()

    const {
        data: posts = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
          const { data } = await axiosSecure.get("http://localhost:3000/getPosts");
          return data;
        },
      });
  return {posts,isLoading,refetch}
}

export default useGetPost
