import React from 'react'
import Logo from "../imgs/logoZe.png";
import {Link} from "react-router-dom";

function Menu() {
  return (
    <div className="container mx-auto relative shadow bg-blue-400 h-24 pt-6 w-screen">
        <div className="w-full backdrop-blur-sm">
            <div className="h-16 mx-auto px-2 md:px-5  max-w-7xl flex items-center justify-between text-white">
                <Link to="/" className="" >
                  <img src={Logo} alt="logo" className="h-24 w-24 md:h-36 md:w-36 transition-colors" />
                  </Link>
                
    
                <ul className="flex justify-between items-center gap-2 md:gap-7 text-sm md:text-2xl">
                    <li><Link to ="/homepage" className="hover:text-cyan-400 transition-colors ">Carros</Link></li>
                    <li><Link to="/directionpage" className="hover:text-cyan-400 transition-colors " >Localização</Link></li>
                    <li><Link to="/aboutpage" className="hover:text-cyan-400 transition-colors ">Sobre nós</Link></li>
                    <li><Link to="/testDrive" className="hover:text-cyan-400 transition-colors ">Test-drive</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu;