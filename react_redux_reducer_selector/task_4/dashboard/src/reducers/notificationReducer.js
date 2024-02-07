import { fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

// Initial state using Immutable.js Map
const initialState = fromJS({
  entities: {
    notifications: {}
  },
  result: [],
  filter: "DEFAULT"
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Normalize the data and merge it with the state
      // eslint-disable-next-line no-case-declarations
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep(normalizedData);

    case MARK_AS_READ:
      // Use the setIn function from Immutable to update the value of the item
      return state.setIn(['entities', 'notifications', action.index, 'isRead'], true);

    case SET_TYPE_FILTER:
      // Use the set function from Immutable to update the value of the filter
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
