import HomeListContainer from "../../containers/main/HomeListContainer";
import MainBannerContainer from "../../containers/main/MainBannerContainer";
import ShopListContainer from "../../containers/main/ShopListContainer";

const MainPage = () => {
  return (
    <>
      <MainBannerContainer />
      <HomeListContainer />
      <ShopListContainer />
    </>
  );
};

export default MainPage;
