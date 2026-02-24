import type { DetectionResult } from "../services/api";

interface Props {
  result: DetectionResult;
}

export default function ResultsPanel({ result }: Props) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Processed Text</h3>
      <pre style={styles.output}>
        {result.redactedText}
      </pre>

      <h3>Detected Entities</h3>
      {result.entities.length === 0 ? (
        <p>No PII detected</p>
      ) : (
        <ul>
          {result.entities.map((entity, index) => (
            <li key={index}>
              <strong>{entity.type}</strong>: {entity.value} (
              {entity.startIndex}-{entity.endIndex})
            </li>
          ))}
        </ul>
      )}

      <h3>Raw JSON</h3>
      <pre style={styles.json}>
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}

const styles = {
  output: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderRadius: "6px",
    color: '#1e1e1e'
  },
  json: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: "10px",
    borderRadius: "6px",
    overflowX: "auto" as const,
  },
};