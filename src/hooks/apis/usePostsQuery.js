import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/post";

export const PostsQueryKey = "posts";
//전체 데이터 get
export const usePostsQuery = (size, currentPage) => {
  return useQuery(
    [PostsQueryKey, currentPage],
    () => getPosts(size, currentPage),
    {
      staleTime: 3000,
      keepPreviousData: true, //지난 데이터도 캐싱유지
    },
  );
};
