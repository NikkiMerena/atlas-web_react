import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { courseNormalizer } from "../schema/courses";
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const rawData = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: rawData
    };

    // Normalize the raw data
    const normalizedData = courseNormalizer(rawData);

    // Get the expected state structure after normalization
    const expectedState = fromJS({
      entities: normalizedData.entities.courses,
      result: normalizedData.result
    });

    // Run the reducer with the action
    const newState = courseReducer(fromJS({}), action);

    // Compare the new state to the expected state
    // Compares the content of the immutable structures
    expect(newState.equals(expectedState)).toBe(true);
  });

  it('should handle SELECT_COURSE', () => {
    const normalizedState = courseNormalizer([
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ]);
    const state = fromJS({
      entities: normalizedState.entities.courses,
      result: normalizedState.result
    });

    const action = { type: SELECT_COURSE, index: 2 };
    const newState = courseReducer(state, action);

    // Manually set the expected state after selecting the course
    const expectedState = state.setIn(['entities', 'courses', '2', 'isSelected'], true);

    expect(newState.equals(expectedState)).toBe(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    const normalizedState = courseNormalizer([
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20, isSelected: true },
      { id: 3, name: "React", credit: 40 }
    ]);
    const state = fromJS({
      entities: normalizedState.entities.courses,
      result: normalizedState.result
    });

    const action = { type: UNSELECT_COURSE, index: 2 };
    const newState = courseReducer(state, action);

    const expectedState = state.setIn(['entities', 'courses', '2', 'isSelected'], false);

    expect(newState.equals(expectedState)).toBe(true);
  });

  // ...other tests to add later...
});
