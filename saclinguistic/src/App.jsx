import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Student/LoginPage";
import Greetings from "./pages/Student/Greetings";
import GamePlay from "./pages/Student/GamePlay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LoginPage />} />
          <Route path="/greetings" index element={<Greetings />} />
          <Route path="/gameplay" index element={<GamePlay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
