import React, { useEffect } from "react";
import { fetchHeadlines } from "../api";
import { useLocalStorage, useApiKey } from "../customHooks";

export default function HomePage() {
  // use local storage to save our stories so we don't make multiple requests
  const [stories, setStories] = useLocalStorage("newsHeadlines", null);
  //use custom hook to pass grab api key to request news headlines
  const [apiKey, setApiKey] = useApiKey();

  console.log("apiKey from props", apiKey);

  useEffect(() => {
    // only make request to API if there are no stories in local storage
    if (stories === null) {
      fetchHeadlines(apiKey)
        .then((results) => {
          if (stories === null) {
            setStories(results.articles);
          }
        })
        .catch((err) => {
          // set the api key to null if there is an error
          if (err.reponse && err.reponse.status === 401) {
            setApiKey(null);
          }
        });
    }
  });

  console.log("cached stories", stories);

  return (
    <main className="container">
      {stories.map((story) => {
        return (
          <div id={story.id} className="is-flex is-align-items-start mb-6">
            <img
              className="image is-128x128 mt-2 mr-4"
              alt={story.id}
              src={story.urlToImage}
            />
            <div>
              <h1 className="title mb-1">{story.title}</h1>
              <p className="is-size-6 mb-3">
                {story.author} {story.publishedAt}
              </p>
              <p>{story.description}</p>
              <button className="button is-primary has-text-weight-bold">
                See more
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
