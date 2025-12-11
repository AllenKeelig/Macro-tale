import React from "react";
import { useState } from "react";
import { demoCharacter } from "./CharacterSheet/charactersheet";

interface HexCoord {
  q: number;
  r: number;
}

const HEX_SIZE = 30; // radius of hex


function axialToPixel(q: number, r: number) {
  const x = HEX_SIZE * (3 / 2) * q;
  const y = HEX_SIZE * Math.sqrt(3) * (r + q / 2);
  return { x, y };
}

function hexPoints(cx: number, cy: number, size: number) {
  const points: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const px = cx + size * Math.cos(angle);
    const py = cy + size * Math.sin(angle);
    points.push(`${px},${py}`);
  }
  return points.join(" ");
}

const HexGrid: React.FC = () => {
  const radius = 5;
  const tiles: HexCoord[] = [];

  for (let q = -radius; q <= radius; q++) {
    for (let r = -radius; r <= radius; r++) {
      const s = -q - r;
      if (Math.abs(s) <= radius) {
        tiles.push({ q, r });
      }
    }
  }

  const containerWidth = 1200;
  const containerHeight = 900;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  return (
    <svg
      width={containerWidth}
      height={containerHeight}
      style={{ background: "#eee" }}
    >
      {tiles.map((coord, i) => {
        const { x, y } = axialToPixel(coord.q, coord.r);
        const points = hexPoints(centerX + x, centerY + y, HEX_SIZE);
        return (
          <polygon
            key={i}
            points={points}
            fill="lightgreen"
            stroke="black"
            strokeWidth={2}
          />
        );
      })}
      {/* Example token/icon overlay */}
      <image
        href="/icons/knight.png"
        x={centerX}
        y={centerY}
        width={40}
        height={40}
      />
    </svg>
  );
};

export { HexGrid };


export default function Tabletop() {
  const [playerHP, setPlayerHP] = useState(demoCharacter.hp);
  const [enemyHP, setEnemyHP] = useState(15);

  const [log, setLog] = useState<string[]>([]);

  function addLog(message: string) {
    setLog((prev) => [...prev, message]);
  }

  function playerAttack() {
    const damage = demoCharacter.attack;
    setEnemyHP((hp) => {
      const newHp = Math.max(0, hp - damage);
      addLog(`${demoCharacter.name} hits enemy for ${damage} damage!`);
      return newHp;
    });
  }

  function enemyAttack() {
    const damage = 3;
    setPlayerHP((hp) => {
      const newHp = Math.max(0, hp - damage);
      addLog(`Enemy claws ${demoCharacter.name} for ${damage} damage!`);
      return newHp;
    });
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Tabletop Demo</h1>

      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <h2>Player</h2>
          <p>Name: {demoCharacter.name}</p>
          <p>HP: {playerHP}</p>
          <button onClick={playerAttack} disabled={enemyHP <= 0 || playerHP <= 0}>
            Attack Enemy
          </button>
        </div>

        <div>
          <h2>Enemy</h2>
          <p>HP: {enemyHP}</p>
          <button onClick={enemyAttack} disabled={enemyHP <= 0 || playerHP <= 0}>
            Attack Player
          </button>
        </div>
      </div>

      <h3>Battle Log</h3>
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          background: "#f0f0f0",
          height: "200px",
          overflow: "auto",
          borderRadius: "8px",
        }}
      >
        {log.map((entry, i) => (
          <div key={i}>{entry}</div>
        ))}
      </div>
    </div>
  );
}