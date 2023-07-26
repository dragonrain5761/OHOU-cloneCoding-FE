import {
  StyledProductInfo,
  ProductInfoInner,
  ImageWrapper,
  OrderContainer
} from "./ProductInfo.style";

const ProductInfo = ({
  options,
  moreItems,
  imgArray
}) => {

  return (
    <StyledProductInfo>
      <ProductInfoInner>
        <p>상품정보</p>
        {imgArray?.map((imgSrc, index) => (
          <ImageWrapper key={index}>
            <img src={imgSrc} alt="" />
          </ImageWrapper>
        ))}
      </ProductInfoInner>

      <OrderContainer>
        <div>
          <select>
            {options?.map((option, index) => (
              <option value={index} key={index}>{option}</option>
            ))}
          </select>

          <select>
            {moreItems?.map((item, index) => (
              <option value={index} key={index}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <button>장바구니</button>
          <button>바로구매</button>
        </div>
      </OrderContainer>
    </StyledProductInfo>
  )
}

export default ProductInfo;