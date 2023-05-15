export type ResultModalProps = {
  json: string;
  onBack: () => void;
};

function ScreenResult({ json, onBack }: ResultModalProps) {
  return (
    <div className="layout">
      <div>
        <button className="submit-button" onClick={onBack}>
          Kembali
        </button>
      </div>

      <div>
        <h2 className="heading-output">Output:</h2>
        <pre className="result-code">{json}</pre>
      </div>
    </div>
  );
}

export { ScreenResult };
