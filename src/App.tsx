import * as React from "react";
import type { Student } from "./types";
import { SelectGrade } from "./components/select-grade";
import { makeStudentData } from "./utils/make-student-data";
import { makeResult } from "./utils/make-result";

function App() {
  const [students, setStudents] = React.useState<Student[]>(makeStudentData);
  const resultData = React.useMemo(() => makeResult(students), [students]);

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
      <h1 className="heading">Aplikasi Penilaian Mahasiswa</h1>

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
          {students.map((student) => (
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

      <div className="action">
        <button className="submit-button">Simpan</button>
      </div>

      <pre>{JSON.stringify(resultData, null, 2)}</pre>
    </div>
  );
}

export default App;
