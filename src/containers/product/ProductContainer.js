import Product from "../../components/product/Product";
import ProductInfo from "../../components/product/ProductInfo";
import styles from "./ProductContainer.module.css";

const ProductContainer = () => {
  return (
    <div className={styles.ProductContainer}>
      <Product />
      <ProductInfo />
    </div>
  )
}

export default ProductContainer