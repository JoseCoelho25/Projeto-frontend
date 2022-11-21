import { Parallax } from 'react-parallax';
import CarTwo from "../imgs/newpic3.jpg"

import { Link } from 'react-router-dom';

const ImageTwo = () => (
    <Parallax bgImage={CarTwo}  strength={800} className="container mx-auto w-screen h-screen relative">
        <div className="container mt-96 mx-auto sticky h-12 w-72 text-center">
            <Link to="/homepage">
                <button className="text-6xl font-bold bg-black text-white rounded-full w-80 py-2 pb-4 animate-pulse-slow">Enter Site</button>  
            </Link>
        </div>
    </Parallax>
);


export default ImageTwo;