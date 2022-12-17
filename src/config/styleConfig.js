import styled from "styled-components";

export const AnimeListWrapper = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const AnimeItem = styled.li`
  border: ${(props) => (props.selected ? "3px solid teal" : "3px solid gray")};
  background: ${(props) => (props.selected ? "teal" : "none")};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 20%;

  &:hover {
    background: #2c83d7;
    border: 3px solid teal;
  }
`;

export const StepButton = styled.button`
  background: teal;
  color: #fff;
  padding: 0.8rem 0.8rem;
  border: none;
  cursor: pointer;
`;
export const AnimeItemStatic = styled.li`
  border: 3px solid gray;

  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;

  img {
    height: 100%;
  }
`;

export const PageBody = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const AnimeTitle = styled.h4`
  height: 4.3rem;
  font-size: 1.5rem;
  padding: 0.6rem;
  line-height: 1.4;
`;
