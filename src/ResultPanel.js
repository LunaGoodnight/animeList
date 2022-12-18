import { useRef } from "react";
import html2canvas from "html2canvas";
import styled from "styled-components";
import { animeCollections } from "./config/animeCollections";
import {
  AnimeItemStatic,
  AnimeListWrapper,
  AnimeTitle,
  ImageBox,
  PageBody,
  StepButton,
} from "./config/styleConfig";

const ShareButton = styled.button`
  background: #075cd1;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const ResultPanel = ({ animeList, setStep }) => {
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
      cropWidth: canvasRef.current.clientWidth,
      cropHeight: canvasRef.current.clientHeight,
    };
    const options = {
      backgroundColor: "#000",
    };
    html2canvas(canvasRef.current, options).then((canvas) => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");
      console.log({ canvas });
      console.log({ current: canvasRef.current });

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
      {animeList.length > 0 ? (
        <ShareButton type="button" onClick={() => handleClickTakeScreenShot()}>
          分享圖片
        </ShareButton>
      ) : null}

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

      <StepButton type="button" onClick={() => setStep("choose")}>
        重選
      </StepButton>
    </div>
  );
};
