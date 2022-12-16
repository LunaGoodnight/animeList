import { animeCollections } from "./config/animeCollections";
import styled from "styled-components";

const AnimeListWrapper = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  gap: 1rem;
`;

const AnimeItem = styled.li`
  border: ${(props) => (props.selected ? "3px solid teal" : "3px solid gray")};
  background: ${(props) => (props.selected ? "teal" : "none")};
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background: #2c83d7;
    border: 3px solid teal;
  }
`;

const ImageBox = styled.div`
  width: 20rem;
  height: 20rem;
`;

const PageBody = styled.div`
  width: 100%;
  padding: 2rem;
`;

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
