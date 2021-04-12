import React from "react";

// NewsStoriesList is getting stories from props
export default function NewsStoriesList({ stories }) {

  if(!stories) {
    return 'Loading stories'
  }
  // loop through the stories and render image,
  // title, author, date, short blurb and a button
  // to the full article
  return stories.map((story) => {
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
          <a target="_blank" rel="noopener noreferrer" href={story.url}>
            <button className="button is-primary has-text-weight-bold">
              Read the whole story
            </button>
          </a>
        </div>
      </div>
    );
  });
}
