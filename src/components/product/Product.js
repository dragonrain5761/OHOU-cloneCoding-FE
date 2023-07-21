import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.Product}>
      <div className={styles.Image_wrapper}>
        <img src="" alt="" />
      </div>

      <div>
        <div className={styles.Title_container}>
          <p>상품 제목, 최고 인기 상품...!</p>
          <p>99,000 원</p>
        </div>

        <div className={styles.Order_container}>
          <select>
            <option value="">컬러 선택</option>
            <option value="0">그레이</option>
            <option value="1">화이트</option>
            <option value="2">레드</option>
          </select>

          <select>
            <option value="">추가상품 (선택)</option>
            <option value="0">추가상품 A</option>
            <option value="0">추가상품 B</option>
            <option value="0">추가상품 C</option>
          </select>

          <div>
            <button>장바구니</button>
            <button>바로구매</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
