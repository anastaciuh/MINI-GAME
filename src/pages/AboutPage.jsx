import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Box from "../components/Box";
import CharacterCarousel from "../components/CharacterCarousel";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-[100vh] flex flex-col items-center justify-center text-center bg-cover bg-center bg-[url('/images/bgrealmobile.png')] md:bg-[url('/images/bgrealdesktop.png')] overflow-visible"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="font-oddval text-[#3325bc] font-bold text-[4vw] md:text-xl pt-[4vh]">
        Kalau kepribadianmu bisa digambar... bentuknya kayak gimana, ya?
      </h1>
  
      <Box className="mt-5 md:mt-6 overflow-visible flex flex-col items-center justify-center space-y-[2vh] w-[90vw] max-w-[600px] md:max-w-[750px] mx-auto bg-[url('/images/ungusquare.png')] md:bg-[url('/images/unguw.png')] bg-no-repeat bg-contain bg-center py-[3vh] px-[2vw]">
        <div className="w-full text-left">
          <p className="font-host text-[#fde466] text-[3.5vw] md:text-[1.1vw] leading-relaxed text-justify mx-[7vw] md:mx-[5vw]">
            Apakah kamu tipe orang yang penuh dengan strategi kompleks bagaikan RD2D berkomposisi rumit? Atau mungkin orang yang selalu mengayomi teman-temanmu bagaikan warna-warna hangat? LARAS RUPA adalah game kepribadian berbasis narasi visual yang mengajakmu menelusuri kedalaman dirimu jika ditempatkan sebagai mahasiswa TPB FSRD ITB melalui 17 situasi penuh makna. Di setiap pilihan, kamu membentuk jejak unik dari siapa kamu sebenarnya, tidak hanya lewat kata, tetapi juga melalui bentuk, garis, dan warna yang mencerminkan jiwamu.
          </p>
          <p className="font-host font-bold text-[2.5vw] md:text-[1.3vw] text-center mt-[2vh] mb-0 text-[#fde466]">
            Apa aja sih perannya?
          </p>
          <CharacterCarousel className="about-carousel max-w-[100vw] md:max-w-[350px] mx-auto" />
        </div>
      </Box>

      <Button
        text="BACK"
        className="w-60 h-18 mt-6 mb-6"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default AboutPage;

