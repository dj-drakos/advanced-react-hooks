import * as React from 'react'

const countReducer = (state, {type, payload}) => {
  switch(type) {
    case 'INCREMENT': 
      return {
      ...state,
      count: state.count + payload,
    }
    default:
      throw new Error(`Unsupported action type: ${type}`)
}
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', payload: step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
