import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Speedometer from "../imgs/speedometer.png";
import Petrol from "../imgs/petrol.png";
import Engine from "../imgs/engine.png";
import Gear from "../imgs/gear.png";
import Glass from "../imgs/mag-glass.png"
import cars from "../data/cars.json";

function Card() {
	const [text, setText] = useState ("");

	const carsToRender = cars.filter((car) => car.marca.toLowerCase().includes(text.toLowerCase()) || car.modelo.toLowerCase().includes(text.toLowerCase()));

  return (
    <div className="container mx-auto w-screen mt-6">
		<p className="text-4xl font-bold text-center mb-2">Pesquisa Rapida</p>
		<div className="container flex justify-center mb-8">
			
			<div className="flex w-2/3">
			<input type="text" onChange={(n)=>{
				setText(n.target.value) 
			}} value={text} placeholder="Procure por marca, modelo, caracteristica, etc..." className="mx-auto w-full rounded-lg pl-12"/>
			<img src={Glass} alt="glass" className=" w-10 absolute justify-end"/>
			</div>
		</div>
	<div className="bg-white shadow-md rounded-lg  grid grid-cols-1 md:grid-cols-3 gap-2">
		{carsToRender.map((car)=>(
			<div key={car}>
        <Link to={`/details/${car.numerodechassi}`} className="col-span-1">
                  <img src={car.imagens[0]} alt="card" className="rounded-t-lg " />
                  </Link>
			<div className="px-5 pb-5 grid gap-y-4">
				<Link to={`/details/${car.numerodechassi}`} className="flex items-center">
					<h2 className="text-gray-900 font-semibold text-2xl tracking-tight mr-4">{car.marca}</h2>
					<h3 className="text-gray-500 font-semibold text-xl tracking-tight pt-1">{car.modelo}</h3>
				</Link>
				
				<div className="flex">
					<div className="flex w-1/2 gap-2">
					<img src={Speedometer} alt="speedometer" />
					<h4>{car.numerokm} Km</h4>
					</div>
					<div className="flex gap-2">
					<img src={Petrol} alt="petrol" className="w-8 h-8" />
					<h4>{car.combustivel}</h4>
					</div>
				</div>
				<div className="flex">
					<div className="flex w-1/2 gap-2">
					<img src={Engine} alt="engine" />
					<h4>{car.potencia} cv</h4>
					</div>
					<div className="flex gap-2">
					<img src={Gear} alt="petrol" className="w-8 h-8" />
					<h4>{car.tranmissao}</h4>
					</div>
				</div>
				
				
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">{car.preco}€</span>
					<Link to="/" 
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comparar</Link>
				</div>
			</div>
			</div>
			))}
	</div>	
	
</div>
  )
}

export default Card