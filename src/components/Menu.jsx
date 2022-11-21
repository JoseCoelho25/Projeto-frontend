import React from 'react'
import Logo from "../imgs/logoZe.png";
import {Link} from "react-router-dom";

function Menu() {
  return (
    <div className="container mx-auto relative shadow bg-blue-400 h-24 pt-6">
        <div className="w-full backdrop-blur-sm">
            <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
                <a className="" href="/">
                  <img src={Logo} alt="logo" className="h-36 w-36 transition-colors" />
                  </a>
                
    
                <ul className="flex items-center gap-5">
                    <li><a className="hover:text-cyan-400 transition-colors" href="/homepage">Home</a></li>
                    <li><a className="hover:text-cyan-400 transition-colors" href="/directionpage">Localização</a></li>
                    <li><a className="hover:text-cyan-400 transition-colors" href="/">Marcar test-drive</a></li>
                    <li><Link to ="/homepage">Teste</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu;