import {
  AnimeItem,
  AnimeListWrapper,
  AnimeTitle,
  ImageBox,
  PageBody,
} from "./config/styleConfig";
import { animeCollections } from "./config/animeCollections";

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
  return (
    <PageBody>
      <h3>{fatGuyPoint()}</h3>
      <AnimeListWrapper>
        {animeList.map((x, i) => {
          const { title, images } = x;
          return (
            <AnimeItem key={i}>
              <AnimeTitle>{title}</AnimeTitle>
              <ImageBox>
                <img src={images} alt={title} />
              </ImageBox>
            </AnimeItem>
          );
        })}
      </AnimeListWrapper>
    </PageBody>
  );
};
