import React from 'react'
import Menu from "../components/Menu";
import InsideCar from "../imgs/small-inside.jpg"
import Card from "../components/Card";

function HomePage() {
  return (
    <div>
    <Menu />
    <img src={InsideCar} alt="car-banner" className="container mx-auto w-screen h-72 grayscale" />
    <div className="container mx-auto grid grid-cols-3 gap-2">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    </div>
  )
}

export default HomePage