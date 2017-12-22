import User from './User'

class RootStore {
  constructor() {
    this.user = new User(this)
  }
}

export default RootStore
