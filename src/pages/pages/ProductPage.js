import Header from "../../components/layout/Header";
import ProductContainer from "../../containers/product/ProductContainer";
import ProductInfoContainer from "../../containers/product/ProductInfoContainer";

const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductContainer />
      <ProductInfoContainer />
    </>
  );
};

export default ProductPage;