import Link from "next/link";
import React from "react";

interface CardProps {
  bg: string;
  bgHover?: string; // Optional hover background
  href: string;
  title: string;
  description: string;
  className?: string; // Allow additional classes
  symbol: string;
}

const Card: React.FC<CardProps> = ({
  bg,
  bgHover = "blue-800", // Default hover color if not provided
  href,
  title,
  description,
  className = "",
  symbol,
}) => {
  return (
    <Link
      href={href}
      className={`${bg} hover:${bgHover} rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-4 ${className}`}
    >
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-gray-900 text-2xl font-semibold mt-2">{title}</h2>
          <span className="text-2xl">{symbol}</span>
        </div>
        <div className="flex flex-col items-center justify-items-center">
          <span className="text-gray-600 text-2xs mt-2 left-1">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
