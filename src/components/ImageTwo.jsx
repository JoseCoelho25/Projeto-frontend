import { Parallax } from 'react-parallax';
import CarTwo from "../imgs/newpic3.jpg"

const ImageTwo = () => (
    <Parallax bgImage={CarTwo}  strength={800} className="container mx-auto w-screen h-screen">
        <div className="container mx-auto">
           <p className="text-3xl text-gray-700 font-bold">Entrar</p> 
        </div>
    </Parallax>
);

export default ImageTwo;