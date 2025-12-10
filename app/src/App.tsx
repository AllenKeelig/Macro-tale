import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Tabletop from "./app/PlayerArea/Tabletop";
import CharacterSheet from "./app/PlayerArea/CharacterSheet/charactersheet";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/tabletop" replace />} />
        <Route path="/tabletop" element={<Tabletop />} />
        <Route path="/character" element={<CharacterSheet />} />
      </Routes>
    </>
  );
}
