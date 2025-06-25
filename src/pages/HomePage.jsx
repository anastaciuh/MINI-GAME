import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-10 bg-cover bg-center pb-50 md:pb-50 bg-[url('/images/bgrealmobile.png')] md:bg-[url('/images/bgrealdesktop.png')]"
    >
      <img src="/images/LARASRUPAA-01.png" alt="Laras Rupa" className="w-[70vw] md:w-[35vh] max-w-2xl h-[50vh] md:h-[50vh] -mt-40 object-contain rounded-lg mb-4 drop-shadow-2xl" />

      <div className="flex flex-col items-center space-y-15 md:space-y-10 -mt-15">
        <Button
          text="START"
          onClick={() => navigate("/QuizPage")}
          className="font-host w-48 h-16 md:w-45 md:h-20 text-2xl md:text-2xl mx-auto"
        />
        <Button
          text="ABOUT"
          onClick={() => navigate("/AboutPage")}
          className="font-host w-48 h-16 md:w-45 md:h-20 text-2xl md:text-2xl mx-auto"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
        <img src="/gif/tompahead.gif" alt="tompa" className="w-full max-w-md md:max-w-md " />
      </div>
    </div>
  );
};

export default HomePage;
