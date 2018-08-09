const redux = require('redux')

/*
  Take a look at the reducer, store, and dispatches below.
  Whenever you return from a reducer, you must return a new
  state. In the case of primitive types, that's always the
  case however with reference types you will need to create
  a new array or object.

  Note as well that we can set a default state as part of
  the reducer.
*/
function classmates (state = [ 'Wes' ], action) {
  switch (action.type) {
    case 'ADD':
      const student = action.payload
      /*
        This way, we create a new array with the new student
        while keeping all of the contents from state.
      */
      return [ ...state, student ]
    case 'REMOVE':
      // .filter() returns a new array, so just this line works!
      return state.filter(student => student !== action.payload)
    default:
      return state
  }
}

const store = redux.createStore(classmates)
console.log('INITIAL STATE:', store.getState())

store.dispatch({ type: 'ADD', payload: 'Roger' })
store.dispatch({ type: 'REMOVE', payload: 'Wes' })
store.dispatch({ type: 'ADD', payload: 'Scott' })

console.log('LATER STATE:', store.getState())
