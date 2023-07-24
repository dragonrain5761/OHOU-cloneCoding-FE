import { useEffect, useState } from "react";
import { getPosts } from "../../api/post";
import styled from "styled-components";
import theme from "../../lib/styles/theme";
import Input from "../../components/common/Input";
import profile from "../../assets/profile.png";
import Button from "../../components/common/Button";

const CommentsContainer = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const getAllPosts = async () => {
    const res = await getPosts(); //getPost로 변경
    setComments(res.data[0].commentList);
  };

  // const { data, isLoading, isError } = useQuery("post", getPost(postId), {
  //   staleTime: 3000,
  //   keepPreviousData: true, //지난 데이터도 캐싱유지
  // });

  // if (isError) return <h3>ERROR!</h3>;
  // if (isLoading) return <h3>ERROR!</h3>;

  useEffect(() => {
    getAllPosts();
  }, []);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //postComment(postId, {comment : text})
    setText("");
  };

  return (
    <CommentsBlock>
      <div className="header">
        댓글 <span>{comments.length}</span>
      </div>
      <div className="input">
        <img src={profile} alt="profile" />
        <Input
          placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
          onChange={onChangeHandler}
        />
        <Button size={"xsmall"} onClick={onSubmitHandler}>
          입력
        </Button>
      </div>
      <CommentBlock className="comments">
        {comments?.map((comment) => (
          <li className="comment" key={comment.commentId}>
            <img src={profile} alt="profile" />
            <div className="main">
              <div className="nickname"> {comment.nickname}</div>
              <div className="contents">{comment.comment}</div>
              <div className="createdAt">{comment.createdAt}</div>
            </div>
          </li>
        ))}
      </CommentBlock>
    </CommentsBlock>
  );
};

export default CommentsContainer;

const CommentsBlock = styled.div`
  ${theme.flexCenterColumn}
  margin-top: 3rem;
  width: 100%;
  max-width: 1020px;
  .header {
    width: 80%;
    gap: 6px;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    font-weight: bold;
    span {
      color: ${theme.primaryColor};
    }
  }
  .input {
    ${theme.flexCenter}
    width: 80%;
    position: relative;

    img {
      width: 40px;
      height: 40px;
    }
    button {
      position: absolute;
      right: 4%;
      font-size: 1rem;
      color: ${theme.mediumGrayColor};
      font-weight: bold;
    }
    input {
      border: 2px solid ${theme.lightGrayColor};
      width: 90%;
      height: 45px;

      &::placeholder {
        overflow: hidden;
        color: ${theme.mediumGrayColor};
      }
    }
  }
`;

const CommentBlock = styled.div`
  width: 80%;
  padding: 3rem 2rem;
  li {
    margin: 0px 0px 40px 25px;
    position: relative;
    .main {
      padding-left: 50px;
    }
    img {
      position: absolute;
      width: 40px;
      height: 40px;
    }
    .nickname {
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    .contents {
      margin-bottom: 10px;
    }
    .createdAt {
      font-size: 0.8rem;
      color: ${theme.mediumGrayColor};
    }
  }
`;
