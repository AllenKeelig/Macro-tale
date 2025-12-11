import { useState } from "react";
import type { CharacterSheet } from "./app/PlayerArea/CharacterSheet/charactersheet";
import CharacterPage, { demoCharacter } from "./app/PlayerArea/CharacterSheet/charactersheet";
import PlayerArea from "./app/PlayerArea/PlayerArea";
import FullCharacterPage, { defaultCharacter } from "./app/PlayerArea/CharacterSheet/FullCharacterSheet";
import type { FullCharacterSheet } from "./app/PlayerArea/CharacterSheet/FullCharacterSheet";

export default function App() {
  const [character, setCharacter] = useState<CharacterSheet>(demoCharacter);
  const [screen, setScreen] = useState<"table" | "character" | "Full_Character_Sheet">("table");
  const [FullCharacter] = useState<FullCharacterSheet>(defaultCharacter);


  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => setScreen("table")}>Tabletop</button>
        <button onClick={() => setScreen("character")}>Character Sheet</button>
        <button onClick={() => setScreen("Full_Character_Sheet")}>Full_Character_Sheet</button>
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

      {screen === "Full_Character_Sheet" && (
        <FullCharacterPage initialCharacter={FullCharacter} />
      )}
    </div>
  );
}
