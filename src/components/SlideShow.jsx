import React, {useState} from 'react';
import cars from "../data/cars.json";
import "../app.css";
import { useParams } from "react-router-dom";


function SlideShow(props) {
    let cars = props.data
   const [value, setValue] = useState(0)
   const params = useParams();
   const idData = params.numerodechassi;
   const data = cars.find((car) => car.numerodechassi === idData);
  
  console.log(value)

  
    function nextImage(){
      if (value < data.imagens.length - 1){
        setValue(value + 1)
      }
      else{
        setValue(0)
      }  
   };
  

  function prevImage(){
    if (value < data.imagens.length && value >0 ){
      setValue(value - 1)
    }
    else{
      setValue(data.imagens.length - 1)
    }    
    }

    function goToImage(event){
       setValue(parseInt(event.target.value));
    }
  
  return (
    <div className="container mx-auto flex mt-10">
      <button className="h-10 md:h-16 rounded-lg text-xl md:text-5xl ml-4 md:ml-0 text-white bg-blue-400 text-center my-auto pb-2 cursor-pointer" onClick={prevImage}>{"<"}</button>
      <div>
        <div>
          <div className="container block mb-5">
              <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-700 text-center  hover:underline">{data.marca}</div>
              <div className="sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-500 text-center ">{data.modelo}</div>
          </div>
          <div className="container mx-auto w-full md:w-3/4 h-auto">
            <div className="flex overflow-x-auto gap-10 snap-x snap-mandatory before:shrink-0 before:w-1/12 after:shrink-0 after:w-1/12 scroll-smooth">
                <img src={data.imagens[value]} alt="img" className="snap-center shrink-0" />
                
            </div>
          </div>
        </div>
        
        
         <div>  
          
            <div >
              <div className="container flex justify-center gap-4">
                {data.imagens.map((image, imageIndex)=>(
                  <button key={imageIndex} value={imageIndex} className="cursor-pointer text-4xl" onClick={goToImage}>•</button>
                ))}
              </div>
            </div>
          
              
          </div> 
      </div>
       <button className="h-10 md:h-16 rounded-lg text-xl md:text-5xl mr-4 md:mr-0 text-white bg-blue-400 text-center my-auto pb-2"  onClick={nextImage}>{">"}</button> 
    </div>
  )
}

export default SlideShow