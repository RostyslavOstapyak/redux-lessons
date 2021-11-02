import { fetchTasksList } from './tasksGateway.jsx';

export const TASKS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED';

export const tasksListReceived = tasksList => ({
  type: TASKS_LIST_RECEIVED,
  payload: { tasksList },
});

export const getTaskList = () => {
  const thunkAction = dispatch => {
    fetchTasksList().then(tasksList => dispatch(tasksListReceived(tasksList)));
  };
  return thunkAction;
};
