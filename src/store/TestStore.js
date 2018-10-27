import { observable, action, computed } from 'mobx'

class TestStore {
    @observable n = 1

    @action plus = () => {
        this.n = this.n + 1
    }

    @action minus = () => {
        this.n = this.n - 1
    }

    @computed get count () {
        return this.n
    }
}

const store = new TestStore()
export default store