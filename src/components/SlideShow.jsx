import React, {useState} from 'react';
import cars from "../data/cars.json";
import "../app.css";
import { useParams } from "react-router-dom";


function SlideShow() {
   const [value, setValue] = useState(0)
   const params = useParams();
   const idData = params.numerodechassi;
   const data = cars.find((car) => car.numerodechassi === idData);

   function nextImage(){
     if (value > 1){
       setValue(0);
     }
     else if(value <= 99 & value >= 0){
       setValue(value + 1);
     }
   }

   function prevImage(){
    if(value < 1){
      setValue(2);
    }
     else if(value <= 99 & value >= 1){
      setValue(value - 1);
     }
     
   }

    function goToImage(event){
       setValue(parseInt(event.target.value));
    }
    
  // const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };
  
  return (
    <div className="container mx-auto flex mt-10">
      <button className="h-16 rounded-lg text-5xl text-white bg-blue-400 text-center my-auto pb-2 cursor-pointer" onClick={prevImage}>{"<"}</button>
      <div>
        <div>
          <div className="container block mb-5">
              <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-700 text-center  hover:underline">{data.marca}</div>
              <div className="sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-500 text-center ">{data.modelo}</div>
          </div>
          <div className="container mx-auto w-1/2 h-auto">
            <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-1/12 after:shrink-0 after:w-1/12 scroll-smooth">
                <img src={data.imagens[value]} alt="img" className="snap-center shrink-0" />
                <img src={data.imagens[value + 1]} alt="img" className="snap-center shrink-0" />
                <img src={data.imagens[value + 2]} alt="img" className="snap-center shrink-0" />
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
       <button className="h-16 rounded-lg text-5xl text-white bg-blue-400 text-center my-auto pb-2"  onClick={nextImage}>{">"}</button> 
    </div>
  )
}

export default SlideShow