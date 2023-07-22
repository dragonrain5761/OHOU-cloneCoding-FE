import MainBannerContainer from "../../containers/main/MainBannerContainer";
import PostListContainer from "../../containers/main/PostListContainer";
import ShopListContainer from "../../containers/main/ShopListContainer";

const MainPage = () => {
  return (
    <>
      <MainBannerContainer />
      <PostListContainer />
      <ShopListContainer />
    </>
  );
};

export default MainPage;
