import styles from "./Product.module.css";
import { AiFillStar } from "react-icons/ai";
import imgTD from "../../assets/product/today-departure.png";

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
    <div className={styles.Product}>
      <div className={styles.Image_wrapper}>
        <img src={itemImg} alt="" />
        {/* <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168963869950419934.jpg" alt="" /> */}
      </div>

      <div>
        <div>
          <div className={styles.Title_container}>
            <p>{itemName}</p>
            <p>{itemTitle}</p>
          </div>

          <div className={styles.Star_container}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p>43,500개 리뷰</p>
          </div>

          <div className={styles.Price_container}>
            <p>50%</p>
            <p>{price}</p>
            <p>원</p>
            <div>
              <img src={imgTD} alt="" />
            </div>
          </div>

          <div className={styles.Info_container}>
            <p>해택</p>
            <p>
              <span>10P 적립 (WELCOME 0.1%적립)</span>
              <span>최대 10% 결제할인(토스페이)</span>
            </p>
          </div>

          <div className={styles.Info_container}>
            <p>배송</p>
            <p>
              <span>3000원 (12,000원 이상 구매시 무료배송)</span>
              <span>12:00까지 결제 시 오늘 출발</span>
              <span>일반택배</span>
            </p>
          </div>
        </div>

        <div className={styles.Order_container}>
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
        </div>
      </div>
    </div>
  );
};

export default Product;
