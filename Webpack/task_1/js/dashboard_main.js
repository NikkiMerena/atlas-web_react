// task_1/js/dashboard_main.js
import $ from 'jquery';
import { debounce } from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="click-me">Click here to get started</button');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyrught - Holberton</p>');

function updateCounter() {
  const count = $('#count');
  const clicks = parseInt(count.text()) || 0;
  count.text(`${clicks + 1} clicks on the button`);
}

$('#click-me').on('click', debounce(updateCounter, 500));
