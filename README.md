# frontend-management-exercise
Improve the logical thinking and coding skills with frontend tools.

## Project Setup

This is a React application built with:
- **React** - UI library
- **Redux** (without toolkit) - State management
- **Redux Saga** - Side effects management
- **TailwindCSS** - Styling
- **Webpack** - Module bundler

## Installation

```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm start
```

This will start the development server at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── api/                    # API layer with mocked responses
│   └── userApi.js         # User API with mocked data
├── components/            # React components
│   └── HomePage.js        # Main homepage component
├── redux/                 # Redux setup
│   ├── actions/          # Action creators and types
│   │   └── userActions.js
│   ├── reducers/         # Reducers
│   │   ├── index.js      # Root reducer
│   │   └── userReducer.js
│   ├── sagas/            # Saga middleware
│   │   ├── index.js      # Root saga
│   │   └── userSaga.js
│   └── store.js          # Redux store configuration
├── App.js                # Root App component
├── index.js              # Entry point
└── index.css             # Global styles with TailwindCSS
```

## Features

- ✅ Basic React setup with functional components
- ✅ Redux state management without toolkit
- ✅ Redux Saga for async operations
- ✅ TailwindCSS for styling
- ✅ Mocked API with simulated network delay
- ✅ Complete Redux flow (actions → reducer → saga → api)
- ✅ Homepage displaying user list from mocked API
