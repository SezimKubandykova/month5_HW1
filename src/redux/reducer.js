
const initialState = {
  count: 0
}
export function reducer (state = initialState, action) {
  if (action.type === "INCREMENT_COUNT") {
    return {...state, count: action.payload}
  }
  else if (action.type === "DECREMENT_COUNT") {
    return {...state, count: action.payload}
  }
  return state
}