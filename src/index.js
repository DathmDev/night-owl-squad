import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Link, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import './components/common/css/default.css'
import './components/common/css/responsive.css'

import App from './components/layout/App'
import registerServiceWorker from './registerServiceWorker'

const Routes = props => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" component={App} />
                <Route path="#" to="/" />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    // eslint-disable-next-line
    <Routes />,
    document.getElementById('root')
);
registerServiceWorker();
