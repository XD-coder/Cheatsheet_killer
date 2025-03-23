import Link from "next/link";
import React from "react";

const dashboard = () => {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-row items-center justify-center p-8 ">
        <div className="text-center flex flex-col items-center justify-center">
          <div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Welcome to the Study Hub
              </h1>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Manage your tasks, track analytics, and stay organized with our
              powerful dashboard.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-row items-center justify-center p-6">
              <div className="text-center">
                <Link
                  className="inline-flex items-center justify-center bg-blue-500 text-white text-xl px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hower:shadow-xl"
                  href="/dashboard"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default dashboard;
