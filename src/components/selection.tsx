"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CourseSelection = ({ data }) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  const courses = data.map((item) => Object.keys(item)[0]);
  const years = selectedCourse
    ? data.find((item) => Object.keys(item)[0] === selectedCourse)[
        selectedCourse
      ].yearOptions
    : [];
  const branches = selectedCourse
    ? Object.keys(
        data.find((item) => Object.keys(item)[0] === selectedCourse)[
          selectedCourse
        ].branches
      )
    : [];

  const router = useRouter();
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label
          htmlFor="course"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Course:
        </label>
        <select
          id="course"
          value={selectedCourse}
          onChange={(e) => {
            setSelectedCourse(e.target.value);
            setSelectedYear("");
            setSelectedBranch("");
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      {selectedCourse && (
        <>
          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Year:
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="branch"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Branch:
            </label>
            <select
              id="branch"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Branch</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            router.back();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CourseSelection;
