import styles from "./ProductInfo.module.css";
import imgA from "../../assets/product/1667.webp";
import imgB from "../../assets/product/1668.webp";
import imgC from "../../assets/product/1669.avif";

const ProductInfo = () => {
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
    <div className={styles.ProductInfo}>
      <div className={styles.ProductInfo_inner}>
        <p>상품정보</p>
        {imgArray.map((imgSrc, index) => (
          <div className={styles.Image_wrapper} key={index}>
            <img src={imgSrc} alt="" />
          </div>
        ))}
      </div>

      <div className={styles.Order_container}>
        <div>
          <select>
            {options.map((option, index) => (
              <option value={index} key={index}>{option}</option>
            ))}
          </select>

          <select>
            {moreItems.map((item, index) => (
              <option value={index} key={index}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <button>장바구니</button>
          <button>바로구매</button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;