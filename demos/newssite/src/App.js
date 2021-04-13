import React from "react";

import ApiKeyContext from "./ApiKeyContext";
import { useLocalStorage } from "./customHooks";

import Login from "./components/Login";
import HomePage from "./components/HomePage";

// const apiKey = null;

export default function App() {
  const [apiKey, setApiKey] = useLocalStorage("apiKey", null);

  return (
    <ApiKeyContext.Provider value={[apiKey, setApiKey]}>
      {!apiKey ? <Login setApiKey={setApiKey} /> : <HomePage />}
    </ApiKeyContext.Provider>
  );
}
