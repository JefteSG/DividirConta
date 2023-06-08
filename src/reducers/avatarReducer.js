export default function selectedAvatar(state = {}, action) {
  switch (action.type) {
    case 'SELECT_AVATAR': {
      return action.avatar;
    }
    default:
      return state;
  }
}