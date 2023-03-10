import styled from "styled-components";

export const AnimeListWrapper = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AnimeItem = styled.li`
  border: ${(props) => (props.selected ? "6px solid teal" : "6px solid #444")};
  background: ${(props) => (props.selected ? "teal" : "none")};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 18%;
  position: relative;

  &:hover {
    background: #2c83d7;
    border: 6px solid teal;
  }

  @media only screen and (max-width: 850px) {
    width: 44%;
  }
`;

export const StepButton = styled.button`
  background: teal;
  color: #fff;
  padding: 0.8rem 0.8rem;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  margin: 2rem 0;
`;

export const FeedBackTip = styled.div`
  font-size: 1rem;
`;
export const AnimeItemStatic = styled.li`
  border: 3px solid #444;
  width: 19%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 850px) {
    width: 44%;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media only screen and (max-width: 850px) {
    height: 9rem;
  }
  img {
    height: 100%;
  }
`;

export const PageBody = styled.div`
  width: 96%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const CheckIcon = styled.img`
  position: absolute;

  width: 3rem;

  right: 5%;
  bottom: 4%;
`;
export const PageTopic = styled.h2`
  margin: 2rem 0;
`;

export const AnimeTitle = styled.h4`
  height: 4.3rem;
  font-size: ${(props) => (props.isShrink ? "1rem" : "1.4rem")};

  padding: 0.6rem;
  line-height: 1.4;

  @media only screen and (max-width: 850px) {
    font-size: ${(props) => (props.isShrink ? ".7rem" : "1rem")};

    height: auto;
  }
`;
