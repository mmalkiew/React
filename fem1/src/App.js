import React from 'react'
import { render } from 'react-dom'
import Results from './Results'
import { Router, Link } from '@reach/router'
import Details from './Details'
import SearchParam from './SearchParam';
import { Provider } from "./SearchContext"
import pf from 'petfinder-client'

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
})

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            location: "Seattle, WA",
            animal: "",
            breed: "",
            breeds: [],
            handleAnimalChange: this.handleAnimalChange,
            handleBreedChange: this.handleBreedChange,
            handleLocationChange: this.handleLocationChange,
            getBreeds: this.getBreeds
        }
    }

    handleLocationChange = event => {
        this.setState({
            location: event.target.value
        });
    };

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
                <header>
                    <Link to="/">Adopt me!</Link>
                </header>
                <Provider value={this.state}>
                    <Router>
                        <Results path="/" />
                        <Details path="/details/:id" />
                        <SearchParam path="/search-params" />
                    </Router>
                </Provider>

            </div>
        )
    }
}

render(React.createElement(App), document.getElementById('root'))
