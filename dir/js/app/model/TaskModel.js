class TaskModel {

  constructor(task) {

    this._task = task;
    this._date = new Date();

    Object.freeze(this);
  }

  get task() {

    return this._task;
  }

  get date() {

    let hour = this._date.getHours() < 10 ? '0' + this._date.getHours() : this._date.getHours();
    let minutes = this._date.getMinutes() < 10 ? '0' + this._date.getMinutes() : this._date.getMinutes();
    let time = `${hour}:${minutes}`;

    return time;
  }
}