import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../../components/common/";
import axios from "axios";
import ShopListItem from "../../components/main/ShopListItem";
import { ItemQueryKey } from "../../hooks/apis/useItemsQuery";
import { useNavigate } from "react-router-dom";
import ShopListContainerBlock from "./ShopListContainer.style";

const ShopListContainer = ({ searchItems }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const MAXPAGE = 10; // 더 알아보쟈
  const SIZE = 8;

  // const { data, isLoading, isError } = useItemQuery(size, currentPage)

  // //prefetching
  // useEffect(() => {
  //   if (currentPage <= MAXPAGE - 1) {
  //     const nextPage = currentPage + 1;
  // queryClient.prefetchQuery([ItemQueryKey, currentPage], nextPage], () => {
  //       getItems(SIZE, nextPage);
  //     });
  //   }
  // }, [currentPage, queryClient]);

  //** searchItems props가 있으면 그걸로 사용, 없으면 useItemQuery의 data 사용

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
    navigate(`/item/${id}`);
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
