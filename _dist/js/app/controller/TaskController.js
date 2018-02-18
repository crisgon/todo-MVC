class TaskController {

  constructor() {

    let $ = document.querySelector.bind(document);
    this._taskItem = $('.new-task__input');
    this._allTasks = new TaskList();
    this._view = new TaskView($('.task-list'));
  }

  addEvent(event) {
    event.preventDefault();
    let newTask = this._createTask(this._taskItem.value);
    this._allTasks.updateList(newTask);

    this._clearInput();
    this._view.updateView(this._allTasks.list);
  }

  _createTask(task) {

    return new TaskModel(task);
  }

  _clearInput() {

    this._taskItem.value = '';
  }

}