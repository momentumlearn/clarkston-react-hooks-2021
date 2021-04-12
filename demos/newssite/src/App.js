import React, {useState} from "react";

import HomePage from './components/HomePage'

const apiKey = null;

export default function App() {
  const [tokenInput, setTokenInput] = useState('')
  const [apiKey, setApiKey] = useState('')

  if (!apiKey) {
    return (
      <main className="container columns">
        <section className="section column is-5 is-offset-6">
          <h1 className="title is-1 has-text-weight-bold has-text-primary">
            News Scrapper App
          </h1>
          <div className="card column">
            <div className="card-content">
              <div className="content">
                <p>
                  This site requires a News API token to work. If you do not
                  have one, you can get a free token at{" "}
                  <a href="https://newsapi.org/">News API</a>.
                </p>
              </div>
              <label className="label">API Token</label>
              <input
                className="input mb-2"
                type="password"
                placeholder="Enter API Token"
                value={tokenInput}
                onChange={(event) => setTokenInput(event.target.value)}
              />
              <button 
              className="button is-primary has-text-weight-bold"
              onClick={() => setApiKey(tokenInput)}
              >Store API Token</button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
      <HomePage apiKey={apiKey} />
  );
}
