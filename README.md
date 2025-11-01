# Anime Search React App

This mini-project is my work solution to build the "Anime Search" app from the ground up.

The following are the steps used to setup the working development project:

### React + Vite Setup
First and foremost, I ran the following:
```
npm create vite@latest yoprint-react-app -- --template react
```

And the following are the settings chosen to setup:
```
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
```

---

# Bonus Implementation

### 1. Chakra UI

Chakra UI is a component system for building products faster as it suggests. It has lots of useful UI components readily usable and easily customizable.

For this React + Vite setup, I refer to the following to get Chakra UI in place [here.](https://www.chakra-ui.com/docs/get-started/frameworks/vite)

### 2. Axios

Axios is a promise-based HTTP Client for `node.js` and the browser. It is a package implementation which can be used and run both on server and client or better known as isomorphic. It has many notable features known such as:
- Intercept request and response
- Transform request and response data
- Cancel requests
- Timeouts
- Query parameters serialization with support for nested entries
- Automatic request body serialization to:
    - JSON (application/json)
    - Multipart / FormData (multipart/form-data)
    - URL encoded form (application/x-www-form-urlencoded)
- Posting HTML forms as JSON
- Automatic JSON data handling in response

It is an easier way to handle request and response from the API and especially supports Promise API.

The Axios documentation page is available [here](https://axios-http.com/docs/intro) for more information.