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
    <Card />
    <Footer />
    </div>
  )
}

export default HomePage