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

