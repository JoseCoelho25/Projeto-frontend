import React from 'react'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import TestDriveForm from '../components/TestDriveForm';
import Gps from "../imgs/car-gps.jpg";
import Map from "../components/Map";

function TestDrivePage() {
  return (
    <div>
        <Menu />
        <img src={Gps} alt="car-banner" className="container mx-auto w-screen h-72 grayscale" />
        <div className="container md:flex block mx-auto w-screen h-auto">
            <TestDriveForm />
            <Map />
        </div>
        <Footer />
    </div>
  )
}

export default TestDrivePage