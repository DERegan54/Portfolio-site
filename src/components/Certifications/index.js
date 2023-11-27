import { useState } from 'react'
import './index.scss';
import SpringboardImg from "../../assets/images/Springboard-cert.png"
import AgileScrumFundImg from "../../assets/images/Agile-scrum-fund-badge.png";
import Sidebar from '../Sidebar';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';


const Certifications = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
            <div className='container certifications-page'>
                <Sidebar />
                <div className='text-zone cert'>
                    <h1 className='cert-h1'>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={["M","y", " ", "C", "e", "r", "t", "i", "f", "i", "c", "a", "t", "e", "s", " ", ":"]}
                            idx={15}
                        />
                    </h1>   
                </div>
                <img src={SpringboardImg} className='SpringboardImage' />
                <img src={AgileScrumFundImg} className='AgileScrumFundImg' />
            </div>
            <Loader type='pacman' />
        </>    
    )    
}

export default Certifications;
