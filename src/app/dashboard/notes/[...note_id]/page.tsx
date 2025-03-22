import React from "react";
const note = {
  btech: {
    cse: {
      "1st year": {
        "1st sem": {
          maths: "maths notes",
          physics: "physics notes",
          chemistry: "chemistry notes",
        },
        "2nd sem": {
          maths: "maths notes",
          physics: "physics notes",
          chemistry: "chemistry notes",
        },
      },
      "2nd year": {
        "1st sem": {
          maths: "maths notes",
          physics: "physics notes",
          chemistry: "chemistry notes",
        },
        "2nd sem": {
          maths: "maths notes",
          physics: "physics notes",
          chemistry: "chemistry notes",
        },
      },
      "3rd year": {
        "1st sem": {
          maths: "maths notes",
          physics: "physics notes",
          chemistry: "chemistry notes",
        },
        "2nd sem": {
          maths: "maths notes",
          physics: "physics notes",
          chemistry: "chemistry notes",
        },
      },
      "4th year": {
        "1st sem": {
          maths: "maths notes",
          physics: "physics notes",
          chemistry: "chemistry notes",
        },
        "2nd sem": {
          maths: "maths notes",
          physics: "physics notes",
          chemistry: "chemistry notes",
        },
      },
    },
  },
};

const notes = async ({ params }: { params: { note_id: string[] } }) => {
  const { note_id } = await params;
  const [course, branch, sem, subject] = note_id;
  console.log(course, branch, sem, subject);
  return (
    <div>
      <h1>Notes</h1>
      <p>Manage your notes and stay organized</p>
    </div>
  );
};

export default notes;
