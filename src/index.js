import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { Provider } from 'mobx-react'
import ContainerStore from './store/ContainerStore'

const Root = (
    <Provider ContainerStore = { ContainerStore }>
        <App />
    </Provider>
)

render(Root, document.getElementById('root'))