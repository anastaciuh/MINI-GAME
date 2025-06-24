import React from "react";

const Button = ({ 
    text, 
    onClick, 
    className = "",
    variant = "default", 
}) => {

const base = `
    inline-flex 
    items-center justify-center 
    font-host text-[#fde466] font-semibold
    whitespace-normal break-words
    bg-[url('/images/buttonpendek.png')] bg-no-repeat bg-center
    drop-shadow-lg
    transition-transform
    active:scale-95
    `;

const sizing =
    variant === "quiz"
      ? 
        `bg-[length:100%_100%]
        text-sm
         px-6 py-3
         w-full
         h-20
         leading-snug`
      : 
        `bg-contain
         w-40 h-12`;

  return (
    <button
      onClick={onClick}
      className={`
        ${className} ${sizing} ${base}
      `}
    >
      <span className="px-1 text-center whitespace-pre-line">{text}</span>
    </button>
  );
};

export default Button;
