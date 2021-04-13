import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import ApiKeyContext from "./ApiKeyContext";
import { useLocalStorage } from "./customHooks";

import Login from "./components/Login";
import HomePage from "./components/HomePage";

// const apiKey = null;

export default function App() {
  const [apiKey, setApiKey] = useLocalStorage("apiKey", null);

  return (
    <ApiKeyContext.Provider value={[apiKey, setApiKey]}>
      <BrowserRouter>
        <Route path="/login" render={() => <Login setApiKey={setApiKey} />} />
        <Route path="/" render={() => <HomePage />} />
        {apiKey && (
          <Route path="/">
            {!apiKey && <Redirect to="/login" />}
            <Redirect to="/" />
          </Route>
        )}
      </BrowserRouter>
    </ApiKeyContext.Provider>
  );
}
