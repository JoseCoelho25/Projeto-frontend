import { Parallax } from 'react-parallax';
import CarThree from "../imgs/newpic2.jpg"

const ImageThree = () => (
    <Parallax bgImage={CarThree}  strength={800} className="container mx-auto w-screen h-screen">
        <div className="container mx-auto ">
           <p className="text-3xl text-gray-700 font-bold">Maps</p> 
        </div>
    </Parallax>
);

export default ImageThree;