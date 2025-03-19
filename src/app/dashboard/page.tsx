import Link from "next/link";
import React from "react";
import Card from "@/components/Cards";
import Login from "@/components/login";
const dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-indigo-600 p-8">
      <div className="max-w-6xl mx-auto mt-2 bg-gradient-to-r from-violet-400 to-blue-500 rounded-2xl shadow-lg p-8 space-y-8">
        <div className="flex flex-col">
          <h1 className="text-4xl text-gray-800 font-extrabold mb-4 sm:mb-0">
            Dashboard :
          </h1>
        </div>
        {/* dashboard div */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* task Card */}
          <Card
            symbol="📝"
            bg="bg-blue-200"
            bgHover="bg-blue-500"
            href="/dashboard/notes"
            title="Notes"
            description="Notes of subjects ranked by users!!!"
          />
          <Card
            symbol="📊"
            bg="bg-green-300"
            bgHover="bg-green-500"
            href="/dashboard/solutions"
            title="Solutions"
            description="Get solutions of assignments and tutorials!!!"
          />
          <Card
            symbol="⚙️"
            bg="bg-yellow-200"
            bgHover="bg-yellow-500"
            href="/dashboard/doubts"
            title="Doubts"
            description="Get your doubts solved by your fellow students!!!"
          />
          <Card
            symbol="👥"
            bg="bg-red-300"
            bgHover="bg-red-500"
            href="/dashboard/discussion"
            title="Discussion"
            description="Talk to your fellow students and Socialise!!!"
          />
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default dashboard;
