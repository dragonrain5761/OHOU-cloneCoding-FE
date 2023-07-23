import styled from "styled-components";
import { useEffect, useState } from "react";
import theme from "../../lib/styles/theme";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../../components/common/";
import axios from "axios";
import ShopListItem from "../../components/main/ShopListItem";

const ShopListContainer = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const queryClient = useQueryClient();
  const MAXPAGE = 10; // 더 알아보쟈
  const SIZE = 8;

  // const { data, isLoading, isError } = useQuery(
  //   ["post", currentPage],
  //   () => getItems(SIZE, currentPage), getItems 함수 정의 필요
  //   {
  //     staleTime: 3000,
  //     keepPreviousData: true, //지난 데이터도 캐싱유지
  //   },
  // );

  // //prefetching
  // useEffect(() => {
  //   if (currentPage <= MAXPAGE - 1) {
  //     const nextPage = currentPage + 1;
  //     queryClient.prefetchQuery(["post", nextPage], () => {
  //       getPosts(SIZE, nextPage);
  //     });
  //   }
  // }, [currentPage, queryClient]);

  const getAllItems = async () => {
    const res = await axios.get("http://localhost:4000/items");
    setItems(res.data);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  if (!items) {
    return <div>Loading..</div>; //skeleton 적용
  }

  // if (isError) return <h3>ERROR!</h3>;
  // if (isLoading) return <h3>ERROR!</h3>;

  const onClickHandler = (id) => {
    console.log(id);
  };

  const onIncreasePage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDecreasePage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <ShopListContainerBlock>
      <h1>오늘의딜 👍</h1>
      <ul className="postsContainer">
        {/* {data?.map((post) => (  useQuery 사용 후 바꾸기*/}
        {items.map((item) => (
          <li key={item.itemId} onClick={() => onClickHandler(item.itemId)}>
            <ShopListItem item={item} />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <Button
          size={"xsmall"}
          disabled={currentPage <= 0}
          onClick={onDecreasePage}>
          <FaChevronLeft />
        </Button>
        <div className="pages">{`${currentPage + 1}/${MAXPAGE - 1}`}</div>
        <Button
          size={"xsmall"}
          disabled={currentPage >= MAXPAGE}
          onClick={onIncreasePage}>
          <FaChevronRight />
        </Button>
      </div>
    </ShopListContainerBlock>
  );
};

export default ShopListContainer;

const ShopListContainerBlock = styled.div`
  ${theme.flexCenterColumn}
  max-width: 1050px;
  height: auto;
  margin: 0 auto;
  padding: 0px 20px;
  h1 {
    width: 100%;
    margin-left: 50px;
    font-size: 1.125rem;
    font-weight: bold;
  }
  li {
    cursor: pointer;
  }
  .postsContainer {
    width: 100%;
    height: auto;
    ${theme.flexCenter}
    flex-wrap: wrap;
    gap: 10px;
  }
  .pages {
    ${theme.flexCenter}
    background-color: ${theme.primaryColor};
    letter-spacing: 2px;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    color: white;
    padding: 10px;
    font-weight: bold;
    font-size: 0.9rem;
  }
  .pagination {
    width: 120px;
    margin-top: 2rem;
    ${theme.flexCenter}
    button {
      background-color: ${theme.lightGrayColor};
    }
  }
`;
