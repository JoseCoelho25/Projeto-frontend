import React, { useState} from 'react';
import {Link} from "react-router-dom";
import Speedometer from "../imgs/speedometer.png";
import Petrol from "../imgs/petrol.png";
import Engine from "../imgs/engine.png";
import Gear from "../imgs/gear.png";
import Glass from "../imgs/mag-glass.png"
import "../app.css";

// variavel para criar keys unicas
const keygen = () => Date.now().toString() + Math.random()

function Card(props) {
	let cars= props.data;
	
	const [text, setText] = useState ("");
	
	const carsToRender = cars.filter((car) => car.marca.toLowerCase().includes(text.toLowerCase()) || car.modelo.toLowerCase().includes(text.toLowerCase()));
	

	const [clicked, setClicked] = useState([]);
	const [compare, setCompare] = useState (false);
	
	//funcçao para selecionar o numero de chassi de cada card e colocar o compare true se tiver 2 elementos
	 function handleClick (e) {
	 	const click = e.target.value;
	 	 if ( clicked.includes(click)){
	 	 	 const index = clicked.indexOf(click); 
  	 	 	 	clicked.splice(index, 1);
	 	 	 	setClicked(clicked)
	 	 }
	 	 else{
	 	 	let newArray=[...clicked, click]
	 	 	setClicked(newArray)
			compareCheck();
	 	 	
	 	 }
	 }
	//filtros para aparecer no compare
	 const data =cars.find((car)=>(car.numerodechassi === clicked[0]));
	 const data1 =cars.find((car)=> (car.numerodechassi === clicked[1]))

	
function compareCheck(){
	if (clicked.length === 1){
		setCompare(true);
	}
	else{
		setCompare(false);
	}
}

function removeModal(){
	setCompare(false);
	setClicked([]);
}

const cardClass = compare ? "blur" : "";


  return (
    <div className="container mx-auto px-2 w-screen mt-6">
		<p className="text-2xl lg:text-4xl font-bold text-center mb-2">Pesquisa Rapida</p>
		<div className="container flex justify-center mb-8">
			
			<div className="flex w-2/3">
			<input type="text" onChange={(n)=>{
				setText(n.target.value) 
			}} value={text} placeholder="Procure por marca, modelo, caracteristica, etc..." className="mx-auto w-full rounded-lg pl-12"/>
			<img src={Glass} alt="glass" className="w-10 absolute justify-end"/>
			</div>
		</div>
		<div className={`bg-white shadow-md rounded-lg  grid grid-cols-1 md:grid-cols-3 gap-2 ${cardClass}`}>
		{carsToRender.map((car)=>(
			<div key={keygen()}>
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
					<button
						className="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-4" value={car.numerodechassi} onClick={handleClick}>Comparar</button>
				</div>
			</div>
			</div>
			))}
		</div>
		<div className="" >
		 {compare ? (
			<div className="block max-w-screen-2xl h-screen fixed md:inset-0 md:inset-x-48 mt-12 md:mt-0 sm:top-6 md:top-12 2xl:top-32 top-0">
				<input type="button" value="Return" onClick={removeModal} className="bg-blue-400 w-full  text-4xl font-bold cursor-pointer"/>
            	<div className="container bg-white p-4 grid grid-cols-3 grid-rows-8 gap-x-2" >
					<div className="text-sm md:text-l xl:text-2xl 2xl:text-4xl font-bold grid grid-cols-1 gap-y-4 truncate">
					<div>Marca</div>
					<div>Modelo</div>
					<div>Preço</div>
					<div>Chassis</div>
					<div>Ano fabrico</div>
					<div>Kilometragem</div>
					<div>Potência</div>
					<div>Combustivel</div>
					<div>Caixa de mudanças</div>
					<div>Portas</div>
				</div>
				<div className="text-sm md:text-l xl:text-2xl 2xl:text-4xl grid grid-cols-1 gap-y-4">
					<div>{data.marca}</div>
					<div>{data.modelo}</div>
					<div>{data.preco}€</div>
					<div>{data.tipodechassi}</div>
					<div>{data.anofabrico}</div>
					<div>{data.numerokm}Km</div>
					<div>{data.potencia}CC</div>
					<div>{data.combustivel}</div>
					<div>{data.tranmissao}</div>
					<div>{data.portas}</div>
				</div>
				<div className="text-sm md:text-l xl:text-2xl 2xl:text-4xl grid grid-cols-1 gap-y-4">
					<div>{data1.marca}</div>
					<div>{data1.modelo}</div>
					<div>{data1.preco}€</div>
					<div>{data1.tipodechassi}</div>
					<div>{data1.anofabrico}</div>
					<div>{data1.numerokm}Km</div>
					<div>{data1.potencia}CC</div>
					<div>{data1.combustivel}</div>
					<div>{data1.tranmissao}</div>
					<div>{data1.portas}</div>
				</div>
            </div>
		</div>
          ) : (
            ''
          )}
		</div>	
</div>
  )
}


export default Card