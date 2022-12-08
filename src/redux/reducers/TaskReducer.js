let storedTasks = [];

const initialState = {tasks: storedTasks};
export function TaskReducer(state = initialState, action) {
  console.log('TaskReducer--------', action);
  switch (action.type) {
    case 'GETTASKS':
      return state;
    case 'SETTASKS':
      return {
        tasks: action.payload,
      };
    case 'ADDTASK':
      return {
        tasks: [...state.tasks, {...action.payload}],
      };
    default:
      return state;
  }
}
