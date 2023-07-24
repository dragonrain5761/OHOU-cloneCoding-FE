import sale from "../../assets/sale.png";
import ShopListItemBlock from "./ShopListItem.style";

const ShopListItem = ({ item }) => {
  const { title, price, itemName, itemImg } = item;
  return (
    <ShopListItemBlock>
      <div className="itemImg">
        <img src={itemImg} alt="item" />
      </div>
      <div className="contents">
        <p className="itemName">{itemName}</p>
        <p className="title">{title}</p>
        <div className="priceContents">
          <span>SALE</span>
          <p className="price">{price.toLocaleString()}</p>
          <img src={sale} alt="item" />
        </div>
      </div>
    </ShopListItemBlock>
  );
};

export default ShopListItem;
