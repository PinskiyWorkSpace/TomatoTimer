import { ImportantTask, StandardTask, UnimportantTask } from "./task";

export class ConrollerTomato {
  constructor(tomato, renderTomato) {
    this.tomato = tomato;
    this.renderTomato = renderTomato;
    this.init();
  }

  init() {
    
    const form = document.querySelector('.task-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const input = document.querySelector('.task-name').value;

      const btnImportance = document.querySelector('.button-importance');

      if (btnImportance.classList.contains('default')) {
        const task = new StandardTask(input);
        this.tomato.addTask(task);
        this.renderTomato.createTaskItem(task, document.querySelector('.tasks__list'));
      }

      if (btnImportance.classList.contains('important')) {
        const task = new ImportantTask(input);
        this.tomato.addTask(task);
        this.renderTomato.createTaskItem(task, document.querySelector('.tasks__list'));
      }

      if (btnImportance.classList.contains('so-so')) {
        const task = new UnimportantTask(input);
        this.tomato.addTask(task);
        this.renderTomato.createTaskItem(task, document.querySelector('.tasks__list'));
      }

      form.reset();
      this.popup()
    });

    let count = 0;
    const imp = ['default', 'important', 'so-so']
    document.querySelector('.button-importance').addEventListener('click', ({ target }) => {
      count += 1;
      if (count >= imp.length) {
        count = 0
      }

      for (let i = 0; i < imp.length; i++) {
        if (count === i) {
          target.classList.add(imp[i])
        } else {
          target.classList.remove(imp[i])
        }
      }
    })
  }

  popup() {
    const btnPopup = document.querySelectorAll('.tasks__button');
    const popup = document.querySelectorAll('.popup');
    
    if (btnPopup.length > 0 ) {
      for (let i = 0; i < btnPopup.length; i++) {
        console.log(btnPopup[i]);
        btnPopup[i].addEventListener('click', () => {
          popup[i].classList.toggle('popup_active');
          
        })
      }
    }
  }
}
