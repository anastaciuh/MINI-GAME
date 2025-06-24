import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Box from "../components/Box";
import CharacterCarousel from "../components/CharacterCarousel";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center text-center bg-cover bg-center pb-24 md:pb-50 bg-[url('/images/bgwarna.png')] md:bg-[url('/images/bgwarnadesktop.png')]"
    >
      <h1 className="font-oddval text-[#3325bc] font-bold text-2xl pt-[5vh] pb-[5vh]">
        Kalau kepribadianmu bisa digambar... bentuknya kayak gimana, ya?
      </h1>
  
      <Box className="flex flex-col px-4 py-4 items-center space-y-8 w-[60%] -mt-7 md:-mt-1 bg-[url('/images/ungusquare.png')] md:bg-[url('/images/unguw.png')] bg-no-repeat bg-contain bg-center h-full md:min-h-[600px]">
        <div className="max-w-[90%] md:max-w-[80%] mx-auto w-full text-center">
          <p className="font-host mr-5 ml-5 mt-10 text-sm leading-relaxed text-[#fde466]">Apakah kamu tipe orang yang penuh dengan strategi kompleks bagaikan RD2D berkomposisi rumit? Atau mungkin orang yang selalu mengayomi teman-temanmu bagaikan warna-warna hangat? LARAS RUPA adalah game kepribadian berbasis narasi visual yang mengajakmu menelusuri kedalaman dirimu jika ditempatkan sebagai mahasiswa TPB FSRD ITB melalui 17 situasi penuh makna. Di setiap pilihan, kamu membentuk jejak unik dari siapa kamu sebenarnya, tidak hanya lewat kata, tetapi juga melalui bentuk, garis, dan warna yang mencerminkan jiwamu.</p>
          <p className="font-host font-bold text-m text-center mt-8 mb-0 text-[#fde466]">Apa aja sih perannya?</p>
          <CharacterCarousel className="max-w-[80px] md:max-w-[110px] mx-auto" />
        </div>
      </Box>

      <Button
        text="BACK"
        className="w-40 h-12 mt-13"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default AboutPage;

