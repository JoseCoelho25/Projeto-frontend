import React from 'react'
import Map from "../components/Map"
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Gps from "../imgs/car-gps.jpg";
import FormMap from "../components/FormMap";

function HomePage() {
  return (
    <div>
      <Menu />
      <img src={Gps} alt="car-banner" className="container mx-auto w-screen h-72 grayscale" />
      <div className="container lg:flex block mx-auto w-screen h-auto">
      <FormMap />
      <Map />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage