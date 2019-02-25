import React from 'react'
import { render } from 'react-dom'
import Results from './Results'
import { Router, Link } from '@reach/router'
import Details from './Details'

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">Adopt me!</Link>
                </header>
                <Router>
                    <Results path="/" />
                    <Details path="/details/:id" />
                </Router>
            </div>
        )
    }
}

render(React.createElement(App), document.getElementById('root'))
