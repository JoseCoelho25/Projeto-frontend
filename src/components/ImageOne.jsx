import { Parallax } from 'react-parallax';
import CarOne from "../imgs/newpic2.jpg"
import Logo from "../imgs/logoZe.png";

const ImageOne = () => (
    <Parallax bgImage={CarOne}  strength={800} className="container mx-auto w-screen h-screen relative">
        <div className="container right-0 h-1/5 w-1/5 absolute mr-96 mt-24"> 
           <img src={Logo} alt="car" className=""/>
        </div>
    </Parallax>
);
export default ImageOne;