import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'

import App from './components/pages/App'
import MyPortfolio from './components/pages/MyPortfolio'

import registerServiceWorker from './registerServiceWorker'

const Routes = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="#" to="/" />
                <Route path="/myportfolio" component={MyPortfolio} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(
    // eslint-disable-next-line
    <Routes />,
    document.getElementById('root')
);
registerServiceWorker();
