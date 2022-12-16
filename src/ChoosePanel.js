import { animeCollections } from "./config/animeCollections";
import styled from "styled-components";
import {
  AnimeItem,
  AnimeListWrapper,
  ImageBox,
  PageBody,
} from "./config/styleConfig";

export const ChoosePanel = ({ animeList, setAnimeList }) => {
  const hasSelected = (title) => {
    console.log({ test: "wowo" });
    return animeList.find((item) => item.title === title);
  };
  return (
    <div>
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
                <h4>{title}</h4>
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
