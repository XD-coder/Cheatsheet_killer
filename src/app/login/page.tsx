import React from "react";
import { courseOptions, yearOptions } from "@/configs/login_config.json"; // Ensure this path is correct and the module exists

const loginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="course"
          >
            Course
          </label>
          <select
            id="course"
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a course</option>
            {courseOptions.map((course: { value: string; label: string }) => (
              <option key={course.value} value={course.value}>
                {course.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year"
          >
            Year
          </label>
          <select
            id="year"
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a year</option>
            {yearOptions.map((year: { value: string; label: string }) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
