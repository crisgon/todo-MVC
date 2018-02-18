class TaskView {

  constructor (element) {

    this.element = element;
  }

  _template (task) {
    return task.map(function(item) { 
      return `
        <li class="task-list__item">
          <input class="task-list__item-button" type="checkbox" name="task">
          <span class="task-list__item-name">${item}</span>
        </li>`;
    }).join('');

    return test;
  }

  updateView (task) {
    this.element.innerHTML  = '';
    this.element.innerHTML += this._template(task);
  }


  finishTask (task) {
    console.log(task);
  }

}