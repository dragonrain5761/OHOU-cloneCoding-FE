import {
  StyledWrite,
  FormInner,
  InputContainer,
  TextareaContainer
} from "./Write.style";

const Write = ({
  content,
  inputRef,
  onChangeContent,
  onChangeImage,
  onClickSubmitButton
}) => {
  return (
    <StyledWrite>
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
    </StyledWrite>
  )
};

export default Write;
