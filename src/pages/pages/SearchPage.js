import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header";
import { useSearchQuery } from "../../hooks/apis/useSearchQuery";
import { getSearchItems } from "../../api/item";
import ShopListContainer from "../../containers/main/ShopListContainer";

const SearchPage = () => {
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const queryClient = useQueryClient();
  const [items, setItems] = useState([]);

  const MAXPAGE = 10; // 더 알아보쟈
  const SIZE = 12;

  const { data, isLoading, isError } = useSearchQuery(
    keyword,
    SIZE,
    currentPage,
  );

  //prefetching
  useEffect(() => {
    if (currentPage <= MAXPAGE - 1) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([useSearchQuery, nextPage], () => {
        getSearchItems(keyword, SIZE, nextPage);
      });
    }
  }, [currentPage, queryClient]);

  // const getAllItems = async () => {
  //   const res = await axios.get("http://localhost:4000/items");
  //   setItems(res.data);
  // };

  // useEffect(() => {
  //   getAllItems();
  // }, []);

  return (
    <>
      <Header />
      <ShopListContainer seacrhItems={data} />
    </>
  );
};

export default SearchPage;
