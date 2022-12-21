import React from 'react'
import Logo from "../imgs/logoZe.png";
import {Link} from "react-router-dom";

function Menu() {
  return (
    <div className="container mx-auto relative shadow bg-blue-400 h-24 pt-6 w-screen">
        <div className="w-full backdrop-blur-sm">
            <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
                <Link to="/" className="" >
                  <img src={Logo} alt="logo" className="h-36 w-36 transition-colors" />
                  </Link>
                
    
                <ul className="flex items-center gap-2 md:gap-7">
                    <li><Link to ="/homepage" className="hover:text-cyan-400 transition-colors text-sm md:text-2xl">Carros</Link></li>
                    <li><Link to="/directionpage" className="hover:text-cyan-400 transition-colors text-sm md:text-2xl" >Localização</Link></li>
                    <li><Link to="/aboutpage" className="hover:text-cyan-400 transition-colors text-sm md:text-2xl">Sobre nós</Link></li>
                    <li><Link to="/testDrive" className="hover:text-cyan-400 transition-colors text-sm md:text-2xl">Test-drive</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu;