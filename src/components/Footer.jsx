import React from 'react'
import Logo from "../imgs/logoZe.png";
import {Link} from "react-router-dom";


function Footer() {
  return (
    

<footer className="container mx-auto  bg-blueGray-200 pt-8 pb-6 mt-10 w-screen">
  <div className="container mx-auto px-4 ">
    <div className="flex text-left lg:text-left ">
      <div className="container w-1/2 mx-auto block md:flex justify-center">
        <img src={Logo} alt="logo" className="w-48 h-48"/>
        <div className=" w-full md:w-1/2 mt-6 lg:mb-0 mb-6 flex">
          <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-6/12 px-4 mx-auto">
        <div className="flex flex-wrap items-top mb-6 ">
          <div className=" w-full lg:w-6/12 px-4 ml-auto mb-6 md:mb-0">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <div className="">
              <Link to="/aboutpage">
                <div className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</div>
              </Link>
              <Link to="/directionpage">
                <div className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Localização</div>
              </Link>
              <Link to="/testDrive">
                <div className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Teste-drive</div>
              </Link>
              <Link to="/homepage">
                <div className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Carros</div>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Twitter</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Facebook</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Git Hub</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</footer>
  )
}

export default Footer