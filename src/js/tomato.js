import { Task, ImportantTask, StandardTask, UnimportantTask } from "./task";

class Tomato {

  activeTask = null;

  constructor({time = 25, pause = 5, bigPause = 15, tasks = []}) {
    if (Tomato.instance) return Tomato.instance;
    this.time = time;
    this.pause = pause;
    this.bigPause = bigPause;
    this.tasks = tasks;
    Tomato.instance = this;
  }

  addTask(task) {
    this.tasks.push(task);
    return this.tasks;
  }

  activateTask(idTask) {
    this.tasks.find(task => {
      if (task.id === idTask) {
        this.activeTask = task;
      }
    });
  }

  runTask() {
      if (this.activeTask) {
        setTimeout(() => {
          if (this.activeTask.count % 3 === 0) {
            console.log('Большой перерыв');
            setTimeout(() => {
              console.log('Закончился большой перерыв');
            }, this.bigPause * 60 * 1000)
          } else {
            console.log('Маленький перерыв');
            setTimeout(() => {
              console.log('Закончился маленький перерыв');
            }, this.pause * 60 * 1000)
          }
          this.increaseCounter(this.activeTask.id)
        }, this.time * 60 * 1000);
      } else {
        console.warn('Активная задача отсутствует!');
      }
  }

  increaseCounter(idTask) {
    this.tasks.find(task => {
      if (task.id === idTask) {
        ++task.count;
      }
    });
  }
}

const test = new Tomato({
  time: 0.1,
  pause: 10,
  bigPause: 50,
})

const task = new ImportantTask('Кушать', 2)
const task2 = new StandardTask('Спать', 6)
test.addTask(task);
test.addTask(task2);

test.activateTask(task.id)

test.runTask()
console.log('test: ', test);



