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
  constructor(title, count = 0) {
    super(title, count);
    this.importance = 'important';
  }
}

export class StandardTask extends Task {
  constructor(title, count = 0) {
    super(title, count);
    this.importance = 'default';
  }
}

export class UnimportantTask extends Task {
  constructor(title, count = 0) {
    super(title, count);
    this.importance = 'so-so';
  }
}


