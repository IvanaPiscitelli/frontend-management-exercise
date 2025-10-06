# Redux Flow Documentation

This document explains the complete Redux flow implemented in this project using Redux Saga for handling asynchronous operations.

## Architecture Overview

```
Component → Action → Saga → API → Saga → Reducer → Store → Component
```

## Flow Details

### 1. Component Dispatches Action
**File**: `src/components/HomePage.js`

```javascript
useEffect(() => {
  dispatch(fetchUsersRequest());
}, [dispatch]);
```

The component dispatches the `fetchUsersRequest` action on mount.

### 2. Action Creator
**File**: `src/redux/actions/userActions.js`

```javascript
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});
```

Creates an action object with type `FETCH_USERS_REQUEST`.

### 3. Saga Intercepts Action
**File**: `src/redux/sagas/userSaga.js`

```javascript
function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}
```

The saga:
- Intercepts the `FETCH_USERS_REQUEST` action
- Calls the API using `call` effect
- Dispatches success or failure action using `put` effect

### 4. API Call (Mocked)
**File**: `src/api/userApi.js`

```javascript
export const fetchUsersApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
        ],
      });
    }, 1000);
  });
};
```

Returns mocked data after 1 second delay to simulate network latency.

### 5. Reducer Updates State
**File**: `src/redux/reducers/userReducer.js`

```javascript
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
```

The reducer handles three action types:
- `REQUEST`: Sets loading to true
- `SUCCESS`: Stores users data
- `FAILURE`: Stores error message

### 6. Component Re-renders
**File**: `src/components/HomePage.js`

```javascript
const { users, loading, error } = useSelector((state) => state.users);
```

The component subscribes to state changes via `useSelector` and re-renders when the state updates.

## State Structure

```javascript
{
  users: {
    users: [],      // Array of user objects
    loading: false, // Loading state
    error: null     // Error message
  }
}
```

## Adding New Features

To add a new feature following the same pattern:

1. Create action types and creators in `src/redux/actions/`
2. Create reducer in `src/redux/reducers/`
3. Create saga in `src/redux/sagas/`
4. Create API function in `src/api/`
5. Add reducer to root reducer in `src/redux/reducers/index.js`
6. Add saga to root saga in `src/redux/sagas/index.js`
7. Use actions and selectors in components
