import React from "react";
import ApiKeyContext from "./ApiKeyContext";

// const apiKey = 'f9437cfaba50415e8d841cbbe29e184f';
const apiKey = null;

export default function App() {
  if (apiKey === null) {
    return (
      <main className="container columns">
				<section className="section column is-5 is-offset-6">
					<h1 className="is-size-1 has-text-weight-bold has-text-primary">News Scrapper App</h1>
					<div className="card column">
						<div className="card-content">
							<div className="content">
								<p>
									This site requires a News API token to work. If you do not have
									one, you can get a free token at{" "}
									<a href="https://newsapi.org/">News API</a>.
								</p>
							</div>
							<label class="label">API Key</label>
							<input class="input" placeholder="Enter API Key" value="" />
						</div>
					</div>
				</section>
      </main>
    );
  }

  return (
    <ApiKeyContext.Provider value={apiKey}>
      <h1>Hello World!</h1>
    </ApiKeyContext.Provider>
  );
}
