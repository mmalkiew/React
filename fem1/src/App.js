import React from 'react'
import { render } from 'react-dom'
import Results from './Results'
import { Router, Link } from '@reach/router'
import SearchParam from './SearchParam';
import { Provider } from "./SearchContext"
import NavBar from './NavBar';
import pf from 'petfinder-client'
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
})

const LoadableDetails = Loadable({
    loader: () => import('./Details'),
    loading() {
        return <h1>loading split out code ...</h1>
    }
})

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //  move to redux
            // location: "Seattle, WA",
            animal: "",
            breed: "",
            breeds: [],
            handleAnimalChange: this.handleAnimalChange,
            handleBreedChange: this.handleBreedChange,
            handleLocationChange: this.handleLocationChange,
            getBreeds: this.getBreeds
        }
    }

    //  move to redux
    // handleLocationChange = event => {
    //     this.setState({
    //         location: event.target.value
    //     });
    // };

    /*
        this.getBreeds will be called after the setState is flushed.

        this.setState(...)
        this.getBreeds(...)
        above sequnce not guaranteed that getBreeds will be called after setStare flushed
    */
    handleAnimalChange = event => {
        this.setState({
            animal: event.target.value,
            breed: ""
        }, this.getBreeds);
    };

    handleBreedChange = event => {
        this.setState({
            breed: event.target.value
        });
    }

    getBreeds() {
        if (this.state.animal) {
            petfinder.breed.list({
                animal: this.state.animal
            }).then(data => {
                if (data.petfinder &&
                    data.petfinder.breeds &&
                    Array.isArray(data.petfinder.breeds.breed)) {
                    this.setState({
                        breeds: data.petfinder.breeds.breed
                    });
                } else {
                    this.setState({
                        breeds: []
                    });
                }
            })
        } else {
            this.setState({
                breeds: []
            })
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <ReduxProvider store={store}>
                    <Provider value={this.state}>
                        <Router>
                            <Results path="/" />
                            <LoadableDetails path="/details/:id" />
                            <SearchParam path="/search-params" />
                        </Router>
                    </Provider>
                </ReduxProvider>

            </div>
        )
    }
}

render(React.createElement(App), document.getElementById('root'))
