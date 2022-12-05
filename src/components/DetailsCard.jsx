import React from 'react'
import calendar from "../imgs/calender-color.png";
import cars from "../data/cars.json";
import km from "../imgs/road.png";
import pump from "../imgs/petrol-colored.png";
import chassis from "../imgs/chassis.png";
import engine from "../imgs/engine-color.png";
import speed from "../imgs/speedometer-color.png";
import carDoor from "../imgs/car-door.png";
import color from "../imgs/pallete.png";
import gearColor from "../imgs/gear-color.png"
import { useParams } from "react-router-dom";
import { useState } from "react";


function DetailsCard() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
      };
    
    const params = useParams();
    const idData = params.numerodechassi;
    const data = cars.find((car)=>(car.numerodechassi === idData));

  return (
    <div>
       
             <div className="mt-6 bg-gray-50">
                  <div className="container grid grid-rows-4 grid-cols-3 mx-auto w-1/3 gap-y-4 ">
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={calendar} alt="calendar" />
					        <h4> {data.anofabrico}</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={km} alt="km" className="w-8"/>
					        <h4> {data.numerokm}Km</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={pump} alt="essence" className="w-12"/>
					        <h4> {data.combustivel}</h4>
                        </div>
                        <button className={isActive ? 'collapse' : 'click'} onClick={handleClick}>
        Click
      </button>   
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={chassis} alt="chassis" className="w-12"/>
					        <h4> {data.tipodechassi}</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={speed} alt="chassis" className="w-12"/>
					        <h4> {data.potencia}Cv</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={engine} alt="chassis" className="w-12"/>
					        <h4> {data.capacidade}CC</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={carDoor} alt="chassis" className="w-12"/>
					        <h4> {data.portas}Portas</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={color} alt="chassis" className="w-12"/>
					        <h4> {data.corexterior}</h4>
                        </div>
                        <div className="flex gap-4 mx-auto text-xl text-gray-500 font-bold items-center">
                            <img src={gearColor} alt="chassis" className="w-12"/>
					        <h4> {data.tranmissao}</h4>
                        </div>  
                 </div>
			</div>
       
       
           
					<h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">Carros Semelhantes</h2>
        <div className="max-w-7xl mx-auto px-5 mb-3">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            

            <div className="grid grid-cols-12 col-span-12 gap-7">
                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                        <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="."/>
                    </a>
                    <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div className="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto rounded-full text-xs font-medium uppercase text-white ">
                            <span>Flask</span>
                        </div>
                        <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">Oauth using facebook with flask,mysql,vuejs and tailwind css</a></h2>
                         <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using facebook.</p> 
                    </div>
                </div>

                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                        <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="."/>
                    </a>
                    <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div className="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto  rounded-full text-xs font-medium uppercase text-white ">
                            <span>Django</span>
                        </div>
                        <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">Authenticating users with email verification in Django apps</a></h2>
                         <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your web application by sending secure links to their email box.</p> 
                    </div>
                </div>

                <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                        <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="."/>
                    </a>
                    <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div className="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto  rounded-full text-xs font-medium uppercase text-white ">
                            <span>Flask</span>
                        </div>
                        <h2 className="text-base text-gray-500 font-bold sm:text-lg md:text-xl"><a href="#_">Creating user registration and authentication system in flask</a></h2>
                         <p className="mt-2 text-sm text-gray-500">Learn how to authenticate users to your application using flask and mysql db.</p> 
                    </div>
                </div>
            </div>
            </div>
        </div>
 

</div>
    

    

  )
}

export default DetailsCard