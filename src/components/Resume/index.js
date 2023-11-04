import { useState } from 'react'
import './index.scss';
import ResumeImg from "../../assets/images/Nov23-resume copy.pdf"
import Sidebar from '../Sidebar';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';


const Resume = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
            <div className='container resume-page'>
                <Sidebar />
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={["M","y", " ", "R", "e", "s", "u", "m", "e", " ", ":"]}
                            idx={15}
                        />
                    </h1>   
                </div>
                <img src={ResumeImg} className='ResumeImage' />
            </div>
            <Loader type='pacman' />
        </>    
    )    
}

export default Resume;
