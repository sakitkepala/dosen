function App() {
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
          {[...new Array(10)].map((_, i) => (
            <tr key={i}>
              <td>
                <div>
                  <div>avatar</div>
                  <div>Mahasiswa {i + 1}</div>
                </div>
              </td>
              <td>
                <Select />
              </td>
              <td>
                <Select />
              </td>
              <td>
                <Select />
              </td>
              <td>
                <Select />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Select({
  name,
  value = "",
  onChange,
}: {
  name: string;
  value?: string;
  onChange?: () => void;
}) {
  return (
    <select name={name} value={value} onChange={onChange}>
      {[...new Array(10)].map((_, i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
  );
}

export default App;
