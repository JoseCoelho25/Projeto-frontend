import React from 'react'
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import DetailsCard from "../components/DetailsCard";
import SlideShow from '../components/SlideShow';


function Details(props) {
  return (
    <div>
        <Menu />
        {props.isLoading ? "" :
        <div>
        <SlideShow data={props.data}/>
        <DetailsCard data={props.data}/>
        </div>
      }
        <Footer />
 
    </div>
  )
}

export default Details