// import React, { useState, useEffect } from "react";

// Persistent character data (based on 2024 D&D sheet)
// interface CharacterSheet {
//   id: string;
//   name: string;
//   pronouns?: string;
//   species: string;
//   class: string;
//   background: string;
//   level: number;
//   strength: number;
//   dexterity: number;
//   constitution: number;
//   intelligence: number;
//   wisdom: number;
//   charisma: number;
//   maxHP: number;
//   armorClass: number;
//   initiative: number;
//   speed: number;
//   equipment: string[];
//   gold: number;
//   traits: string[];
//   backstory?: string;
// }

// Volatile combat state
// interface CombatState {
//   currentHP: number;
//   tempHP: number;
//   buffs: string[];
//   initiative: number;
// }

// Dice roll config
// interface DiceRollConfig {
//   numDice: number;
//   sides: number;
//   modifier: number;
//   advantage: boolean;
//   disadvantage: boolean;
// }

// Props for making the sheet reusable
// interface CharacterPageProps {
//   initialCharacter?: CharacterSheet;
// }

// const demoCharacter = {
//   name: "Dork the Brave",
//   hp: 20,
//   attack: 4,
//   defense: 1
// };

// Default character if none is passed
// const defaultCharacter: CharacterSheet = {
//   id: "hero1",
//   name: "Aria",
//   pronouns: "she/her",
//   species: "Elf",
//   class: "Wizard",
//   background: "Sage",
//   level: 1,
//   strength: 10,
//   dexterity: 14,
//   constitution: 12,
//   intelligence: 16,
//   wisdom: 13,
//   charisma: 11,
//   maxHP: 30,
//   armorClass: 12,
//   initiative: 2,
//   speed: 30,
//   equipment: ["Quarterstaff", "Spellbook"],
//   gold: 15,
//   traits: ["Darkvision", "Arcane Recovery"],
//   backstory: "A scholar of ancient magic.",
// };

// Dice roller
// const rollDice = (config: DiceRollConfig): number => {
//   const { numDice, sides, modifier, advantage, disadvantage } = config;
//   const rollOnce = () =>
//     Array.from(
//       { length: numDice },
//       () => Math.floor(Math.random() * sides) + 1
//     ).reduce((a, b) => a + b, 0) + modifier;

//   if (advantage || disadvantage) {
//     const first = rollOnce();
//     const second = rollOnce();
//     return advantage ? Math.max(first, second) : Math.min(first, second);
//   }

//   return rollOnce();
// };

// const CharacterPage: React.FC<CharacterPageProps> = ({
//   initialCharacter = defaultCharacter,
// }) => {
//   const [character, setCharacter] = useState<CharacterSheet>(initialCharacter);

//   const [combat, setCombat] = useState<CombatState>({
//     currentHP: initialCharacter.maxHP,
//     tempHP: 0,
//     buffs: [],
//     initiative: initialCharacter.initiative,
//   });

//   const [damageConfig, setDamageConfig] = useState<DiceRollConfig>({
//     numDice: 1,
//     sides: 6,
//     modifier: 0,
//     advantage: false,
//     disadvantage: false,
//   });

//   const [healConfig, setHealConfig] = useState<DiceRollConfig>({
//     numDice: 2,
//     sides: 8,
//     modifier: 3,
//     advantage: false,
//     disadvantage: false,
//   });

//   useEffect(() => {
//     setCombat((prev) => ({
//       ...prev,
//       currentHP: character.maxHP,
//     }));
//   }, [character.maxHP]);

// Commenting out a bunch to simplify stuff for the demo
//   return (
//     <div>
//       <div className="character-sheet">
//         <h2>Character Sheet</h2>
//         <label>
//           Name:{" "}
//           <input
//             value={character.name}
//             onChange={(e) =>
//               setCharacter({ ...character, name: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Species:{" "}
//           <input
//             value={character.species}
//             onChange={(e) =>
//               setCharacter({ ...character, species: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Class:{" "}
//           <input
//             value={character.class}
//             onChange={(e) =>
//               setCharacter({ ...character, class: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Background:{" "}
//           <input
//             value={character.background}
//             onChange={(e) =>
//               setCharacter({ ...character, background: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Level:{" "}
//           <input
//             type="number"
//             value={character.level}
//             onChange={(e) =>
//               setCharacter({ ...character, level: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Max HP:{" "}
//           <input
//             type="number"
//             value={character.maxHP}
//             onChange={(e) =>
//               setCharacter({ ...character, maxHP: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Armor Class:{" "}
//           <input
//             type="number"
//             value={character.armorClass}
//             onChange={(e) =>
//               setCharacter({ ...character, armorClass: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Initiative:{" "}
//           <input
//             type="number"
//             value={character.initiative}
//             onChange={(e) =>
//               setCharacter({ ...character, initiative: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Speed:{" "}
//           <input
//             type="number"
//             value={character.speed}
//             onChange={(e) =>
//               setCharacter({ ...character, speed: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Strength:{" "}
//           <input
//             type="number"
//             value={character.strength}
//             onChange={(e) =>
//               setCharacter({ ...character, strength: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Dexterity:{" "}
//           <input
//             type="number"
//             value={character.dexterity}
//             onChange={(e) =>
//               setCharacter({ ...character, dexterity: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Constitution:{" "}
//           <input
//             type="number"
//             value={character.constitution}
//             onChange={(e) =>
//               setCharacter({
//                 ...character,
//                 constitution: Number(e.target.value),
//               })
//             }
//           />
//         </label>
//         <label>
//           Intelligence:{" "}
//           <input
//             type="number"
//             value={character.intelligence}
//             onChange={(e) =>
//               setCharacter({
//                 ...character,
//                 intelligence: Number(e.target.value),
//               })
//             }
//           />
//         </label>
//         <label>
//           Wisdom:{" "}
//           <input
//             type="number"
//             value={character.wisdom}
//             onChange={(e) =>
//               setCharacter({ ...character, wisdom: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Charisma:{" "}
//           <input
//             type="number"
//             value={character.charisma}
//             onChange={(e) =>
//               setCharacter({ ...character, charisma: Number(e.target.value) })
//             }
//           />
//         </label>
//       </div>

