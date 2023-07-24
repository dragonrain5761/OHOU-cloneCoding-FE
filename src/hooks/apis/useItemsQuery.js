import { useQuery } from "@tanstack/react-query";
import { getItems } from "../../api/item";

export const ItemQueryKey = "items";
//전체 데이터 get
export const useItemsQuery = (size, currentPage) => {
  return useQuery(
    [ItemQueryKey, currentPage],
    () => getItems(size, currentPage),
    {
      staleTime: 3000,
      keepPreviousData: true, //지난 데이터도 캐싱유지
    },
  );
};
