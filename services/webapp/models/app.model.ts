import { action, makeObservable, observable } from "mobx"

export class AppModel {
  @observable page: number = 1
  @observable size: number = 4
  @observable notifyContent = ''
  @observable showNotification = false

  constructor() {
    makeObservable(this)
  }

  @action notify = (content: string) => {
    this.notifyContent = content
    this.showNotification = true
  }

  @action closeNotification = () => {
    this.notifyContent = ''
    this.showNotification = false
  }

  @action setPagination = (page: number, size: number) => {
    this.page = page
    this.size = size
  }

}

export const appModel = new AppModel()
