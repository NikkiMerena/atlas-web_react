// eslint-disable-next-line no-unused-vars
import { fromJS, Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { courseNormalizer } from '../schema/courses';

// Initial state using Immutable.js Map
const initialState = fromJS({
  entities: {
    courses: {}
  },
  result: []
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data and merge it with the state
      // eslint-disable-next-line no-case-declarations
      const normalizedData = courseNormalizer(action.data);
      return state.mergeDeep(normalizedData);

    case SELECT_COURSE:
      // Update the isSelected property of the course
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], true);

    case UNSELECT_COURSE:
      // Update the isSelected property of the course
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;
