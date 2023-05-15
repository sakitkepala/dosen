export type SelectGradeProps = {
  name: string;
  value: string;
  onChange: (value: number) => void;
};

function SelectGrade({ name, value = "", onChange }: SelectGradeProps) {
  return (
    <select
      className="select"
      name={name}
      value={value || ""}
      onChange={(ev) => {
        const value = Number(ev.target.value);
        onChange(isNaN(value) ? 0 : value);
      }}
    >
      <option>&ndash;</option>
      {[...new Array(10)].map((_, i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </select>
  );
}

export { SelectGrade };
