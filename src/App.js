import { useState } from "react";
import { FeedBackTip } from "./config/styleConfig";
import { ChoosePanel } from "./ChoosePanel";
import { ResultPanel } from "./ResultPanel";
import "./App.css";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [step, setStep] = useState("choose");
  return (
    <div className="App">
      <header className="App-header">
        {step === "choose" ? (
          <ChoosePanel
            animeList={animeList}
            setAnimeList={setAnimeList}
            setStep={setStep}
          />
        ) : (
          <ResultPanel animeList={animeList} setStep={setStep} />
        )}
        <FeedBackTip>意見反饋：javaspringtea@gmail.com</FeedBackTip>
      </header>
    </div>
  );
}

export default App;
