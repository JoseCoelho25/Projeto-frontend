import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import LocationPage from "./pages/LocationPage";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/directionpage" element={<LocationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
