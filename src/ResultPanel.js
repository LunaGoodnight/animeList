import { useRef } from "react";
import html2canvas from "html2canvas";
import styled from "styled-components";
import { animeCollections } from "./config/animeCollections";
import {
  AnimeItem,
  AnimeItemStatic,
  AnimeListWrapper,
  AnimeTitle,
  ImageBox,
  PageBody,
} from "./config/styleConfig";

const ShareButton = styled.button`
  background: #075cd1;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
`;

export const ResultPanel = ({ animeList }) => {
  const fatGuyPoint = () => {
    console.log({
      point: (animeList.length / animeCollections.length) * 100,
    });
    if ((animeList.length / animeCollections.length) * 100 > 80) {
      return "你是一個超級肥宅！！";
    }
    return "肥宅失格，再多看幾部吧。";
  };
  const canvasRef = useRef(null);

  const handleClickTakeScreenShot = () => {
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeight } = {
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: 1400,
      cropHeight: 1800,
    };
    const options = {
      backgroundColor: "#000",
    };
    html2canvas(canvasRef.current, options).then((canvas) => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;
      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

      const a = document.createElement("a");
      a.href = croppedCanvas.toDataURL();
      a.download = "receipt.png";
      a.click();
    });
  };
  return (
    <div>
      <h3>{fatGuyPoint()}</h3>
      <ShareButton type="button" onClick={() => handleClickTakeScreenShot()}>
        分享圖片
      </ShareButton>
      <PageBody ref={canvasRef}>
        <h3>我看過的動畫</h3>
        <AnimeListWrapper>
          {animeList.map((x, i) => {
            const { title, images } = x;
            return (
              <AnimeItemStatic key={i}>
                <AnimeTitle>{title}</AnimeTitle>
                <ImageBox>
                  <img src={images} alt={title} />
                </ImageBox>
              </AnimeItemStatic>
            );
          })}
        </AnimeListWrapper>
      </PageBody>
    </div>
  );
};
