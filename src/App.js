import { useState } from "react";
import { ChoosePanel } from "./ChoosePanel";
import "./App.css";
import { ResultPanel } from "./ResultPanel";
import styled from "styled-components";

const StepButton = styled.button`
  background: teal;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
`;
function App() {
  const [animeList, setAnimeList] = useState([]);
  const [step, setStep] = useState("choose");
  return (
    <div className="App">
      <header className="App-header">
        <h2>測試你的肥宅指數！</h2>
        {step === "choose" ? (
          <ChoosePanel animeList={animeList} setAnimeList={setAnimeList} />
        ) : (
          <ResultPanel animeList={animeList} />
        )}

        <StepButton onClick={() => setStep("result")}>
          {step === "choose" ? "看結果" : "重選"}
        </StepButton>
      </header>
    </div>
  );
}

export default App;
