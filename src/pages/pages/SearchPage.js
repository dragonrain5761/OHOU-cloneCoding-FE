import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import {
  SearchQueryKey,
  useSearchQuery,
} from "../../hooks/apis/useSearchQuery";
import { getSearchItems } from "../../api/item";
import ShopListContainer from "../../containers/main/ShopListContainer";

const SearchPage = () => {
  const MAXPAGE = 10; // 더 알아보쟈
  const SIZE = 12;
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, isError } = useSearchQuery(
    keyword,
    SIZE,
    currentPage,
  );
  const queryClient = useQueryClient();
  const searchItems = data?.data.content;

  useEffect(() => {
    if (currentPage <= MAXPAGE - 1) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([SearchQueryKey, currentPage], nextPage, () => {
        getSearchItems(keyword, SIZE, nextPage);
      });
    }
  }, [currentPage, keyword, queryClient]);

  const onIncreaseSearch = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDecreaseSearch = () => {
    setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>ERROR!</div>;
  }

  return (
    <>
      <Header />
      <ShopListContainer
        searchItems={searchItems}
        keyword={keyword}
        currentPageSearch={currentPage}
        onIncreaseSearch={onIncreaseSearch}
        onDecreaseSearch={onDecreaseSearch}
      />
    </>
  );
};

export default SearchPage;
