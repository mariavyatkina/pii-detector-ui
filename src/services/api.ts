export interface PiiEntity {
  type: string;
  value: string;
  startIndex: number;
  endIndex: number;
}

export interface DetectionResult {
  originalText: string;
  redactedText: string;
  entities: PiiEntity[];
}

export async function analyzeText(
  text: string,
  redact: boolean
): Promise<DetectionResult> {
  const API_BASE = import.meta.env.VITE_API_URL;
  const response = await fetch(`${API_BASE}/api/pii/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, redact }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze text");
  }

  return response.json();
}