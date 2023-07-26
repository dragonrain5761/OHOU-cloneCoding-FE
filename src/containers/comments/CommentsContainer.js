import { useState } from "react";
import styled from "styled-components";
import theme from "../../lib/styles/theme";
import Input from "../../components/common/Input";
import profile from "../../assets/profile.png";
import Button from "../../components/common/Button";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { usePostQuery } from "../../hooks/apis/usePostQuery";
import {
  useDeleteCommenttMutation,
  useLikeCommentMutation,
  usePostCommentMutation,
} from "../../hooks/apis/useCommentQuery";

const CommentsContainer = ({ postId }) => {
  const [text, setText] = useState("");
  const { data, isLoading, isError } = usePostQuery(postId);
  const deleteMutate = useDeleteCommenttMutation();
  const likeMutate = useLikeCommentMutation();
  const postMutate = usePostCommentMutation();

  if (isError) return <h3>ERROR!</h3>;
  if (isLoading) return <h3>ERROR!</h3>;

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postMutate([postId, text]);
    setText("");
  };

  const onToggleLike = (commentId) => {
    likeMutate([postId, commentId]);
  };

  const onDeleteHandler = (commentId) => {
    deleteMutate([postId, commentId]);
  };

  return (
    <CommentsBlock>
      <div className="header">
        댓글 <span>{data.data.length}</span>
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
        {data.data.commentList?.map((comment) => (
          <li className="comment" key={comment.commentId}>
            <img src={profile} alt="profile" />
            <div className="main">
              <div className="nickname">
                {" "}
                {comment.nickname}
                {comment.auth && <div className="myComment">내 댓글</div>}
              </div>
              <div className="contents">{comment.comment}</div>
              <div className="menu">
                {comment.createdAt}
                <div className="likeComment">
                  <p
                    className="like"
                    onClick={() => onToggleLike(comment.commentId)}>
                    {comment.hasCommentLiked ? (
                      <p className="hasLikedTrue">
                        <BsHeartFill />
                      </p>
                    ) : (
                      <BsHeart />
                    )}
                    좋아요{comment.commentLikeSize}
                  </p>
                </div>
                {comment.auth && (
                  <div
                    className="deleteComment"
                    onClick={() => onDeleteHandler(comment.commentId)}>
                    삭제
                  </div>
                )}
              </div>
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
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 10px;
      .myComment {
        font-size: 0.75rem;
        background-color: ${theme.primaryColor};
        padding: 4px;
        border-radius: 5px;
        color: white;
      }
    }
    .contents {
      margin-bottom: 10px;
    }
    .menu {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 0.8rem;
      color: ${theme.mediumGrayColor};
      .like {
        ${theme.flexCenter}
        cursor: pointer;
        gap: 5px;

        .hasLikedTrue {
          color: ${theme.primaryColor};
        }
      }
    }
  }
`;
