import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

describe('courseReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ]
    };
    const expectedState = action.data.map(course => ({ ...course, isSelected: false }));
    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const state = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    expect(courseReducer(state, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const state = [
      { id: 1, name: "ES6", isSelected: true, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: true, credit: 40 }
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: "ES6", isSelected: true, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: true, credit: 40 }
    ];
    expect(courseReducer(state, action)).toEqual(expectedState);
  });
});
