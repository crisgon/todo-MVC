class TaskList {

  constructor () {
    this._taskList = [];
  }

  updateList (task) {

    this._taskList.push(task._task);
  }

  get list () {

    return this._taskList;
  }

}