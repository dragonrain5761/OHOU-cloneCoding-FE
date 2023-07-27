import PostListItem from "../../components/main/PostListItem";
import { useEffect, useState } from "react";
import { getPosts } from "../../api/post";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "../../components/common/";
import { useNavigate } from "react-router-dom";
import { PostsQueryKey, usePostsQuery } from "../../hooks/apis/usePostsQuery";
import PostListContainerBlock from "./PostListContainer.style";

const PostListContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const MAXPAGE = 10;
  const SIZE = 8;

  const { data, isLoading, isError } = usePostsQuery(SIZE, currentPage);

  useEffect(() => {
    if (currentPage <= MAXPAGE - 1) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([PostsQueryKey, currentPage], nextPage, () => {
        getPosts(SIZE, nextPage);
      });
    }
  }, [currentPage, queryClient]);

  if (!data) {
    return <div>Loading..</div>;
  }

  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>ERROR!</h3>;

  const onClickHandler = (id) => {
    navigate(`/post/${id}`);
  };

  const onIncreasePage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDecreasePage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <PostListContainerBlock>
      <h1>20평대 활용하기 좋은 템 BEST 👍</h1>
      <ul className="postsContainer">
        {data.data.content?.map((post) => (
          <li key={post.postId} onClick={() => onClickHandler(post.postId)}>
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
        <div className="pages">{`${currentPage + 1}/${MAXPAGE - 1}`}</div>
        <Button
          size={"xsmall"}
          disabled={currentPage >= MAXPAGE}
          onClick={onIncreasePage}>
          <FaChevronRight />
        </Button>
      </div>
    </PostListContainerBlock>
  );
};

export default PostListContainer;
