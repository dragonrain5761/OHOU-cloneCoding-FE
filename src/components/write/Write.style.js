import styled from 'styled-components';

export const StyledWrite = styled.div`
  max-width: 900px;
  margin: 0 auto;

  & form {
    width: 100%;
    display: flex;
  }
`;

export const FormInner = styled.div`
  width: 50%;
  position: relative;
  background-color: rgb(247, 249, 250);
  
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  & p {
    margin-bottom: 8px;
    
    &:nth-of-type(1) {
      color: rgb(130, 140, 148);
      font-weight: bold;
    }
  }
`;

export const TextareaContainer = styled.div`
  width: calc(50% - 24px);
  margin: 0 12px;
  
  & textarea {
    width: 100%;
    height: 144px;
    box-sizing: border-box;
    padding: 16px;
    resize: none;
  }
`;
