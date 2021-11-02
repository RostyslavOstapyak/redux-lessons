import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import { createTask, fetchTasksList, updateTask, deleteTask } from '../tasksGateway.jsx';
import * as tasksActions from '../tasks.actions';
import { tasksListSelector } from '../tasks.selectors';

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    return createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.props.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

TasksList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
};

const mapState = state => ({
  tasks: tasksListSelector(state),
});

export default connect(mapState, mapDispatch)(TasksList);
