import { observable, action, computed } from 'mobx'

class TestStore {
    @observable n = 1
    @observable data = [
        {
            type: 'container',
            items: []
        }
    ]

    @action plus = () => {
        this.n = this.n + 1
    }

    @action minus = () => {
        this.n = this.n - 1
    }

    @action add = (item) => {
        this.data.push(item)
    }

    @action update = (item, index) => {
    }

    @action render = (data) => {
        try {
            this.data = []
            this.data.push(JSON.parse(data))
        } catch(e) {
            console.error(e)
        }
    }

    @computed get count () {
        return this.n
    }

    @computed get regularData () {
        return this.data
    }

    @computed get result () {
        return JSON.stringify(this.data, null, 4)
    }
}

const store = new TestStore()
export default store