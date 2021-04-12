import React, { useEffect } from "react";
import { fetchHeadlines } from "../api";
import { useLocalStorage, useApiKey } from "../customHooks";
import NewsStoriesList from "./NewsStoriesList";

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
      <NewsStoriesList stories={stories} />
    </main>
  );
}
