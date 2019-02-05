import {
  TOGGLE_SIDE_MENU,
  TOGGLE_HEADER,
  TOGGLE_LOADER,
  CHANGE_THEME_COLOR,
} from '../types';

const INITIAL_STATE = {
  showSideMenu: false,
  showHeader: true,
  themeColor: '#03a9f4',
  showLoader: true,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TOGGLE_SIDE_MENU:
      return {
        ...state,
        showSideMenu: payload,
      };
    case TOGGLE_HEADER:
      return {
        ...state,
        showHeader: payload,
      };
    case CHANGE_THEME_COLOR:
      return {
        ...state,
        themeColor: payload,
      };
    case TOGGLE_LOADER:
      return {
        ...state,
        showLoader: payload,
      };
    default:
      return state;
  }
};
