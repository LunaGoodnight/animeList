import { animeCollections } from "./config/animeCollections";
import { useDetectAdBlock } from "adblock-detect-react";
import {
  AnimeItem,
  AnimeListWrapper,
  AnimeTitle,
  ImageBox,
  PageBody,
  StepButton,
} from "./config/styleConfig";

export const ChoosePanel = ({ animeList, setAnimeList, setStep }) => {
  const hasSelected = (title) => {
    return animeList.find((item) => item.title === title);
  };
  const adBlockDetected = useDetectAdBlock();

  const handleStep = () => {
    if (adBlockDetected) {
      window.alert("請（針對本站）關掉擋廣告的套件");
    } else {
      setStep("result");
    }
  };
  return (
    <div>
      <h2>測試你的肥宅指數！</h2>
      <p>選擇你看過的動畫</p>
      <PageBody>
        <AnimeListWrapper>
          {animeCollections.map((x, i) => {
            const { title, images } = x;
            return (
              <AnimeItem
                selected={hasSelected(title)}
                key={i}
                onClick={() =>
                  hasSelected(title)
                    ? setAnimeList((prev) =>
                        prev.filter((it) => it.title !== title)
                      )
                    : setAnimeList((prev) => prev.concat(x))
                }
              >
                <AnimeTitle>{title}</AnimeTitle>
                <ImageBox>
                  <img src={images} alt={title} />
                </ImageBox>
              </AnimeItem>
            );
          })}
        </AnimeListWrapper>
      </PageBody>
      <StepButton type="button" onClick={handleStep}>
        看結果
      </StepButton>
    </div>
  );
};
