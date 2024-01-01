import React from 'react';
import Lottie from "lottie-react";
import preloaderAnimation from '../../assets/preloader.json';

const Preloader = () => {
    return (
        <div className="flex flex-1 items-center justify-center mx-auto min-h-screen">
        <Lottie animationData={preloaderAnimation} className=" h-20 w-20"></Lottie>
        
    </div>
    );
};

export default Preloader;