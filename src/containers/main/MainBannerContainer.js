import mainSrc from "../../assets/main.avif";
import { useEffect, useState } from "react";
import pic1 from "../../assets/example/1.avif";
import pic2 from "../../assets/example/2.avif";
import pic3 from "../../assets/example/3.avif";
import MainBanner from "../../components/main/MainBanner";

const MainBannerContainer = () => {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const exampleMain = {
    nickname: "ohous",
    contents: "취향 가득 7평 복층 오피스텔",
    postImg: mainSrc,
  };

  const exampleSide = [pic1, pic2, pic3];

  //carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImgIndex((prev) => {
        if (prev >= exampleSide.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onIncreaseIdx = () => {
    setCurrImgIndex((prev) => {
      if (prev >= exampleSide.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const onDecreaseIdx = () => {
    setCurrImgIndex((prev) => {
      if (prev <= 0) {
        return exampleSide.length - 1;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <MainBanner
      exampleMain={exampleMain}
      currImgIndex={currImgIndex}
      exampleSide={exampleSide}
      setCurrImgIndex={setCurrImgIndex}
      onIncreaseIdx={onIncreaseIdx}
      onDecreaseIdx={onDecreaseIdx}
    />
  );
};

export default MainBannerContainer;
