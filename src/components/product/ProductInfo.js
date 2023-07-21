import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
  return (
    <div className={styles.ProductInfo}>
      <div className={styles.ProductInfo_inner}>
        <p>상품정보</p>
        <div className={styles.Image_wrapper}>
          <img src="" alt="" />
        </div>
        <div>
          상품 설명, 천연 재료를 사용해서 만든 최고급 상품...!
        </div>
      </div>

      <div className={styles.Order_container}>
        <div>
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