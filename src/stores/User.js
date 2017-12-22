import {observable, computed, action, runInAction} from 'mobx'
import {userApi} from '../services/index'

class User {
  @observable aboutus = {}
  @observable profile = {}

  @computed
  get link() {
    return `https://${this.userInfo.website}`
  }

  @action
  async getAboutus() {
    const {data} = await userApi.getAboutus()
    runInAction(() => {
      this.aboutus = data
    })
  }

  @action
  async getProfile(name) {
    const {data} = await userApi.getProfile(name)
    runInAction(() => {
      this.profile = data
    })
  }
}

export default User
