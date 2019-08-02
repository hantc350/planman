import { extendObservable } from 'mobx';

class Storage {
  constructor() {
    extendObservable(this, {
      isBuilding: false,
      Questions: [],
    });
  }
}

export default new Storage();