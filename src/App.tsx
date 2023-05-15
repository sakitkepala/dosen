import * as React from "react";
import type { Student } from "./types";
import { SelectGrade } from "./components/select-grade";
import { makeStudentData } from "./utils/make-student-data";
import { makeResult } from "./utils/make-result";

function App() {
  const [students, setStudents] = React.useState<Student[]>(makeStudentData);
  const resultData = React.useMemo(() => makeResult(students), [students]);

  const setStudentGrade = (studentId: string, aspectIndex: number, grade: number) => {
    setStudents((students) => {
      return students.map((s) => {
        if (s.id !== studentId) return s;
        return { ...s, grades: s.grades.map((g, i) => (i === aspectIndex ? grade : g)) };
      });
    });
  };

  return (
    <div>
      <h2>Aplikasi Penilaian Mahasiswa</h2>

      <table>
        <thead>
          <tr>
            <td></td>
            <td>Aspek Penilaian 1</td>
            <td>Aspek Penilaian 2</td>
            <td>Aspek Penilaian 3</td>
            <td>Aspek Penilaian 4</td>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <div>
                  <div>avatar</div>
                  <div>{student.name}</div>
                </div>
              </td>
              <td>
                <SelectGrade
                  name="grade-aspect-1"
                  value={student.grades[0]?.toString() || ""}
                  onChange={(value) => setStudentGrade(student.id, 0, Number(value))}
                />
              </td>
              <td>
                <SelectGrade
                  name="grade-aspect-2"
                  value={student.grades[1]?.toString() || ""}
                  onChange={(value) => setStudentGrade(student.id, 1, Number(value))}
                />
              </td>
              <td>
                <SelectGrade
                  name="grade-aspect-3"
                  value={student.grades[2]?.toString() || ""}
                  onChange={(value) => setStudentGrade(student.id, 2, Number(value))}
                />
              </td>
              <td>
                <SelectGrade
                  name="grade-aspect-4"
                  value={student.grades[3]?.toString() || ""}
                  onChange={(value) => setStudentGrade(student.id, 3, Number(value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button>Simpan</button>
      </div>

      <pre>{JSON.stringify(resultData, null, 2)}</pre>
    </div>
  );
}

export default App;
