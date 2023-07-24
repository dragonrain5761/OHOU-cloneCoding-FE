import { useEffect, useState } from "react";
import { getPost, getPosts, updatePost } from "../../api/post";

import Post from "../../components/post/Post";
import { useNavigate } from "react-router-dom";
import {
  useUpdatePostMutation,
  usePostQuery,
  useLikePostMutation,
} from "../../hooks/apis/usePostQuery";
import Swal from "sweetalert2";
import theme from "../../lib/styles/theme";

const PostContainer = ({ postId }) => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const [onSelected, setOnSelected] = useState(false);

  // const { data, isLoading, isError } = usePostQuery();
  // // // update 함수이므로 글쓰기 페이지로 함수 이동
  // const {
  //   mutate: updateMutate,
  //   isLoading2,
  //   isError2,
  // } = useUpdatePostMutation();
  // const { mutate: likeMutate, isLoading3, isError3 } = useLikePostMutation();
  // // 삭제 로직도 추가

  const getAllPosts = async () => {
    const res = await getPosts();
    setPost(res.data[0]);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const onClickToUpdate = () => {
    navigate(`/edit/${postId}`);
  };

  const onClickToDelete = () => {
    Swal.fire({
      title: "게시물을 삭제하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: `${theme.primaryColor}`,
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제하기",
      cancelButtonText: "취소하기",
      customClass: {
        popup: "my-popup",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        //삭제 로직1
        Swal.fire({
          title: "삭제 완료",
          text: "게시물 삭제가 성공적으로 완료되었습니다.",
          icon: "success",
          confirmButtonColor: `${theme.primaryColor}`,
          customClass: {
            popup: "my-popup",
          },
        });
      }
    });
  };

  const onToggleSelected = () => {
    setOnSelected(!onSelected);
  };

  const onLikePost = () => {
    console.log(postId);
    // likeMutate(postId);
  };

  //update 함수이므로 글쓰기 페이지로 함수 이동
  const handleUpdate = async (e) => {
    const updatedPost = {};
    e.preventDefault();
    // mutate(postId, updatedPost);
  };

  // if (isError) return <h3>ERROR!</h3>;
  // if (isLoading) return <h3>ERROR!</h3>;

  return (
    <Post
      post={post}
      onSelected={onSelected}
      onToggleSelected={onToggleSelected}
      onClickToUpdate={onClickToUpdate}
      onClickToDelete={onClickToDelete}
      onLikePost={onLikePost}
    />
  );
};

export default PostContainer;
