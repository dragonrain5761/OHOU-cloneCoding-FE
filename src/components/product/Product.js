import styles from "./Product.module.css";

const Product = ({
  item,
  options,
  moreItems,
  onClickPurchaseButton,
  onClickCartButton,
  onChangeOption,
  onChangeMoreItem
  }) => {
  const { itemName, title, price, itemImg } = item;

  return (
    <div className={styles.Product}>
      <div className={styles.Image_wrapper}>
        <img src={itemImg} alt="" />
      </div>

      <div>
        <div className={styles.Title_container}>
          <p>{itemName}</p>
          <p>{title}</p>
          <p>{price}</p>
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
