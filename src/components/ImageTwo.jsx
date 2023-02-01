import { Parallax } from 'react-parallax';
import CarTwo from "../imgs/newpic3.jpg"

import { Link } from 'react-router-dom';

const ImageTwo = () => (
    <Link to="/homepage">
        <Parallax bgImage={CarTwo}  strength={800} className="container mx-auto max-w-screen-2xl h-screen relative">
            <div className="container mt-96 mx-auto sticky h-12 w-72 text-center ">
            
                <button className="text-6xl font-bold bg-black text-white rounded-full w-80 py-2 pb-4 animate-pulse-slow">Enter Site</button>  
           
            </div>
        </Parallax>
    </Link>
);


export default ImageTwo;