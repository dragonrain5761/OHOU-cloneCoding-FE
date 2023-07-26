import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "../../components/common/";
import ShopListItem from "../../components/main/ShopListItem";
import { ItemQueryKey, useItemsQuery } from "../../hooks/apis/useItemsQuery";
import { useNavigate } from "react-router-dom";
import ShopListContainerBlock from "./ShopListContainer.style";
import { getItems } from "../../api/item";

const ShopListContainer = ({
  searchItems,
  keyword,
  currentPageSearch,
  onIncreaseSearch,
  onDecreaseSearch,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const MAXPAGE = 10; // 더 알아보쟈
  const SIZE = 8;

  const { data, isLoading, isError } = useItemsQuery(SIZE, currentPage);

  useEffect(() => {
    if (currentPage <= MAXPAGE - 1) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([ItemQueryKey, currentPage], nextPage, () => {
        getItems(SIZE, nextPage);
      });
    }
  }, [currentPage, queryClient]);

  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>ERROR!</h3>;

  const onClickHandler = (id) => {
    navigate(`/item/${id}`);
  };

  const onIncreaseHome = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDecreaseHome = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <ShopListContainerBlock searchItems={searchItems}>
      {searchItems ? (
        <>
          <h1>{`"${keyword}" 검색 결과 🔍`}</h1>
        </>
      ) : (
        <h1>오늘의딜 👍</h1>
      )}
      <ul className="postsContainer">
        {searchItems
          ? searchItems.map((item) => (
              <li key={item.itemId} onClick={() => onClickHandler(item.itemId)}>
                <ShopListItem item={item} />
              </li>
            ))
          : data.data.content.map((item) => (
              <li key={item.itemId} onClick={() => onClickHandler(item.itemId)}>
                <ShopListItem item={item} />
              </li>
            ))}
      </ul>
      {searchItems?.length === 0 && <p>검색 결과 없음</p>}
      <div className="pagination">
        {searchItems ? (
          <>
            <Button
              size={"xsmall"}
              disabled={currentPageSearch <= 0}
              onClick={onDecreaseSearch}>
              <FaChevronLeft />
            </Button>
            <div className="pages">{`${currentPageSearch + 1}/${
              MAXPAGE - 1
            }`}</div>
            <Button
              size={"xsmall"}
              disabled={currentPageSearch >= MAXPAGE}
              onClick={onIncreaseSearch}>
              <FaChevronRight />
            </Button>
          </>
        ) : (
          <>
            <Button
              size={"xsmall"}
              disabled={currentPage <= 0}
              onClick={onDecreaseHome}>
              <FaChevronLeft />
            </Button>
            <div className="pages">{`${currentPage + 1}/${MAXPAGE - 1}`}</div>
            <Button
              size={"xsmall"}
              disabled={currentPage >= MAXPAGE}
              onClick={onIncreaseHome}>
              <FaChevronRight />
            </Button>
          </>
        )}
      </div>
    </ShopListContainerBlock>
  );
};

export default ShopListContainer;
