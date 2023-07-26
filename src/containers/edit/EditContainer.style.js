import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 140px;
  min-width: 80px;
  height: 60px;
  cursor: pointer;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ButtonWrapper = styled.div`
  & button {
    font-size: 16px;
    margin-right: 8px;
    padding: 16px 32px;
    background-color: #35c5f0;
    color: #fff;
    border-radius: 4px;
  }
`;

export const StyledEditContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 75px auto;
  padding: 20px;
`;
