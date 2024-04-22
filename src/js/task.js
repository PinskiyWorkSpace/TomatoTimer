class Task {
  #title;
  constructor(title, count = 0) {
    this.id = Math.floor(Math.random() * 90000) + 10000;
    this.#title = title;
    this.count = count;
  }

  changeCount() {
    this.count = this.count + 1;
  }

  changeTitle(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  } 
}