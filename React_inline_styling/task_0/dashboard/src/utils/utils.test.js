// Import the functions to be tested from the utils module.
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Describe block defines a test suite for the utils functions.
describe('utils', () => {

  // It block defines an individual test for the getFullYear function.
  it('getFullYear returns the correct year', () => {
    // Get the current year using the Date object.
    const year = new Date().getFullYear();
    // Expect the getFullYear function to return the current year.
    expect(getFullYear()).toBe(year);
  });

  // It block defines an individual test for the getFooterCopy function when the argument is true.
  it('getFooterCopy correctly returns string when argument is true', () => {
    // Expect the getFooterCopy function to return a specific string when passed true.
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  // It block defines an individual test for the getFooterCopy function when the argument is false.
  it('getFooterCopy correctly returns string when argument is false', () => {
    // Expect the getFooterCopy function to return a different specific string when passed false.
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  // It block defines an individual test for the getLatestNotification function.
  it('getLatestNotification returns the correct string', () => {
    // Expect the getLatestNotification function to return a specific string with HTML content.
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
