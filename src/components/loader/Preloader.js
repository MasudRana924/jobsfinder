import React from "react";
import Lottie from "lottie-react";
import preloaderAnimation from "../../assets/preloader.json";

const Preloader = () => {
  return (
    <div className="flex flex-1 items-center justify-center mx-auto min-h-screen">
      <div>
        <Lottie
          animationData={preloaderAnimation}
          className=" h-12 w-12"
        ></Lottie>
        {/* <p className="text-sm">CareerPulse</p> */}
      </div>
    </div>
  );
};

export default Preloader;
