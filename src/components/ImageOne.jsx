import { Parallax } from 'react-parallax';
import CarOne from "../imgs/newpic2.jpg"
import Logo from "../imgs/logoZe.png";

const ImageOne = () => (
    <Parallax bgImage={CarOne}  strength={800} className="container mx-auto w-screen h-screen ">
        <div className="container flex w-full justify-end mt-12 pr-6 md:pr-0lg:pr-96"> 
           <img src={Logo} alt="car" className="w-1/2 h-1/2 lg:w-1/3 lg:h-1/3"/>
        </div>
    </Parallax>
);
export default ImageOne;