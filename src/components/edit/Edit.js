import {
  StyledEdit,
  FormInner,
  InputContainer,
  TextareaContainer
} from "./Edit.style";

const Edit = ({
  content,
  inputRef,
  onChangeContent,
  onChangeImage,
  onClickSubmitButton
}) => {
  return (
    <StyledEdit>
      <form onSubmit={onClickSubmitButton}>
        <FormInner>
          <InputContainer>
            <p>사진을 끌어다 놓으세요</p>
            <p>10장까지 올릴 수 있어요</p>
            <input
              ref={inputRef}
              type='file'
              accept='image/*'
              onChange={onChangeImage}
            />
          </InputContainer>
        </FormInner>

        <TextareaContainer>
          <textarea
            value={content}
            onChange={onChangeContent}
            placeholder="어떤 사진인지 짧은 소개로 시작해보세요.&#13;&#10;다양한 #태그도 추가할 수 있어요."
          >
          </textarea>
        </TextareaContainer>
      </form>
    </StyledEdit>
  )
}

export default Edit