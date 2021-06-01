import React from "react";

interface CardProps {
  text: String;
}

const Card = ({ text }: CardProps) => {
  return (
    <div className='bg-white max-w-xs mx-auto cursor-pointer py-2 px-4 text-center rounded shadow-md'>
      {text}
    </div>
  );
};

export default Card;
