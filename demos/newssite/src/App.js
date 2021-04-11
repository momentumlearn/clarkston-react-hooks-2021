import React from "react";
import ApiKeyContext from "./ApiKeyContext";
import "tachyons/css/tachyons.css";

// const apiKey = 'f9437cfaba50415e8d841cbbe29e184f';
const apiKey = null;

export default function App() {
  if (apiKey === null) {
    return (
      <div className="helvetica">
        <p>
          This site requires a News API token to work. If you do not have one,
          you can get a free token at{" "}
          <a href="https://newsapi.org/">News API</a>.
        </p>
      </div>
    );
  }

  return (
    <ApiKeyContext.Provider value={apiKey}>
      <h1>Hello World!</h1>
    </ApiKeyContext.Provider>
  );
}
