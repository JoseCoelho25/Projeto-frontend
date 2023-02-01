import React from 'react'
import calendar from "../imgs/calender-color.png";
import km from "../imgs/road.png";
import pump from "../imgs/petrol-colored.png";
import chassis from "../imgs/chassis.png";
import engine from "../imgs/engine-color.png";
import speed from "../imgs/speedometer-color.png";
import carDoor from "../imgs/car-door.png";
import color from "../imgs/pallete.png";
import gearColor from "../imgs/gear-color.png"
import Speedometer from "../imgs/speedometer.png";
import Petrol from "../imgs/petrol.png";
import Engine from "../imgs/engine.png";
import Gear from "../imgs/gear.png";
import { useParams, Link } from "react-router-dom";




function DetailsCard(props) {
    
    let cars= props.data;
    
    const params = useParams();
    const idData = params.numerodechassi;
    const data = cars.find((car)=>(car.numerodechassi === idData));
    const chassi = data.tipodechassi;
    //filtro para carros com o mesmo chassi
    const filterData = cars.filter((car) => (car.tipodechassi === chassi))
    const filterArray = filterData.filter((n)=> (n.numerodechassi !== data.numerodechassi));
    
  return (
    <div>
       
             <div className="mt-6 bg-gray-50">
                  <div className="container grid grid-rows-1 grid-cols-3 mx-auto w-full md:w-1/3 gap-y-4">
                        <div className="flex gap-4 md:mx-auto text-sm md:text-xl pl-3 md:pl-0 text-gray-500 font-bold items-center md:w-40 ">
                            <img src={calendar} alt="calendar" className="w-8 md:w-12"/>
					        <h4> {data.anofabrico}</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-sm md:text-xl text-gray-500 font-bold items-center md:w-40">
                            <img src={km} alt="km" className="w-8 md:w-12"/>
					        <h4> {data.numerokm}Km</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-sm md:text-xl text-gray-500 font-bold items-center md:w-40">
                            <img src={pump} alt="essence" className="w-8 md:w-12"/>
					        <h4> {data.combustivel}</h4>
                        </div>                        
                 </div>
			</div>

            <div>
                <details className="md:p-4 rounded-lg mx-auto mb-10 md:mb-20">
                    <summary className="font-semibold list-addition mx-auto w-1/2 text-center text-blue-400 text-md md:text-xl mt-6 md:mt-0">Click for more details</summary>
                    <div className="container grid grid-rows-1 grid-cols-3 mx-auto w-full pl-3 md:pl-0 md:w-1/3 gap-y-4 gap-4 mt-4">
                        <div className="flex gap-4 md:mx-auto text-sm md:text-xl text-gray-500 font-bold items-center md:w-40">
                            <img src={chassis} alt="chassis" className="w-8 md:w-12"/>
					        <h4> {data.tipodechassi}</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-sm md:text-xl text-gray-500 font-bold items-center md:w-40">
                            <img src={speed} alt="chassis" className="w-8 md:w-12"/>
					        <h4> {data.potencia}Cv</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-sm md:text-xl text-gray-500 font-bold items-center md:w-40">
                            <img src={engine} alt="chassis" className="w-8 md:w-12"/>
					        <h4> {data.capacidade}CC</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-sm md:text-xl text-gray-500 font-bold items-center w-28 md:w-40">
                            <img src={carDoor} alt="chassis" className="w-8 md:w-12"/>
					        <h4> {data.portas}Portas</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-sm md:text-xl text-gray-500 font-bold items-center md:w-40">
                            <img src={color} alt="chassis" className="w-8 md:w-12"/>
					        <h4> {data.corexterior}</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-sm md:text-xl text-gray-500 font-bold items-center md:w-40">
                            <img src={gearColor} alt="chassis" className="w-8 md:w-12"/>
					        <h4> {data.tranmissao}</h4>
                        </div>  
                    </div>
                    <div className="mx-auto text-xl mt-10 md:mt-24 md:text-4xl font-bold w-1/2  text-blue-400">Equipamentos</div>
                    <ul className="mx-auto grid grid-cols-2 list-disc mt-4 mb-10 w-full md:w-1/2">
                        {data.seguranca.map((n)=>(
                            <li key={n} className="text-md md:text-xl font-normal text-gray-500 mt-4 ml-6">{n}</li>
                        ))}
                        <li className="text-md md:text-xl font-normal text-gray-500 mt-4 ml-6">{data.sensores}</li>
                        <li className="text-md md:text-xl font-normal text-gray-500 mt-4 ml-6">{data.tipofarois}</li>
                    </ul>
                </details>
            </div>
       
                           

		<h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">Carros Semelhantes</h2>
        <div className="max-w-7xl mx-auto px-5 mb-3">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            
            {filterArray.map((res)=>(
            <div key={res} className="grid grid-cols-12 col-span-12 gap-7">
           
                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <Link to={`/details/${res.numerodechassi}`} className="block transition duration-200 ease-out transform hover:scale-110" >
                    
                        <img  className="object-cover w-full shadow-sm h-full" src={res.imagens[0]} alt="."/>
                      
                    </Link>
                    <Link to={`/details/${res.numerodechassi}`} className="flex items-center">
					    <h2 className="text-gray-900 font-semibold text-2xl tracking-tight mr-4">{res.marca}</h2>
					    <h3 className="text-gray-500 font-semibold text-xl tracking-tight pt-1">{res.modelo}</h3>
				    </Link>
				
				<div className="flex w-full">
					<div className="flex w-1/2 gap-2">
					<img src={Speedometer} alt="speedometer" />
					<h4>{res.numerokm} Km</h4>
					</div>
					<div className="flex gap-2">
					<img src={Petrol} alt="petrol" className="w-8 h-8" />
					<h4>{res.combustivel}</h4>
					</div>
				</div>
				<div className="flex w-full">
					<div className="flex w-1/2 gap-2">
					<img src={Engine} alt="engine" />
					<h4>{res.potencia} cv</h4>
					</div>
					<div className="flex gap-2">
					<img src={Gear} alt="petrol" className="w-8 h-8" />
					<h4>{res.tranmissao}</h4>
					</div>
				</div>
                </div>              
            </div>
            ))}
            </div>          
        </div>
</div>
    

    

  )
}

export default DetailsCard