import type { Student } from "../types";

function makeResult(students: Student[]) {
  type GradeEntry = [string, number];
  type AspectEntry = [string, GradeEntry[]];

  const aspectEntries = students
    .reduce<AspectEntry[]>((aspects, student, studentIndex) => {
      student.grades.forEach((grade, gradeIndex) => {
        const defaultGradeEntry: [string, GradeEntry[]] = [
          "aspek_penilaian_" + (gradeIndex + 1),
          [],
        ];
        aspects[gradeIndex] = !aspects[gradeIndex] ? defaultGradeEntry : aspects[gradeIndex];
        aspects[gradeIndex][1][studentIndex] = ["mahasiswa_" + (studentIndex + 1), grade];
      });
      return aspects;
    }, [])
    .map((asp) => [asp[0], Object.fromEntries(asp[1])]);

  return Object.fromEntries(aspectEntries);
}

export { makeResult };
