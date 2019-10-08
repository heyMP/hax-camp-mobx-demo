import {
  observable,
  decorate,
  computed,
  autorun
} from "https://unpkg.com/mobx?module";

class Store {
  constructor() {
    this.count = window.localStorage.getItem('count') || 0
  }

  get countDisplay() {
    return `hey the count is ${this.count}`
  }

  get saveCount() {
    const count = this.count
    window.localStorage.setItem('count', count)
  }
}

decorate(Store, {
  count: observable,
  countDisplay: computed,
  saveCount: computed
});

const _store = new Store();

autorun(() => {
  const count = _store.count
  window.localStorage.setItem('count', count)
})

export const store = _store
