import * as React from "react";
import type { Student } from "../types";

import { SelectGrade } from "./select-grade";

export type ScreenInputProps = {
  value: Student[];
  onSubmit: (students: Student[]) => void;
};

function ScreenInput({ value, onSubmit }: ScreenInputProps) {
  const [students, setStudents] = React.useState<Student[]>(value);

  const setStudentGrade = (studentId: string, aspectIndex: number, grade: number) => {
    setStudents((students) =>
      students.map((s) => {
        if (s.id !== studentId) return s;
        return {
          ...s,
          grades: s.grades.map((g, i) => (i === aspectIndex ? grade : g)),
        };
      })
    );
  };

  return (
    <div className="layout">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="row">
              <td>
                <div className="student-info">
                  <div>
                    <img
                      className="avatar"
                      src="/student.jpg"
                      alt="Student Avatar"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div>{student.name}</div>
                </div>
              </td>
              <td>
                <SelectGrade
                  ref={(node) => console.log(node)}
                  name={"student-" + (index + 1) + "-grade-aspect-1"}
                  value={student.grades[0]?.toString() || ""}
                  onChange={(value) => setStudentGrade(student.id, 0, Number(value))}
                />
              </td>
              <td>
                <SelectGrade
                  name={"student-" + (index + 1) + "-grade-aspect-2"}
                  value={student.grades[1]?.toString() || ""}
                  onChange={(value) => setStudentGrade(student.id, 1, Number(value))}
                />
              </td>
              <td>
                <SelectGrade
                  name={"student-" + (index + 1) + "-grade-aspect-3"}
                  value={student.grades[2]?.toString() || ""}
                  onChange={(value) => setStudentGrade(student.id, 2, Number(value))}
                />
              </td>
              <td>
                <SelectGrade
                  name={"student-" + (index + 1) + "-grade-aspect-4"}
                  value={student.grades[3]?.toString() || ""}
                  onChange={(value) => setStudentGrade(student.id, 3, Number(value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="action">
        <button className="submit-button" onClick={() => onSubmit(students)}>
          Simpan
        </button>
      </div>
    </div>
  );
}

export { ScreenInput };
