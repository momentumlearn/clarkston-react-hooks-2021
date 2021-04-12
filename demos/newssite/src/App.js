import React from "react";

const apiKey = null;

export default function App() {

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
              <label class="label">API Token</label>
              <input
                class="input mb-2"
                placeholder="Enter API Token"
                value={null}
                onChange={null}
              />
              <button className="button is-primary has-text-weight-bold">Store API Token</button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
      <h1>Hello World!</h1>
  );
}
