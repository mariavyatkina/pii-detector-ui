import { useState } from "react";
import { analyzeText} from "../services/api";
import type { DetectionResult } from "../services/api";
import ResultsPanel from "./ResultsPanel";

export default function Analyzer() {
  const [text, setText] = useState("");
  const [redact, setRedact] = useState(true);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await analyzeText(text, redact);
      setResult(data);
    } catch (err) {
      setError("Unable to analyze text");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        rows={6}
        style={{ width: "100%", marginBottom: "10px" }}
        placeholder="Paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={redact}
            onChange={() => setRedact(!redact)}
          />{" "}
          Redact detected PII
        </label>
      </div>

      <button onClick={handleAnalyze} disabled={loading || !text}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && <ResultsPanel result={result} />}
    </div>
  );
}