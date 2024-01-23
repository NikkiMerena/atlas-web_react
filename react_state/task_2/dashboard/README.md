# Task 0: Adding Local State for Notifications

## Overview
This task focuses on integrating a local state into the React application for managing a notifications panel. The state will control the visibility of the notifications panel.

## Modifications

### App Component
- A local state `displayDrawer` has been added to manage the notifications panel visibility.
- Two functions, `handleDisplayDrawer` and `handleHideDrawer`, are implemented to toggle the `displayDrawer` state.
- The `Notifications` component is updated to receive the new state and functions as props.

### Testing
- Tests are added to the `App` component suite to check the initial state and the state after calling the toggle functions.
- The `Notifications` component's test suite is updated to verify the invocation of event handlers.

## Running the Project
To run the project, execute:
```bash
npm start

 Task 1: Controlled Components and State Callback in Login Component

 Overview
This task focuses on enhancing the `Login` component by implementing controlled components, managing state, and handling form submissions without page reloads.

Objectives
- Manage local state for login status, email, and password fields.
- Create a form that updates the state and handles submissions.
- Enable or disable the submit button based on form input.
- Add tests to ensure the form behaves correctly.

## Implementation

### State Management
- Initialize local state with `isLoggedIn`, `email`, `password`, and `enableSubmit`.
- `isLoggedIn` should be `false` by default.
- `email` and `password` should be empty strings (`""`) by default.
- `enableSubmit` should be `false` to start with.

### Controlled Inputs
- Convert input elements to controlled components.
- Update the value of each input with state.
- Implement `handleChangeEmail` and `handleChangePassword` to update the state as the user types.

### Form Handling
- Replace the "OK" button with an input of type `submit`.
- Bind `handleLoginSubmit` to the form's `onSubmit` event to set `isLoggedIn` to `true`.
- Prevent the default form submission to avoid page reload.

### Submit Button Logic
- The submit button should be enabled only if both email and password fields are not empty.
- Implement logic within the `handleChangeEmail` and `handleChangePassword` functions to enable the submit button when both fields are filled.

### Testing
- Write a test to check if the submit button is disabled by default.
- Write a test to check if the submit button is enabled when both email and password fields have values.

## Tips
- Use Enzyme's `simulate` method to emulate user input for testing.
- Use spies to check if functions are called correctly when expected.

## Requirements
- All state values must be set in the constructor.
- Functions passed to children must be bound for performance.
- The page must not reload upon form submission.
- Ensure no lint errors in the console.

## Repository Information
- **GitHub repository**: atlas-web_react
- **Directory**: react_state
- **Files**:
  - `task_1/dashboard/src/Login/Login.js`
  - `task_1/dashboard/src/Login/Login.test.js`

