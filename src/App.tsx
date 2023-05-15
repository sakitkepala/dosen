import * as React from "react";
import type { Student } from "./types";

import { ScreenInput } from "./components/input-screen";
import { ScreenResult } from "./components/result-screen";

import { makeStudentData } from "./utils/make-student-data";
import { makeResult } from "./utils/make-result";

function App() {
  const [students, setStudents] = React.useState<Student[]>(makeStudentData);
  const [resultIsOpen, setResultOpen] = React.useState(false);
  const resultData = makeResult(students);

  const screen = !resultIsOpen ? (
    <ScreenInput
      value={students}
      onSubmit={(students) => {
        setStudents(students);
        setResultOpen(true);
        window.scrollTo(0, 0);
      }}
    />
  ) : (
    <ScreenResult json={JSON.stringify(resultData, null, 2)} onBack={() => setResultOpen(false)} />
  );

  return (
    <div className="main layout">
      <h1 className="heading">Aplikasi Penilaian Mahasiswa</h1>
      {screen}
    </div>
  );
}

export default App;
