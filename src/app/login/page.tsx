import React from "react";
import CourseSelection from "@/components/selection"; // Ensure this path is correct and the module exists

import { courseOptions } from "@/configs.json"; // Ensure this path is correct and the module exists

const loginPage = () => {
  return (
    <div>
      <CourseSelection data={courseOptions} />
    </div>
  );
};

export default loginPage;
