import type { Student } from "../types";

function makeStudentData() {
  return [...new Array(10)].map<Student>((_, i) => ({
    id: (i + 1).toString(),
    name: "Mahasiswa " + (i + 1),
    grades: [0, 0, 0, 0],
  }));
}

export { makeStudentData };
