import { ActionType, createCustomAction, getType } from 'typesafe-actions';

export interface UsersState {
  menuOpened?: boolean;
}

export const openMenu = createCustomAction('auth/openMenu', (data: {}) => ({
  data,
}));


const actions = { openMenu };

type Action = ActionType<typeof actions>;

export default function reducer(state: UsersState = {}, action: Action) {
  switch (action.type) {
    case getType(openMenu):
      return { ...state, auth: action.data };
    default:
      return state;
  }
}
