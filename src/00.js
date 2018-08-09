const redux = require('redux')

/*
  A reducer. A reducer is like the reduce function -- it takes a
  series of things (actions) and returns a single thing (state).
*/
function counter (state = 0, action) {
  /*
    You will almost always use a `switch` statement within a
    reducer and it will always be based on the action.type
  */
  switch (action.type) {
    case 'INCREMENT':
      // You must return a new version of the state!
      return state + 1

    case 'DECREMENT':
      return state - 1
    /*
      You will need a default state! All of your reducers get
      called on the inital loading of the application. If you
      do not include this, you may end up with some issues.
    */
    default:
      return state
  }
}

/*
  A store is where all of your state gets... stored! To create a
  store, you must give it one or more reducers that will manage
  that state. To recap, a store takes reducers that manage the
  state based on actions it receives.
*/
const store = redux.createStore(counter)
/*
  You'll notice that the value that is printed is the state we've
  set above. Right now it will just be a number but this can be a
  more complex object or array.
*/
console.log('INITIAL STATE:', store.getState())

/*
  Dispatching your action is how you update your state. The
  following code will first increment, then decrement, then
  increment again the state.
*/
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })

console.log('LATER STATE:', store.getState())
