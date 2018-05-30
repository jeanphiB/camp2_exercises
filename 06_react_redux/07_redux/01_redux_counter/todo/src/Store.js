import { createStore } from 'redux';

const initialState = {
  list: [],
  value: ""
};

function reducer(state = initialState, action) {
  let newList = [];

  switch(action.type) {
    case 'UPDATE_TASK':
      return {
        ...state,
        value: action.value
      };

    case 'ADD_TASK':
      return {
        list: [...state.list, {title: action.value, completed: false}],
        value: ""
      };

    case 'COMPLETE_TASK':
      newList = state.list.map((task, i) => ((Number(action.key) === i) ? {...task, completed: !task.completed} : task));
      return {
        ...state,
        list: newList
      };

    case 'DELETE_TASK':
      state.list.forEach((task, i) => {
        if (Number(action.key) !== i) {
          newList.push(task);
        }
      });
      return {
        ...state,
        list: newList
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
