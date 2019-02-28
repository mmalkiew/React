import React from 'react'
import { ANIMALS } from 'petfinder-client'
import { Consumer } from './SearchContext'

class SearchBox extends React.Component {

    render() {
        return (
            <Consumer>

                {context => (
                    <div className="search-params">
                        <label htmlFor="location">
                            Location
                         <input
                                id="location"
                                onChange={context.handleLocationChange}
                                value={context.location}
                                placeholder="Location" />
                        </label>
                        <label htmlFor="animal">
                            <select
                                id="animal"
                                value={context.animal}
                                onChange={context.handleAnimalChange}
                                onBlur={context.handleAnimalChange}
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
                                value={context.breed}
                                onChange={context.handleBreedChange}
                                onBlur={context.handleBreedChange}
                                disabled={!context.breeds.length}
                            >
                                <option />
                                {context.breeds.map(breed => (
                                    <option key={breed} value={breed}>{breed}</option>
                                ))}

                            </select>
                        </label>
                        <button>Submit</button>
                    </div>
                )}


            </Consumer>
        )
    }

}

export default SearchBox;