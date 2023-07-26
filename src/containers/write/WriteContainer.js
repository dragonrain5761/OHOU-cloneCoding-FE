import styles from "./WriteContainer.module.css";
import Write from "../../components/write/Write";
import src from "../../assets/logo.jpg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost } from "../../api/post";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const WriteContainer = () => {
  // const addPost = async (formData) => {
  //   const Access = localStorage.getItem("Access");
  //   const Refresh = localStorage.getItem("Refresh");

  //   await axios.post(
  //     `${process.env.REACT_APP_API_URL}/api/posts`,
  //     formData,
  //     { 
  //       headers: {
  //         Access: `Bearer ${Access}`,
  //         Refresh: `Bearer ${Refresh}`,
  //         "Content-Type": "multipart/form-data",
  //       },
  //       withCrentials: true
  //     }
  //   );
  // }

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const queryClient = useQueryClient();
  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("post")
      console.log("Added post successfully!")
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

    setImage(e.target.files[0]);
  }

  const onClickUploadButton = (e) => {
    e.preventDefault();

    const newItem = {
      content
    };

    const formData = new FormData();
    const jsonNewItem = JSON.stringify(newItem);
    const blob = new Blob([jsonNewItem], { type: "application/json" });

    formData.append("postRequestDto", blob);
    formData.append("postImg", image);

    console.log(formData);

    mutation.mutate(formData);

    setContent("");
    inputRef.current.value = null;
  }

  return (
    <>
      <div className={styles.Header}>
        <div className={styles.Image_wrapper}>
          <img src={src} alt="" onClick={onClickToHome}/>
        </div>

        <div className={styles.Button_wrapper}>
          <button onClick={onClickUploadButton}>
            올리기
          </button>
        </div>
      </div>

      <div className={styles.Write_container}>
        <Write
          content={content}
          inputRef={inputRef}
          onChangeContent={onChangeContent}
          onChangeImage={onChangeImage}
        />
      </div>
    </>
  )
};

export default WriteContainer;
