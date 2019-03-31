import React from 'react'
import { render } from 'react-dom'
import Results from './Results'
import { Router, Link } from '@reach/router'
import SearchParam from './SearchParam';
import NavBar from './NavBar';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import store from './store';


const LoadableDetails = Loadable({
    loader: () => import('./Details'),
    loading() {
        return <h1>loading split out code ...</h1>
    }
})

class App extends React.Component {

    render() {
        return (
            <div>
                <NavBar />
                <Provider store={store}>
                    <Router>
                        <Results path="/" />
                        <LoadableDetails path="/details/:id" />
                        <SearchParam path="/search-params" />
                    </Router>
                </Provider>
            </div>
        )
    }
}

render(React.createElement(App), document.getElementById('root'))
