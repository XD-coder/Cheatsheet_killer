import React from "react";

interface tasksProps {
  bg: string;
  bgHover?: string; // Optional hover background
  href: string;
  title: string;
  description: string;
  className?: string; // Allow additional classes
  symbol: string;
}

const Tasks: React.FC<tasksProps> = ({
  bg,
  bgHover = "blue-800", // Default hover color if not provided
  href,
  title,
  description,
  className = "",
  symbol,
}) => {
  return (
    <body
      className={`${bg} hover:${bgHover} rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-4 ${className}`}
    >
      <div>
        <h1>${title}</h1>
        <hr></hr>
        <p>Manage your tasks and stay organized</p>
      </div>
    </body>
  );
};

export default Tasks;
