// src/app/PlayerArea/Combat.tsx
interface CombatProps {
  character: { name: string; hp: number; attack: number };
  setCharacter: React.Dispatch<
    React.SetStateAction<{ name: string; hp: number; attack: number }>
  >;
  enemy: { hp: number; attack: number };
  setEnemy: React.Dispatch<
    React.SetStateAction<{ hp: number; attack: number }>
  >;
}

export default function Combat({
  character,
  setCharacter,
  enemy,
  setEnemy,
}: CombatProps) {
    const attackEnemy = () => {
      setEnemy(prev => ({ ...prev, hp: prev.hp - character.attack }));
    };

    const enemyAttack = () => {
      setCharacter(prev => ({ ...prev, hp: prev.hp - enemy.attack }));
    };

  return (
    <div style={{ padding: "1rem", border: "1px solid gray" }}>
      <h2>Combat</h2>

      <p>
        <strong>{character.name}</strong> HP: {character.hp}
      </p>
      <p>Enemy HP: {enemy.hp}</p>

      <button onClick={attackEnemy}>Attack Enemy</button>
      <button onClick={enemyAttack}>Enemy Attacks</button>
    </div>
  );
}
