import { Parallax } from 'react-parallax';
import CarThree from "../imgs/newpic1.jpg"
import {Link} from "react-router-dom";
import Pin from "../imgs/location.png";

const ImageThree = () => (
    <Parallax bgImage={CarThree}  strength={800} className="container mx-auto w-screen h-screen">
        <Link to="/directionpage" className="container flex mt-36  pr-6 lg:pr-24 justify-end h-36 w-full text-end">
                <img src={Pin} alt="location" className="" />
           <div> 
                <div className="text-l md:text-xl lg:text-3xl font-bold text-black"> Praça da República,<br></br> 4610-116 Felgueiras</div>
                    <p className="text-l md:text-xl lg:text-4xl">Contact@stand-carrocinha.pt</p> 
                    <p className="text-l md:text-xl lg:text-6xl">91 XXX XX XX</p>
            </div>
        </Link>  
    </Parallax>
);

export default ImageThree;