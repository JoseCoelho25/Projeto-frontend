import React from 'react'
import Menu from "../components/Menu";
import InsideCar from "../imgs/small-inside.jpg"
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useEffect } from 'react';


function HomePage() {
  useEffect(()=> {
    window.scrollTo({top: 0, left:0 ,behaviour:"smooth"});
  },[])
  
  return (
    <div>
    <Menu />
    <img src={InsideCar} alt="car-banner" className="container mx-auto w-screen h-72 grayscale" />
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <Footer />
    </div>
  )
}

export default HomePage