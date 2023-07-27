import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPost, likePost, updatePost } from "../../api/post";
import { PostsQueryKey } from "./usePostsQuery";

export const PostQueryKey = "post";
//게시물 가져오기
export const usePostQuery = (postId) => {
  return useQuery([PostQueryKey, postId], () => getPost(postId), {
    enabled: !!postId,
    staleTime: 3000,
    keepPreviousData: true,
  });
};

//게시물 수정
export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updatePost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([PostQueryKey]);
    },
  });
  return mutate;
};

//게시물 삭제
export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deletePost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries([PostsQueryKey]); //전체 포스트 조회 query key로 invalidate ("/")
    },
  });
  return mutate;
};

//게시물 좋아요
export const useLikePostMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(likePost, {
    onSuccess: () => {
      queryClient.invalidateQueries([PostQueryKey]);
    },
  });
  return mutate;
};
