import styled from "styled-components";
import PostListItem from "../../components/main/PostListItem";
import { useEffect, useState } from "react";
import { getPosts } from "../../api/post";
import theme from "../../lib/styles/theme";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../../components/common/";

const PostListContainer = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const queryClient = useQueryClient();
  const MAXPAGE = 10; // 더 알아보쟈
  const SIZE = 8;

  // const { data, isLoading, isError } = useQuery(
  //   ["post", currentPage],
  //   () => getPosts(SIZE, currentPage),
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

  const getAllPosts = async () => {
    const res = await getPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  if (!posts) {
    return <div>Loading..</div>; //skeleton 적용
  }

  // if (isError) return <h3>ERROR!</h3>;
  // if (isLoading) return <h3>ERROR!</h3>;

  const onClickHandler = () => {};

  const onIncreasePage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDecreasePage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <HomeListContainerBlock>
      <h1>20평대 활용하기 좋은 템 BEST 👍</h1>
      <ul className="postsContainer">
        {/* {data?.map((post) => (  useQuery 사용 후 바꾸기*/}
        {posts.map((post) => (
          <li key={post.postId} onClick={onClickHandler}>
            <PostListItem post={post} />
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
        {/* -1? */}
        <div className="pages">{`${currentPage + 1}/${MAXPAGE - 1}`}</div>
        <Button
          size={"xsmall"}
          disabled={currentPage >= MAXPAGE}
          onClick={onIncreasePage}>
          <FaChevronRight />
        </Button>
      </div>
    </HomeListContainerBlock>
  );
};

export default PostListContainer;

const HomeListContainerBlock = styled.div`
  ${theme.flexCenterColumn}
  max-width: 1050px;
  height: auto;
  margin: 1rem auto;
  padding: 30px 40px;
  gap: 10px;
  h1 {
    width: 100%;
    margin-left: 50px;
    font-size: 1.125rem;
    font-weight: bold;
  }
  .postsContainer {
    width: 100%;
    height: auto;
    ${theme.flexCenter}
    flex-wrap: wrap;
    flex: 1;
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
