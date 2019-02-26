import React from 'react'
import pf, { ANIMALS } from 'petfinder-client'

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
})

class SearchParams extends React.Component {

    state = {
        location: "Seattle, WA",
        animal: "",
        breed: "",
        breeds: []
    };

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
            <div className="search-params">
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        onChange={this.handleLocationChange}
                        value={this.state.location}
                        placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    <select
                        id="animal"
                        value={this.state.animal}
                        onChange={this.handleAnimalChange}
                        onBlur={this.handleAnimalChange}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => (
                                <option key={animal} value={animal}>{animal}</option>
                            ))
                        }

                    </select>
                </label>
                <label htmlFor="breed">
                    breed
                        <select
                        id="breed"
                        value={this.state.breed}
                        onChange={this.handleBreedChange}
                        onBlur={this.handleBreedChange}
                        disabled={!this.state.breeds.length}
                    >
                        <option />
                        {this.state.breeds.map(breed => (
                            <option key={breed} value={breed}>{breed}</option>
                        ))}

                    </select>
                </label>
                <button>Submit</button>
            </div>
        )
    }

}

export default SearchParams;