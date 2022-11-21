import { Parallax } from 'react-parallax';
import CarThree from "../imgs/newpic1.jpg"

const ImageThree = () => (
    <Parallax bgImage={CarThree}  strength={800} className="container mx-auto w-screen h-screen relative">
       <div className="container mt-36 absolute right-0 mr-12 h-36 w-full text-end">
           <a href="/directionpage" className="text-3xl font-bold text-black"> Praça da República,<br></br> 4610-116 Felgueiras</a>
           <p className="text-4xl">Contact@stand-carrocinha.pt</p> 
           <p className="text-6xl">91 XXX XX XX</p>
        </div>
    </Parallax>
);

export default ImageThree;