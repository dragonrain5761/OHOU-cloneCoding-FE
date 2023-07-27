import Input from "../../components/common/Input";
import profile from "../../assets/profile.png";
import Button from "../../components/common/Button";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { CommentBlock, CommentsBlock } from "./Comments.style";

const Comments = ({
  data,
  onChangeHandler,
  onSubmitHandler,
  onDeleteHandler,
  onToggleLike,
}) => {
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
                {comment.createdAt.slice(0, 10)}
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

export default Comments;
