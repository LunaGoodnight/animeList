import { useState } from "react";
import { ChoosePanel } from "./ChoosePanel";
import "./App.css";

function App() {
  const [animeList, setAnimeList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>測試你的肥宅指數！</h2>
        <ChoosePanel animeList={animeList} setAnimeList={setAnimeList} />
      </header>
    </div>
  );
}

export default App;
