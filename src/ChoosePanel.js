import { animeCollections } from "./config/animeCollections";
import styled from "styled-components";
import {
  AnimeItem,
  AnimeListWrapper,
  AnimeTitle,
  ImageBox,
  PageBody,
} from "./config/styleConfig";

export const ChoosePanel = ({ animeList, setAnimeList }) => {
  const hasSelected = (title) => {
    return animeList.find((item) => item.title === title);
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
    </div>
  );
};
