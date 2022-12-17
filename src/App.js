import { useState } from "react";
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
      </header>
    </div>
  );
}

export default App;
