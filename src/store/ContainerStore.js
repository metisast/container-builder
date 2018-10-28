import { observable, action, computed } from 'mobx'

class TestStore {
    @observable data = {
        type: 'container',
        items: []
    }

    @action render = (data) => {
        try {
            this.data = {}
            this.data = JSON.parse(data)
        } catch(e) {
            console.error(e)
        }
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