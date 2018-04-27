export class Store {
  constructor(
    reducers = {},
    initialState = {}
  ) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {});
  }
  get value() {
    return this.state;
  }
  dispatch(action) {
    this.state = this._reduce(this.state, action);
  }
  _reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
  subscribe() {}
}

const store = new Store();
