import Product from "../../components/product/Product";
import styles from "./ProductContainer.module.css";
import itemImg from "../../assets/product/diffuser.avif";
import { useState } from "react";

const ProductContainer = () => {
  const item = {
    itemId: 1,
    itemName: "디퓨저",
    title: "[토스페이10%] (3+1이벤트) 네이처 디퓨저 200ml / 드라이플라워 증정",
    price: "9,900원",
    options: [
      "향 선택 (3개 구매 시 3+1)",
      "01)딥체리(9,900원)",
      "02)피치티(9,900원)",
      "03)쥬시프룻(9,900원)"
    ],
    moreItems: [
      "추가상품 (선택)",
      "드라이플라워 믹스랜덤2종 (3,000원)",
      "드라이플라워 믹스랜덤3종 (4,000원)",
      "25cm 블랙스틱 (1,000원)"
    ],
    itemImg
  };

  const [optionIndex, setOptionIndex] = useState(0);
  const [moreItemIndex, setMoreItemIndex] = useState(0);  

  const onClickPurchaseButton = () => {
    alert(`
      상품명: ${item.itemName},
      가격: ${item.price},
      옵션: ${optionIndex === 0 ? "" : item.options[optionIndex]},
      추가상품: ${moreItemIndex === 0 ? "" : item.moreItems[moreItemIndex]}

      을 구매했습니다!
    `);
  }

  const onClickCartButton = () => {
    alert(`
      상품명: ${item.itemName},
      가격: ${item.price},
      옵션: ${optionIndex === 0 ? "" : item.options[optionIndex]},
      추가상품: ${moreItemIndex === 0 ? "" : item.moreItems[moreItemIndex]}

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

  return (
    <div className={styles.ProductContainer}>
      <Product
        item={item}
        onClickPurchaseButton={onClickPurchaseButton}
        onClickCartButton={onClickCartButton}
        onChangeOption={onChangeOption}
        onChangeMoreItem={onChangeMoreItem}
      />
    </div>
  )
}

export default ProductContainer