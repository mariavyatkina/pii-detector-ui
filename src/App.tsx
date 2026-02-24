import Analyzer from "./components/Analyzer";

function App() {
  return (
    <div style={styles.container}>
      <h1>PII Detector</h1>
      <p style={styles.subtitle}>
        Stateless, privacy-focused detection. No data is stored.
      </p>
      <Analyzer />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    fontFamily: "sans-serif",
    padding: "60px"
  },
  subtitle: {
    color: "#666",
  },
};

export default App;