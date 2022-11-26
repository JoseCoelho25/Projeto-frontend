import React from 'react'
import CarOne from "../imgs/newpic2.jpg"
import {Link} from "react-router-dom";
import Speedometer from "../imgs/speedometer.png";
import Petrol from "../imgs/petrol.png";
import Engine from "../imgs/engine.png";
import Gear from "../imgs/gear.png";

function Card() {
  return (
    <div>
   


	<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to="/details" className="" >
                  <img src={CarOne} alt="card" className="rounded-t-lg p-8" />
                  </Link>
			<div className="px-5 pb-5 grid gap-y-4">
				<Link to="/">
					<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">BMW serie 8</h3>
				</Link>
				
				<div className="flex">
					<div className="flex w-1/2 gap-2">
					<img src={Speedometer} alt="speedometer" />
					<h4>110000 Km</h4>
					</div>
					<div className="flex gap-2">
					<img src={Petrol} alt="petrol" className="w-8 h-8" />
					<h4>Diesel</h4>
					</div>
				</div>
				<div className="flex">
					<div className="flex w-1/2 gap-2">
					<img src={Engine} alt="engine" />
					<h4>200 cv</h4>
					</div>
					<div className="flex gap-2">
					<img src={Gear} alt="petrol" className="w-8 h-8" />
					<h4>Manual</h4>
					</div>
				</div>
				
				
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">$30000</span>
					<Link to="/" 
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comparar</Link>
				</div>
			</div>
	</div>

</div>
  )
}

export default Card