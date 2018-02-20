class TaskView {

  constructor(element) {

    this.element = element;
  }

  _template(task) {

    let li = document.createElement('li');

    let checkButton = document.createElement('input');
    let name = document.createElement('span');
    let date = document.createElement('span');

    li.classList.add('task-list__item');
    checkButton.classList.add('task-list__item-button');
    name.classList.add('task-list__item-name');
    date.classList.add('task-list__item-date');

    checkButton.setAttribute('type', 'checkbox');

    name.innerHTML = task.task;
    date.innerHTML = task.date;

    li.appendChild(checkButton);
    li.appendChild(name);
    li.appendChild(date);

    return li;
  }

  updateView(task) {
    this.element.appendChild(this._template(task));
  }

  finishTask() {

    let checkButton = document.querySelectorAll('.task-list__item-button');
    checkButton.forEach(item => {
      item.addEventListener('change', function () {
        if (item.checked) item.parentNode.style.background = '#87ca7d';else item.parentNode.style.background = '#fff';
      });
    });

    checkButton.forEach(item => {
      item.parentNode.addEventListener('dblclick', () => {
        item.parentNode.classList.add('fadeOut');
        setTimeout(() => {
          item.parentNode.remove();
        }, 700);
      });
    });

    checkButton.forEach(item => {
      item.parentNode.addEventListener('touchmove', () => {
        item.parentNode.classList.add('fadeOut');
        setTimeout(() => {
          item.parentNode.remove();
        }, 700);
      });
    });
  }
}