## How to run this app

1. clone the repo
2. run npm install
3. in `.env.dev`  and `.env.prod` replace `YOUR_GITHUB_TOKEN` with your github token
4. run npm start
5. open http://localhost:3000 to view it in the browser.
6. test out the 3 routes:
   a.) `/`
   b.) `/{repo_owner}/{repo_name}`
   c.) `/does/not/exist`

## How to run the test suite

`npm test` launches the test runner in the interactive watch mode.

## Technologies Used

- React
- Typescript
- React Router
- React Context API
- React Testing Library
- Octokit
- Webpack
- Babel
- Jest
- prettier: [https://prettier.io](Prettier) for code formatting
- moment.js: [https://momentjs.com](moment.js) for formatting datetime object
- classnames: [https://www.npmjs.com/package/classnames](classnames)
- styled-components: [https://styled-components.com](styled-components)
- msw: [https://mswjs.io](msw) for mocking API calls in testing

## Testing (Unit and Integration)

#### Currently at 91.9% coverage:

<img width="682" alt="test_coverage" src="https://user-images.githubusercontent.com/13912119/198897138-bf16d9f9-c2b9-452e-b2b0-2cd8bc137a81.png">

## Screenshots of Features and Functionality

#### Home Route - Desktop Button Disabled

<img width="1418" alt="home_desktop_3" src="https://user-images.githubusercontent.com/13912119/198896378-c9383c8d-cdae-424c-b84e-1b4229d0407c.png">

#### Home Route - Desktop Button Active (based on input validation)

<img width="1417" alt="home_desktop_button_active" src="https://user-images.githubusercontent.com/13912119/198896287-df8d417c-cfb6-4f1c-8143-6fe57a8060e4.png">

#### Home Route - Mobile

<img width="362" alt="home_mobile" src="https://user-images.githubusercontent.com/13912119/198896279-c974f59f-5a7e-4041-a7b0-d19b3f9bb0f2.png">

#### Commits Route - Desktop - Loading State

https://user-images.githubusercontent.com/13912119/198896296-51b13645-aa2e-4453-b727-182a26e8c47d.mov

#### Commits Route - Desktop - Data Rendered

<img width="1416" alt="commits_route_desktop" src="https://user-images.githubusercontent.com/13912119/198896304-1213f107-9599-4a71-80a4-4520794040ca.png">

#### Commits Route - Mobile

<img width="377" alt="commits_route_mobile" src="https://user-images.githubusercontent.com/13912119/198896299-439450dc-59b2-4086-bcb2-e0214a46cdd2.png">

#### Not Found Route - Desktop

<img width="1420" alt="not_found_desktop" src="https://user-images.githubusercontent.com/13912119/198896272-ac70d122-d8b0-4c2b-a32e-7603c17fd015.png">

#### Not Found Route - - Mobile

<img width="419" alt="page_not_found_mobile" src="https://user-images.githubusercontent.com/13912119/198896276-f986c79e-b8ba-49f3-bcdd-217bd79b4fcb.png">

## Future Functionality

V2:

- Add caching (if desired? i.e. If I navigate away from the `/{owner}/{repo}` route and navigate back again, is it ok to pull from data already in the store? or would we want to ensure latest commits displayed?)
- Add more base components (i.e. Text, Header, etc.) and break into separate design system library or module
- Add key commands / tabbing through the list of commits
- Add Storybooks
- Work with designer to fully flesh out mobile design
- Add E2E testing (i.e. Cypress)
- Add analytics events (Google, Bugsnag, etc.)
