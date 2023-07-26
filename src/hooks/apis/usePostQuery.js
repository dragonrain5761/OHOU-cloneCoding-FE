import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPost, likePost, updatePost } from "../../api/post";

export const PostQueryKey = "post";
export const usePostQuery = (postId) => {
  return useQuery([PostQueryKey, postId], () => getPost(postId), {
    enabled: !!postId,
    staleTime: 3000,
    keepPreviousData: true,
  });
};

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updatePost, {
    onSuccess: (data) => {
      queryClient.setQueryData(PostQueryKey, (prevData) => ({
        ...prevData,
        data: [...prevData.data, data.data],
      }));
    },
  });
  return mutate;
};

export const useDeletePostMutation = () => {
  const { mutate } = useMutation(deletePost);
  return mutate;
};

export const useLikePostMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(likePost, {
    //바로 상태 반영?

    onSuccess: () => {
      queryClient.invalidateQueries([PostQueryKey]);

    },
  });
  return mutate;
};
