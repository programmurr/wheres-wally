export default function characterReducer(state, action) {
  switch (action.type) {
    case 'a case':
      return `${state}`;
    default:
      throw new Error();
  }
}