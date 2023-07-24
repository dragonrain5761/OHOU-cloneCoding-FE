import Product from "../../components/product/Product";
import styles from "./ProductContainer.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getItem } from "../../api/item";
import { useParams } from "react-router-dom";

const ProductContainer = () => {
  const params = useParams();
  const { data: item, isLoading, error } = useQuery(["item", params.itemId], () => getItem(params.itemId));

  const options = [
    "향 선택 (3개 구매 시 3+1)",
    "01)딥체리(9,900원)",
    "02)피치티(9,900원)",
    "03)쥬시프룻(9,900원)"
  ];
  const moreItems = [
    "추가상품 (선택)",
    "드라이플라워 믹스랜덤2종 (3,000원)",
    "드라이플라워 믹스랜덤3종 (4,000원)",
    "25cm 블랙스틱 (1,000원)"
  ];
  const [optionIndex, setOptionIndex] = useState(0);
  const [moreItemIndex, setMoreItemIndex] = useState(0);  

  const onClickPurchaseButton = () => {
    alert(`
      상품명: ${item.data.itemName},
      가격: ${item.data.price},
      옵션: ${optionIndex === 0 ? "" : options[optionIndex]},
      추가상품: ${moreItemIndex === 0 ? "" : moreItems[moreItemIndex]}

      을 구매했습니다!
    `);
  }

  const onClickCartButton = () => {
    alert(`
      상품명: ${item.data.itemName},
      가격: ${item.data.price},
      옵션: ${optionIndex === 0 ? "" : options[optionIndex]},
      추가상품: ${moreItemIndex === 0 ? "" : moreItems[moreItemIndex]}

      이 장바구니에 추가되었습니다!
    `);
  }

  const onChangeOption = (e) => {
    // console.log(e.target.value);
    setOptionIndex(e.target.value);
  }

  const onChangeMoreItem = (e) => {
    // console.log(e.target.value);
    setMoreItemIndex(e.target.value);
  }

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className={styles.ProductContainer}>
      <Product
        item={item.data}
        options={options}
        moreItems={moreItems}
        onClickPurchaseButton={onClickPurchaseButton}
        onClickCartButton={onClickCartButton}
        onChangeOption={onChangeOption}
        onChangeMoreItem={onChangeMoreItem}
      />
    </div>
  )
}

export default ProductContainer