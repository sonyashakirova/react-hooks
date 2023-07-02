import { useReducer } from "react"

function reducer(state, action) {
  switch (action.type) {
    case "boolean":
      return typeof action.payload === "boolean"
        ? action.payload
        : !state
    case "array":
      return action.payload 
        ? action.array.includes(action.payload)
          ? action.payload : state
          : action.array.indexOf(state) === action.array.length - 1
            ? action.array[0]
            : action.array[action.array.indexOf(state) + 1]
    default:
      return state
  }
}

export function useToggle(initialValue) {
  const initialState = Array.isArray(initialValue) ? initialValue[0] : initialValue ?? true;
  const [state, dispatch] = useReducer(reducer, initialState)

  function toggle(value) {
    if (Array.isArray(initialValue)) {
      dispatch({
        type: "array",
        payload: value,
        array: initialValue
      })
    } else {
      dispatch({
        type: "boolean",
        payload: value
      })
    }
  }

  return [state, toggle]
}
