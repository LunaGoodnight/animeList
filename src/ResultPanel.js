import {
  AnimeItem,
  AnimeListWrapper,
  ImageBox,
  PageBody,
} from "./config/styleConfig";

export const ResultPanel = ({ animeList }) => {
  return (
    <PageBody>
      <AnimeListWrapper>
        {animeList.map((x, i) => {
          const { title, images } = x;
          return (
            <AnimeItem key={i}>
              <h4>{title}</h4>
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
