// task_1/js/dashboard_main.js
import $ from 'jquery';
import { debounce } from 'lodash';

// Create new elements and append to body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="click-me">Click here to get started</button');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton</p>');

// Function to update count and modify text content
function updateCounter() {
  const count = $('#count');
  const clicks = parseInt(count.text()) || 0;
  count.text(`${clicks + 1} clicks on the button`);
}

// Select button and bind click event w/ debounced updateCOunter to stop spammy behavior
$('#click-me').on('click', debounce(updateCounter, 500));
