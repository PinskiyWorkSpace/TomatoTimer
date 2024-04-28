export class Task {
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

export class ImportantTask extends Task {
  constructor(title, counter = 0) {
    super(title, counter);
    this.importance = 'Important';
  }
}

export class StandardTask extends Task {
  constructor(title, counter = 0) {
    super(title, counter);
    this.importance = 'Standard';
  }
}

export class UnimportantTask extends Task {
  constructor(title, counter = 0) {
    super(title, counter);
    this.importance = 'Unimportant';
  }
}

