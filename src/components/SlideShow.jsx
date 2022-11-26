import React, {useState} from 'react';
import cars from "../data/cars.json";
import "../app.css";


function SlideShow() {
   const [value, setValue] = useState(0)

   function nextImage(){
     if (value === 2){
       setValue(2);
     }
     else{
       setValue(value + 1);
     }
   }

   function prevImage(){
     if (value === 0){
       setValue(0);
     }
     else{
       setValue(value - 1);
     }
   }

  // const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };
  
  return (
    <div className="container mx-auto flex">
        <ul className="container-snap mx-auto w-1/2 h-auto">
        
        {cars.map(({marca, imagens})=>(
            <li key={marca} className="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-1/12 after:shrink-0 after:w-1/12 scroll-smooth">
                <img src={imagens[value]} alt="img" className="snap-center shrink-0" />
                {/* <img src={imagens[1]} alt="img" className="snap-center shrink-0" />
                <img src={imagens[2]} alt="img" className="snap-center shrink-0" /> */}
            </li>
        ))}
        {/* <button className="text-6xl text-white bg-black" onClick={handleClick}>next</button> */}
        <button className="text-6xl text-white bg-black" onClick={prevImage}>previous</button> 
        <button className="text-6xl text-white bg-black" onClick={nextImage}>next</button> 
       
       </ul>
       
    </div>
  )
}

export default SlideShow