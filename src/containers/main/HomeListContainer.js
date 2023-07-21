import styled from "styled-components";
import HomeListItem from "../../components/main/HomeListItem";

const HomeListContainer = () => {
  return (
    <HomeListContainerBlock>
      <h1>집사진 BEST 👍</h1>
      <HomeListItem />
    </HomeListContainerBlock>
  );
};

export default HomeListContainer;

const HomeListContainerBlock = styled.div`
  width: 1050px;
  height: 1000px;
  background-color: lightgrey;
  margin: 0 auto;
`;
