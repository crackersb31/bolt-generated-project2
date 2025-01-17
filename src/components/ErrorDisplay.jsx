export default function ErrorDisplay({ error }) {
  return (
    <div className="error">
      <h3>Erreur</h3>
      <pre>{error.message}</pre>
      <style jsx>{`
        .error {
          padding: 1rem;
          border: 1px solid var(--error-color);
          border-radius: 4px;
          background-color: #fee2e2;
          color: var(--error-color);
          margin: 1rem 0;
        }

        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </div>
  );
}
