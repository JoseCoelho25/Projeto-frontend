import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import LocationPage from "./pages/LocationPage";
import Details from "./pages/Details";
import AboutPage from './pages/AboutPage';
import TestDrivePage from "./pages/TestDrivePage";
import "./app.css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleFactsApiRequest = async () => {
    setIsLoading(true)
    await axios({
      method: 'GET',
      url: 'https://6399fba316b0fdad77503d25.mockapi.io/Cars',
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    setIsLoading(false)
  }

  useEffect(() => {
    handleFactsApiRequest()
  }, [])
  
  
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/homepage" element={<HomePage data={data} isLoading={isLoading}/>} />
        <Route path="/directionpage" element={<LocationPage />} />
        <Route path="/details/:numerodechassi" element={<Details data={data} isLoading={isLoading}/>}/>
        <Route path="/aboutpage" element={<AboutPage />}></Route>
        <Route path="/testDrive" element={<TestDrivePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
