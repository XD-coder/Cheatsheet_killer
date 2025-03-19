"use client";

import React from "react";
const analytics = () => {
  const [temp, setTemp] = React.useState(10);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(Number(event.target.value));
  };
  return (
    <main className="bg-gray-200 p-4">
      <div className="flex flex-col bg-gradient-to-br from-blue-300 to-indigo-600 p-8 hover:from-blue-500 hover:to-indigo-800 transition-colors duration-200 rounded-2xl shadow-lg">
        <h1 className="font-extrabold text-4xl hover:text-5xl transition-all duration-200">
          Analytics
        </h1>
        <p className="text-gray-600 text-sm hover:text-gray-900">
          Temperature Analytics
        </p>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow-lg mt-4 flex flex-col space-y-4">
        <div>Weather</div>
        <div>
          Temperature :{" "}
          <input
            className="bg-violet-300 rounded-full p-2 ml-2.5 text"
            type="number"
            value={temp}
            onChange={handleChange}
          />
          *c
        </div>
        <p>
          {temp > 30
            ? " hot"
            : temp > 20
            ? " warm"
            : temp > 10
            ? " cold"
            : " freezing"}
        </p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl"
          onClick={() => {
            setTemp(temp + 1);
          }}
        >
          Increase Temp
        </button>
      </div>
    </main>
  );
};

export default analytics;
