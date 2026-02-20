import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Student/LoginPage";
import Greetings from "./pages/Student/Greetings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LoginPage />} />
          <Route path="/greetings" index element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
