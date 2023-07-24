import styles from "./Write.module.css";

const Write = ({
  title,
  content,
  navigate,
  inputRef,
  onChangeTitle,
  onChangeContent,
  onChangeImage,
  onClickSubmitButton
}) => {
  return (
    <>
      <div className={styles.ItemAdd}>
        {/* Form area */}
        <h3>Write...!</h3>

        <form onSubmit={onClickSubmitButton}>
          <div className={styles.ItemAdd_input_container}>
            <label>Title</label>
            <input
              type='text'
              value={title}
              onChange={onChangeTitle}
            />
          </div>

          <div className={styles.ItemAdd_textarea_container}>
            <label>Content</label>
            <textarea
              value={content}
              onChange={onChangeContent}
            >
            </textarea>
          </div>

          <div className={styles.ItemAdd_input_container}>
            <label>Image</label>
            <input
              ref={inputRef}
              type='file'
              accept='image/*'
              onChange={onChangeImage}
            />
          </div>

          <div className={styles.ItemAdd_button_container}>
            <button type="submit">Add</button>
            <button onClick={() => {
              navigate('/')
            }}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  )
};

export default Write;
