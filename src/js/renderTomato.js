import { el, mount, setChildren } from "redom";

export class RenderTomato {
  constructor(tomato) {
    this.tomato = tomato;
    this.init();
  }

  init() {
    const main = document.querySelector('.main');
    const container = el(".container.main__container");

    mount(main, container);

    const pomodoroForm = el(".pomodoro-form .window");
    const pomodoroTasks = el(".pomodoro-tasks");

    setChildren(container, [pomodoroForm, pomodoroTasks]);

    this.createPomodoroForm(pomodoroForm);
    this.createPomodoroTasks(pomodoroTasks);
  };

  createPomodoroForm(elem) {
    const windowPanel = el(".window__panel");
    const windowBody = el(".window__body");
    const taskForm = el("form.task-form", { action: "submit" });

    setChildren(elem, [windowPanel, windowBody, taskForm]);

    const title = el("p.window__panel-title", "Сверстать сайт");
    const text = el("p.window__panel-task-text", "Томат 2");

    setChildren(windowPanel, [title, text]);

    const timer = el("p.window__timer-text", this.tomato.time + ":00");
    const buttons = el(".window__buttons");

    const btnPrimary = el("button.button button-primary", "Старт");
    const btnSecondary = el("button.button button-secondary .hidden", "Стоп");

    setChildren(buttons, [btnPrimary, btnSecondary]);
    setChildren(windowBody, [timer, buttons]);

    this.createForm(taskForm);
  };

  createForm(elem) {
    const input = el("input.task-name.input-primary#task-name",
      { type: "text", name: "task-name", placeholder: "название задачи" });

    const btnImportance = el("button.button.button-importance.default",
      { type: "button", ariaLabel: "Указать важность" });

    const btnAdd = el("button.button.button-primary.task-form__add-button", { type: "submit" }, "Добавить");

    setChildren(elem, [input, btnImportance, btnAdd])
  }

  createPomodoroTasks(elem) {
    const tasks = el(".tasks");
    const manual = el(".manual");

    this.createManual(manual);

    setChildren(elem, [tasks, manual]);

    this.createTask(tasks);
  }

  createManual(elem) {

    const details = el("details.manual__details");
    const summary = el("summary.manual__title tasks__header-title", "Инструкция");
    const list = el("ol.manual__list");

    setChildren(details, [summary, list]);

    setChildren(list, [
      el('li.pomodoro-tasks__list-item',
        'Напишите название задачи, чтобы её добавить'),
      el('li.pomodoro-tasks__list-item',
        'Чтобы задачу активировать, выберите её из списка'),
      el('li.pomodoro-tasks__list-item',
        'Запустите таймер'),
      el('li.pomodoro-tasks__list-item',
        'Работайте, пока таймер не прозвонит'),
      el('li.pomodoro-tasks__list-item',
        'Сделайте короткий перерыв (5 минут)'),
      el('li.pomodoro-tasks__list-item',
        'Продолжайте работать, пока задача не будет выполнена.'),
      el('li.pomodoro-tasks__list-item',
        'Каждые 3 периода таймера делайте длинный перерыв (15-20 минут).'),
    ])

    mount(elem, details);
  }

  createTask(elem) {
    const taskTitle = el("p.tasks__title", "Задачи:");
    const taskList = el("ul.tasks__list");
    const deadline = el("p.tasks__deadline", "1 час 30 мин")

    setChildren(elem, [taskTitle, taskList, deadline]);

    this.tomato.tasks.forEach(el => {
      this.createTaskItem(el, taskList);
    });

  }

  createTaskItem(elem, item) {
    const taskItem = el(`li.tasks__item ${elem.importance}`);

    mount(item, taskItem);

    const count = el("span.count-number", `${elem.count}`);
    const btnText = el("button.tasks__text", `${elem.title}`);
    const btnPopup = el("button.tasks__button");


    if (this.tomato.activeTask && this.tomato.activeTask.id === elem.id) {
      btnText.className += ' tasks__text_active'
    }

    setChildren(taskItem, [count, btnText, btnPopup]);
    this.createModal(taskItem);
  }

  createModal(elem) {
    const popup = el(".popup");
    const btnEdit = el("button.popup__button.popup__edit-button", "Редактировать");
    const btnDelete = el("button.popup__button.popup__delete-button", "Удалить");

    setChildren(popup, [btnEdit, btnDelete])
    mount(elem, popup)
  }

};



