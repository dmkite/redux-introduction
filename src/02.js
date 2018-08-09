const redux = require('redux')

/*
  It's possible to define the default state outside of the
  function signature as well.
*/
const todosInitialState = [
  {
    id: 1,
    content: 'Use Redux on its own',
    completed: false,
    user_id: 1
  }, {
    id: 2,
    content: 'Use Redux with a React application',
    completed: false,
    user_id: 2
  }, {
    id: 3,
    content: 'Create a React/Redux application from scratch',
    completed: false,
    user_id: 2
  }, {
    id: 4,
    content: 'Integrate Redux with API calls',
    completed: false,
    user_id: 1
  }
]

const usersInitialState = [
  { id: 1, email: 'wesley.reid@galvanize.com' },
  { id: 2, email: 'roger.schmidt@galvanize.com' }
]

/*
  It might seem silly to define a new variable that has
  a value that is a string with the same name. This is not
  necessary to do but is the convention. To find out more:
  https://redux.js.org/basics/actions#note-on-boilerplate
*/
const TOGGLE_TODO = 'TOGGLE_TODO'
function todos (state=todosInitialState, { type, payload }) {
  switch (type) {
    case TOGGLE_TODO:
      /*
        At this point, we need to return a new array but
        only change the one todo item. We can do that
        using a `.map()` like so!
      */
      return state.map(todo => {
        return todo.id === payload.id ?
          { ...todo, completed: !todo.completed } :
          todo
      })
    default:
      return state
  }
}

const GET_USER = 'GET_USER'
const ADD_USER = 'ADD_USER'
const REMOVE_USER = 'REMOVE_USER'
function users (state=usersInitialState, { type, payload }) {
  switch (type) {
    case GET_USER:
      /* Implement get user here! */
    case ADD_USER:
      /* Implement add user here! */
    case REMOVE_USER:
      /* Implement remove user here! */
    default:
      return state
  }
}

/*
  The `combineReducers()` function takes multiple reducers
  and puts them into a single function. The names of your
  functions will be important as they will be keys in your
  state object.
*/
const reducers = redux.combineReducers({ todos, users })
const store = redux.createStore(reducers)

// Notice the keys that are returned from this invocation!
console.log('INITIAL STATE:', store.getState())

// Notice that we can pass in a more complex payload.
store.dispatch({ type: TOGGLE_TODO, payload: { id: 1 } })
store.dispatch({ type: TOGGLE_TODO, payload: { id: 2 } })
store.dispatch({ type: TOGGLE_TODO, payload: { id: 3 } })
store.dispatch({ type: TOGGLE_TODO, payload: { id: 3 } })

console.log('AFTER COMPLETING TODOS:', store.getState())

/*
  Complete the above functionality so that everything works
  in the following dispatches.
*/

// store.dispatch({ type: GET_USER, payload: { id: 1 } })
// store.dispatch({ type: REMOVE_USER, payload: { id: 1 } })
// store.dispatch({ type: ADD_USER, payload: { email: 'scott.hurlow@galvanize.com' } })
//
// console.log('AFTER COMPLETING USER CHANGES:', store.getState())
