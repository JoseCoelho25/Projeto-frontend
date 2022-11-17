import { Parallax } from 'react-parallax';
import CarOne from "../imgs/newpic2.jpg"

const ImageOne = () => (
    <Parallax bgImage={CarOne}  strength={800} className="container mx-auto w-screen h-screen ">
        <div className="container mt-48">
           <p className="container text-center text-7xl text-gray-700 font-bold">Carrocinha</p> 
        </div>
    </Parallax>
);

export default ImageOne;