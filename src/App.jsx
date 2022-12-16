import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import LocationPage from "./pages/LocationPage";
import Details from "./pages/Details";
import AboutPage from './pages/AboutPage';
import "./app.css";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/directionpage" element={<LocationPage />} />
        <Route path="/details/:numerodechassi" element={<Details />}/>
        <Route path="/aboutpage" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
