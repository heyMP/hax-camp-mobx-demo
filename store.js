import {
  observable,
  decorate,
  computed,
  action,
  autorun
} from "https://unpkg.com/mobx?module";

class Store {
  constructor() {
    this.count = 0
  }

  decrementCount() {
    if (this.count > 0) {
      this.count = --this.count
    }
  }
}

decorate(Store, {
  count: observable,
  decrementCount: action
})

export const store = new Store()