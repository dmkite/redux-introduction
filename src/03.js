const { combineReducers, createStore } = require('redux')
const puppies = [
  { id: 1, name: 'Ham' },
  { id: 2, name: 'Abby' },
  { id: 3, name: 'Odie' }
]

const kittens = [
  { id: 1, name: 'Meowser' },
  { id: 2, name: 'Delphi' },
  { id: 3, name: 'Kalinda' }
]

/*
  Create a reducer function that manages CRUD actions for
  the above two datasets. You should be able to create,
  find, update, and remove each resource.

  Then, test your work by dispatching actions for each
  method.
*/