//       <div className="combat-state">
//         <h2>Combat</h2>
//         <p>Current HP: {combat.currentHP}</p>
//         <p>Temporary HP: {combat.tempHP}</p>

//         <h3>Damage</h3>
//         <label>
//           Dice:{" "}
//           <input
//             type="number"
//             value={damageConfig.numDice}
//             onChange={(e) =>
//               setDamageConfig({
//                 ...damageConfig,
//                 numDice: Number(e.target.value),
//               })
//             }
//           />
//         </label>
//         <label>
//           Sides:{" "}
//           <input
//             type="number"
//             value={damageConfig.sides}
//             onChange={(e) =>
//               setDamageConfig({
//                 ...damageConfig,
//                 sides: Number(e.target.value),
//               })
//             }
//           />
//         </label>
//         <label>
//           Modifier:{" "}
//           <input
//             type="number"
//             value={damageConfig.modifier}
//             onChange={(e) =>
//               setDamageConfig({
//                 ...damageConfig,
//                 modifier: Number(e.target.value),
//               })
//             }
//           />
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={damageConfig.advantage}
//             onChange={(e) =>
//               setDamageConfig({
//                 ...damageConfig,
//                 advantage: e.target.checked,
//                 disadvantage: false,
//               })
//             }
//           />{" "}
//           Advantage
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={damageConfig.disadvantage}
//             onChange={(e) =>
//               setDamageConfig({
//                 ...damageConfig,
//                 disadvantage: e.target.checked,
//                 advantage: false,
//               })
//             }
//           />{" "}
//           Disadvantage
//         </label>
//         <button
//           onClick={() => {
//             const dmg = rollDice(damageConfig);
//             setCombat({
//               ...combat,
//               currentHP: Math.max(0, combat.currentHP - dmg),
//             });
//             alert(`You took ${dmg} damage`);
//           }}
//         >
//           Apply Damage
//         </button>

//         <h3>Heal</h3>
//         <label>
//           Dice:{" "}
//           <input
//             type="number"
//             value={healConfig.numDice}
//             onChange={(e) =>
//               setHealConfig({ ...healConfig, numDice: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Sides:{" "}
//           <input
//             type="number"
//             value={healConfig.sides}
//             onChange={(e) =>
//               setHealConfig({ ...healConfig, sides: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           Modifier:{" "}
//           <input
//             type="number"
//             value={healConfig.modifier}
//             onChange={(e) =>
//               setHealConfig({ ...healConfig, modifier: Number(e.target.value) })
//             }
//           />
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={healConfig.advantage}
//             onChange={(e) =>
//               setHealConfig({
//                 ...healConfig,
//                 advantage: e.target.checked,
//                 disadvantage: false,
//               })
//             }
//           />{" "}
//           Advantage
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={healConfig.disadvantage}
//             onChange={(e) =>
//               setHealConfig({
//                 ...healConfig,
//                 disadvantage: e.target.checked,
//                 advantage: false,
//               })
//             }
//           />{" "}
//           Disadvantage
//         </label>
//         <button
//           onClick={() => {
//             const heal = rollDice(healConfig);
//             setCombat({
//               ...combat,
//               currentHP: Math.min(character.maxHP, combat.currentHP + heal),
//             });
//             alert(`You healed ${heal} HP`);
//           }}
//         >
//           Apply Heal
//         </button>
//       </div>
//     </div>
//   );

// export default CharacterPage;

import React, { useState } from "react";

// 🔥 Simple demo sheet for the prototype
interface CharacterSheet {
  name: string;
  hp: number;
  attack: number;
  defense: number;
}

interface CharacterPageProps {
  initialCharacter?: CharacterSheet;
}

export const demoCharacter: CharacterSheet = {
  name: "Dork the Brave",
  hp: 20,
  attack: 4,
  defense: 1,
};

const CharacterPage: React.FC<CharacterPageProps> = ({
  initialCharacter = demoCharacter,
}) => {
  const [character] = useState<CharacterSheet>(initialCharacter);

  return (
    <div>
      <h1>Character Sheet</h1>
      <p>Name: {character.name}</p>
      <p>HP: {character.hp}</p>
      <p>Attack: {character.attack}</p>
      <p>Defense: {character.defense}</p>
    </div>
  );
};

export default CharacterPage;
