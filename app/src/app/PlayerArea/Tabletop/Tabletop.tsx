import React from "react";

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
      <image
        href="/icons/enemy.png"  // replace with whatever you drop in public/icons
        x={centerX - 50}
        y={centerY - 50}
        width={40}
        height={40}
      />
    </svg>
  );
};

export default HexGrid;