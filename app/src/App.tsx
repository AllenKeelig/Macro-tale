import { useState } from "react";
import type { CharacterSheet } from "./app/PlayerArea/CharacterSheet/charactersheet";
import CharacterPage, { demoCharacter } from "./app/PlayerArea/CharacterSheet/charactersheet";
import PlayerArea from "./app/PlayerArea/PlayerArea";

export default function App() {
  const [character, setCharacter] = useState<CharacterSheet>(demoCharacter);
  const [screen, setScreen] = useState<"table" | "character">("table");

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => setScreen("table")}>Tabletop</button>
        <button onClick={() => setScreen("character")}>Character Sheet</button>
      </nav>

      {screen === "table" && (
        <PlayerArea character={character} setCharacter={setCharacter} />
      )}

      {screen === "character" && (
        <CharacterPage
          initialCharacter={character}
          updateCharacter={setCharacter}
        />
      )}
    </div>
  );
}
