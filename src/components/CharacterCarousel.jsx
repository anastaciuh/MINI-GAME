import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 

const CharacterCarousel = () => {
  const characters = [
    { name: "Si Guardian", image: "/images/guardian.png", desc: "Penjaga Harmoni" },
    { name: "Si Artisan", image: "/images/artisan.png", desc: "Penuh kreativitas" },
    { name: "Si Idealist", image: "/images/idealist.png", desc: "Pencari Makna" },
    { name: "Si Rationalist", image: "/images/rationalist.png", desc: "Perancang Strategi" },
  ];

  return (
  <Swiper
    modules={[Navigation]} 
  navigation 
    spaceBetween={30}
    slidesPerView={1}
    loop={false}
    className="w-full"
  >
    {characters.map((char, idx) => (
      <SwiperSlide key={idx}>
      <div className="flex flex-col items-center text-center space-y-1 mt-1 pt-2 px-2">
        <img src={char.image} alt={char.name} className="w-full h-auto max-h-[150px] md:max-h-[250px] object-contain mx-auto" />
        <h2 className="font-host text-base font-bold text-[#8be8ed]">{char.name}</h2>
        <p className="font-host text-sm max-w-[85%] leading-snug text-[#8be8ed]">
          {char.desc}
        </p>
      </div>
    </SwiperSlide>
    ))}
  </Swiper>
  
  );
};

export default CharacterCarousel;
