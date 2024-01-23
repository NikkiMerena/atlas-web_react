# Atlas Web React: Inline Styling and Responsive Design

This project focuses on implementing inline styling, responsive design, and animations in a React application using Aphrodite, a CSS-in-JS tool. The tasks include restructuring existing components to utilize inline styling and media queries for responsive layouts, along with adding subtle animations to enhance the user experience.

## Learning Objectives
By the end of this project, you should be able to:
- Understand the differences between using a CSS file and inline styling.
- Utilize Aphrodite for CSS-in-JS styling in React.
- Apply conditional styles within JavaScript.
- Implement responsive design for different screen sizes.
- Create animations within the application.

## Requirements
- Ubuntu 18.04 LTS, Node 12.x.x, npm 6.x.x.
- Editors: vi, vim, emacs, Visual Studio Code.
- All files must end with a new line.
- A mandatory `README.md` file at the root of the project.

## Installation
1. Clone the repository: `git clone [repository-link]`
2. Navigate to the project directory: `cd atlas-web_react`
3. Install dependencies: `npm install`

## Tasks
### Task 0: Inline Styling
- Modify `CourseListRow.js` for inline styling of rows.
- Ensure tests in `CourseListRow.test.js` pass.

### Task 1: Install and Implement Aphrodite
- Install Aphrodite: `npm install --save aphrodite`
- Update components (`App.js`, `BodySectionWithMarginBottom.js`, etc.) to use Aphrodite.
- Ensure UI remains consistent and tests pass.

### Task 2: Conditionally Applying Style
- Utilize Aphrodite in `NotificationItem.js` and `CourseListRow.js`.
- Apply conditional styles and remove old CSS files.
- Validate with existing tests.

### Task 3: Responsive Design
- Implement media queries in `Login.js`, `Notifications.js`, and `NotificationItem.js`.
- Focus on layout for large screens and screens under 900px width.

### Task 4: Animation
- Create opacity change and bouncing animations in `Notifications.js`.
- Apply animations on hover with specified duration and repetition.

## Running Tests
- Run `npm test` to execute the test suites.

## Contributing
- Fork the repository.
- Create a new branch for each feature or improvement.
- Submit a pull request.

## Resources
- [Aphrodite Documentation](https://github.com/Khan/aphrodite)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

# Task 1: Controlled Components and State Callback in Login Component

## Overview
This task focuses on enhancing the `Login` component by implementing controlled components, managing state, and handling form submissions without page reloads.

### Objectives
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

