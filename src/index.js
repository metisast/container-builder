import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { Provider } from 'mobx-react'
import TestStore from './store/TestStore'

const Root = (
    <Provider TestStore = { TestStore }>
        <App />
    </Provider>
)

render(Root, document.getElementById('root'))