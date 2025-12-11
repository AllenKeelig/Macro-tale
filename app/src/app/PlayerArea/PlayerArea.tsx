// src/app/PlayerArea/PlayerArea.tsx
import CharacterSheet from "./CharacterSheet/charactersheet";
import Combat from "./Tabletop/Combat";
import Tabletop from "./Tabletop/Tabletop";
import type { CharacterSheet as CharacterType } from "./CharacterSheet/charactersheet";
import { useState } from "react";

interface PlayerAreaProps {
  character: CharacterType;
  setCharacter: React.Dispatch<React.SetStateAction<CharacterType>>;
}

export default function PlayerArea({ character, setCharacter }: PlayerAreaProps) {
  const [enemy, setEnemy] = useState({ hp: 15, attack: 3 });

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <CharacterSheet
        initialCharacter={character}
        updateCharacter={setCharacter}
      />

      <Tabletop />

      <Combat
        character={character}
        setCharacter={setCharacter}
        enemy={enemy}
        setEnemy={setEnemy}
      />
    </div>
  );
}
