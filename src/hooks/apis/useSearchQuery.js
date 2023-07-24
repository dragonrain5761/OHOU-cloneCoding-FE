import { useQuery } from "@tanstack/react-query";
import { getSearchItems } from "../../api/item";

export const SearchQueryKey = "searchPosts";
//전체 데이터 get
export const useSearchQuery = (keyword, size, currentPage) => {
  return useQuery(
    [SearchQueryKey, currentPage],
    () => getSearchItems(keyword, size, currentPage),
    {
      staleTime: 3000,
      keepPreviousData: true,
    },
  );
};
