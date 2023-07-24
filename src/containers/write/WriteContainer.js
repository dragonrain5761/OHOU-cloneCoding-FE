import styles from "./WriteContainer.module.css";
import Write from "../../components/write/Write";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const WriteContainer = () => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onChangeImage = (e) => {
    console.log(e.target.files[0]);
    console.log(typeof e.target.files[0]);

    setImage(e.target.files[0]);
  }

  const onClickSubmitButton = (e) => {
    e.preventDefault();

    const newItem = {
      title,
      content
    };

    const formData = new FormData();
    const jsonNewItem = JSON.stringify(newItem);
    const blob = new Blob([jsonNewItem], { type: "application/json" });

    formData.append("data", blob);
    formData.append("image", image);

    console.log(formData);

    setTitle('');
    setContent('');
    inputRef.current.value = null;
  }

  return (
    <div className={styles.ItemAdd_container}>
      <Write
        title={title}
        content={content}
        navigate={navigate}
        inputRef={inputRef}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onChangeImage={onChangeImage}
        onClickSubmitButton={onClickSubmitButton}
      />
    </div>
  )
};

export default WriteContainer;
