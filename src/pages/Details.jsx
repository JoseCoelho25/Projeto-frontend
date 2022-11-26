import React from 'react'
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import DetailsCard from "../components/DetailsCard";
import SlideShow from '../components/SlideShow';


function Details() {
  return (
    <div>
        <Menu />
        <SlideShow/>
        <DetailsCard />
        <Footer />
    </div>
  )
}

export default Details