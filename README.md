# The Shallot in React [![Build Status](https://travis-ci.org/jebax/TheShallotReact.svg?branch=master)](https://travis-ci.org/jebax/TheShallotReact)
*The Shallot* is a single-page news summary app, using the [Guardian API](https://open-platform.theguardian.com/documentation/) to fetch tech news headlines and thumbnails. Clicking on a headline will display a short summary of the article (using the [Aylien Summarization API](https://aylien.com/text-api/summarization/)), and then clicking on the headline again will link the user to the original article.

This is a React re-imagining of [this](https://github.com/jebax/TheShallotSummary) pure JS project. After learning how amazing React is for creating single-page apps, I decided I had to give this a go!

## My approach
I used a test-driven approach for this project, with Jest, Enzyme, and Cypress as my testing technologies. This is also my first project using React best practices such as functional components and PropTypes (as of Dec 2018), after diving head-first into the framework in previous projects.

## Installation
- Clone the repository
- `npm install` inside the project directory
- `npm start` to run a development build on `http://localhost:3000/`
- `npm test` to run unit tests (Jest / Enzyme)
- `npx cypress open` to run integration tests (Cypress)

This project requires a [Guardian API key](https://open-platform.theguardian.com/access/), an [Aylien Summarization API key](https://aylien.com/text-api/summarization/) (and the related app ID), and local environment files for the React app and the Cypress tests.

To set up local environment files, add the following in the project's root directory:

#### `.env.development.local`, `.env.test.local`, `.env.production.local`

```
REACT_APP_GUARDIAN_KEY=yourkeygoeshere
REACT_APP_AYLIEN_KEY=yourkeygoeshere
REACT_APP_AYLIEN_ID=yourappidgoeshere
```

#### `cypress.env.json`

```
{
  "guardianUrl": "http://content.guardianapis.com/search?section=technology&show-fields=thumbnail&order-by=newest&page-size=10&api-key=yourkeygoeshere",
  "aylienUrl": "https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=http://localhost:3000/TestUrl"
}
```

## Future plans
I plan on expanding the app to use multiple different news APIs, allowing the user to switch between sources. I also plan on allowing the user to decide on the category of news and number of results to display.
