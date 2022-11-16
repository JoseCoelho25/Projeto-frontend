import { Parallax } from 'react-parallax';
import CarOne from "../imgs/newpic1.jpg"

const ImageOne = () => (
    <Parallax bgImage={CarOne}  strength={800} className="container mx-auto w-screen h-screen relative">
        <div className="container absolute">
           <p className="container text-center text-7xl text-gray-700 font-bold">Carrocinha</p> 
        </div>
    </Parallax>
);

export default ImageOne;