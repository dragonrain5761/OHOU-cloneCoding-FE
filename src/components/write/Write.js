import styles from "./Write.module.css";

const Write = ({
  content,
  inputRef,
  onChangeContent,
  onChangeImage,
  onClickSubmitButton
}) => {
  return (
    <div className={styles.Write}>
      <form onSubmit={onClickSubmitButton}>
        <div className={styles.Input_container}>
          <div>
            <p>사진을 끌어다 놓으세요</p>
            <p>10장까지 올릴 수 있어요</p>
            <input
              ref={inputRef}
              type='file'
              accept='image/*'
              onChange={onChangeImage}
            />
          </div>
        </div>

        <div className={styles.Textarea_container}>
          <textarea
            value={content}
            onChange={onChangeContent}
            placeholder="어떤 사진인지 짧은 소개로 시작해보세요.&#13;&#10;다양한 #태그도 추가할 수 있어요."
          >
          </textarea>
        </div>
      </form>
    </div>
  )
};

export default Write;
