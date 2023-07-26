import Edit from "../../components/edit/Edit";
import src from "../../assets/logo.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  StyledHeader,
  ImageWrapper,
  ButtonWrapper,
  StyledEditContainer
} from "./EditContainer.style";
import {
  usePostQuery
} from "../../hooks/apis/usePostQuery";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const EditContainer = () => {
  const editPost = async (editItem) => {
    const Access = localStorage.getItem("Access");
    const Refresh = localStorage.getItem("Refresh");

    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/posts/${editItem.id}`,
      editItem.content,
      { 
        headers: {
          Access: `Bearer ${Access}`,
          Refresh: `Bearer ${Refresh}`,
        },
        withCrentials: true
      }
    );
  }
  const params = useParams();
  const { data, isLoading, isError } = usePostQuery(params.postId);
  const prevContent = data?.data.content;

  const navigate = useNavigate();
  const [content, setContent] = useState(prevContent);

  const queryClient = useQueryClient();
  const mutation = useMutation(editPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post")
      console.log("Edited post successfully!")
    }
  })

  const onClickToHome = () => {
    navigate("/");
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onChangeImage = (e) => {
    console.log(e.target.files[0]);
    console.log(typeof e.target.files[0]);
  }

  const onClickUploadButton = (e) => {
    e.preventDefault();

    const contentObj = {
      content
    };

    const editItem = {
      id: params.postId,
      content: contentObj
    };

    mutation.mutate(editItem);

    setContent("");
  }

  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>ERROR!</h3>;

  return (
    <>
      <StyledHeader>
        <ImageWrapper>
          <img src={src} alt="" onClick={onClickToHome}/>
        </ImageWrapper>

        <ButtonWrapper>
          <button onClick={onClickUploadButton}>
            올리기
          </button>
        </ButtonWrapper>
      </StyledHeader>

      <StyledEditContainer>
        <Edit
          content={content}
          onChangeContent={onChangeContent}
          onChangeImage={onChangeImage}
        />
      </StyledEditContainer>
    </>
  )
};

export default EditContainer;
