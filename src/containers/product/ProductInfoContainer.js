import imgA from "../../assets/product/1667.webp";
import imgB from "../../assets/product/1668.webp";
import imgC from "../../assets/product/1669.avif";
import ProductInfo from "../../components/product/ProductInfo";
import { StyledProductInfoContainer, ProductInfoHeader } from "./ProductInfoContainer.style";

const ProductInfoContainer = () => {
  const options = [
    "옵션 선택",
    "01) 옵션 A",
    "02) 옵션 B",
    "03) 옵션 C"
  ];
  const moreItems = [
    "추가상품 (선택)",
    "01) 상품 A (3,000원)",
    "02) 상품 B (3,000원)",
    "03) 상품 C (3,000원)"
  ];
  const imgArray = [
    imgA,
    imgB,
    imgC
  ];
  return (
    <StyledProductInfoContainer>
      <ProductInfoHeader />
      <ProductInfo
        options={options}
        moreItems={moreItems}
        imgArray={imgArray}
      />
    </StyledProductInfoContainer>
  )
}

export default ProductInfoContainer