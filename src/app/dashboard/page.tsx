import Link from "next/link";
import React from "react";
import Card from "@/components/Cards";
import Login from "@/components/login";
import Cards from "@/components/button";

const dashboard = () => {
  // New Color Palette (Darker, Modern)
  const primaryBg = "bg-gradient-to-br from-gray-700 to-gray-900";
  const cardBg = "bg-gray-700";
  const headingColor = "text-white";
  const textColor = "text-white";
  const cardColors = {
    notes: { bg: "bg-blue-600", hover: "bg-blue-500" },
    solutions: { bg: "bg-purple-600", hover: "bg-purple-500" },
    doubts: { bg: "bg-teal-600", hover: "bg-teal-500" },
    discussion: { bg: "bg-yellow-600", hover: "bg-yellow-500" },
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="absolute top-4">
        <Login
          bg="bg-green-600"
          href="/dashboard"
          title="Login"
          description="Login to dashboard"
          className="hover:bg-green-500"
          symbol="🔑"
        />
      </div>

      <div
        className={` h-screen p-8 flex flex-col items-center justify-center`}
      >
        <div className="w-full max-w-6xl flex-grow flex flex-col justify-center">
          {/* Title and Subtitle Section */}
          <div className="text-center mb-12  p-8 rounded-lg">
            <h1
              className={`text-4xl sm:text-5xl ${headingColor} font-bold mb-4`}
            >
              Academic Dashboard
            </h1>
            <p className={`text-lg ${textColor}`}>
              Your central hub for resources, solutions, and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30 justify-center">
            <Cards
              heading="Notes"
              definition="Explore curated notes."
              buttonHref="/dashboard/notes"
              color="purple"
            ></Cards>
            <Cards
              heading="Solutions"
              definition="Access detailed solutions."
              buttonHref="/dashboard/solutions"
              color="amber"
            ></Cards>
            <Cards
              heading="Doubts"
              definition="Get your questions answered."
              buttonHref="/dashboard/doubts"
              color="blue"
            ></Cards>
            <Cards
              heading="Discussion"
              definition="Connect with peers."
              buttonHref="/dashboard/discussion"
              color="purple"
            ></Cards>
          </div>
        </div>
      </div>
    </main>
  );
};

export default dashboard;
