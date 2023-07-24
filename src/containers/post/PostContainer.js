import { useEffect, useState } from "react";
import { getPost, getPosts, updatePost } from "../../api/post";

import Post from "../../components/post/Post";
import { useNavigate } from "react-router-dom";
import {
  useUpdatePostMutation,
  usePostQuery,
} from "../../hooks/apis/usePostQuery";
import Swal from "sweetalert2";

const PostContainer = ({ postId }) => {
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const [onSelected, setOnSelected] = useState(false);

  // const { data, isLoading, isError } = usePostQuery();

  // // update 함수이므로 글쓰기 페이지로 함수 이동
  // const { mutate, isLoading2, isError2 } = useUpdatePostMutation();
  // console.log(useUpdatePostMutation);
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
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //삭제 로직
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const onToggleSelected = () => {
    setOnSelected(!onSelected);
  };

  //update 함수이므로 글쓰기 페이지로 함수 이동
  const handleUpdate = async (e) => {
    // const updatedPost = {};
    // e.preventDefault();
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
    />
  );
};

export default PostContainer;
