import './index.css';
import ReactDOM from 'react-dom';
import React from "react";

import Game from './Game';


class Application extends React.Component {
    render() {
        return (
            <Game />
        )
    }

}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
);