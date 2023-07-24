import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
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
  const tempImgPaths = [
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168963869950419934.jpg",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/167460765595187098.jpg",
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/166718026592807504.jpg"
  ];

  return (
    <div className={styles.ProductInfo}>
      <div className={styles.ProductInfo_inner}>
        <p>상품정보</p>
        {tempImgPaths.map((tempImgPath, index) => (
          <div className={styles.Image_wrapper} key={index}>
            <img src={tempImgPath} alt="" />
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