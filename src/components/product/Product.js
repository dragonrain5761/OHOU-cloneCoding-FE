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
        <div className={styles.Title_container}>
          <p>{itemName}</p>
          <p>{itemTitle}</p>
          <p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>43,500개 리뷰</span>
          </p>
          <p>
            <span>50%</span>
            {price}
            <span>원</span>
            <span>
              <img src={imgTD} alt="" />
            </span>
          </p>
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
