import { AiFillStar } from "react-icons/ai";
import imgTD from "../../assets/product/today-departure.png";
import {
  StyledProduct,
  ImageWrapper,
  TitleContainer,
  StarContainer,
  PriceContainer,
  InfoContainer,
  OrderContainer
} from "./Product.style";

const Product = ({
  item,
  options,
  moreItems,
  onClickPurchaseButton,
  onClickCartButton,
  onChangeOption,
  onChangeMoreItem
  }) => {
  const { itemName, itemTitle, price, itemImg } = item;

  return (
    <StyledProduct>
      <ImageWrapper>
        <img src={itemImg} alt="" />
        {/* <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168963869950419934.jpg" alt="" /> */}
      </ImageWrapper>

      <div>
        <div>
          <TitleContainer>
            <p>{itemName}</p>
            <p>{itemTitle}</p>
          </TitleContainer>

          <StarContainer>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p>43,500개 리뷰</p>
          </StarContainer>

          <PriceContainer>
            <p>50%</p>
            <p>{price}</p>
            <p>원</p>
            <div>
              <img src={imgTD} alt="" />
            </div>
          </PriceContainer>

          <InfoContainer>
            <p>해택</p>
            <p>
              <span>10P 적립 (WELCOME 0.1%적립)</span>
              <span>최대 10% 결제할인(토스페이)</span>
            </p>
          </InfoContainer>

          <InfoContainer>
            <p>배송</p>
            <p>
              <span>3000원 (12,000원 이상 구매시 무료배송)</span>
              <span>12:00까지 결제 시 오늘 출발</span>
              <span>일반택배</span>
            </p>
          </InfoContainer>
        </div>

        <OrderContainer>
          <select
            onChange={onChangeOption}
          >
            {options.map((option, index) => (
              <option value={index} key={index}>{option}</option>
            ))}
          </select>

          <select
            onChange={onChangeMoreItem}
          >
            {moreItems.map((item, index) => (
              <option value={index} key={index}>{item}</option>
            ))}
          </select>

          <div>
            <button
              onClick={onClickCartButton}
            >
              장바구니
            </button>
            <button
              onClick={onClickPurchaseButton}
            >
              바로구매
            </button>
          </div>
        </OrderContainer>
      </div>
    </StyledProduct>
  );
};

export default Product;
