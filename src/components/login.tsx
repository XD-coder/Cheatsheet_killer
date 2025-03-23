"use client";
import { useRouter } from "next/router";

import Link from "next/link";
import { RiLoginBoxFill } from "react-icons/ri";

interface LoginProps {
  bg: string;
  bgHover?: string; // Optional hover background
  href: string;
  title: string;
  description: string;
  className?: string; // Allow additional classes
  symbol: string;
}

const Login: React.FC<LoginProps> = ({
  bg = "",
  bgHover = "", // Default hover color if not provided
  href = "",
  title = "",
  description = "",
  className = "",
  symbol = <RiLoginBoxFill />,
}) => {
  return (
    <Link
      href="/login"
      onClick={() => {}}
      className={`${bg} ${bgHover} p-4 fixed rounded-2xl shadow-md hover:shadow-2xl ${className}`}
    >
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-gray-900 text-xl font-semibold mt-1">{title}</h2>
          <span className="text-2xl">{symbol}</span>
        </div>
        <div className="flex flex-col items-center justify-items-center w-full">
          <span className="text-gray-600 text-2xs mt-1">{description}</span>
        </div>
      </div>
    </Link>
  );
};

export default Login;
