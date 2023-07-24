import Header from "../../components/layout/Header";
import MainBannerContainer from "../../containers/main/MainBannerContainer";
import PostListContainer from "../../containers/main/PostListContainer";
import ShopListContainer from "../../containers/main/ShopListContainer";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainBannerContainer />
      <PostListContainer />
      <ShopListContainer />
    </>
  );
};

export default MainPage;
