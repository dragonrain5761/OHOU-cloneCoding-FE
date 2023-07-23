import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getPost, getPosts } from "../../api/post";

import Post from "../../components/post/Post";

const PostContainer = ({ postId }) => {
  const [post, setPost] = useState({});

  const getAllPosts = async () => {
    const res = await getPosts();
    setPost(res.data[0]);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    getAllPosts();
  }, []);

  // const { data, isLoading, isError } = useQuery("post", getPost(postId), {
  //   staleTime: 3000,
  //   keepPreviousData: true, //지난 데이터도 캐싱유지
  // });

  // if (isError) return <h3>ERROR!</h3>;
  // if (isLoading) return <h3>ERROR!</h3>;

  return <Post post={post} />;
};

export default PostContainer;
