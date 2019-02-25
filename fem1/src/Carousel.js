import React from 'react'

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photos: [],
            active: 0,
        }
    }

    static getDerivedStateFromProps({ media }) {
        let photos = []

        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(photo => photo['@size'] === 'pn')
        }

        return { photos }
    }

    /*
        When you create an arrow function,
        it doesn't create a new context when it;s called.
        So this works and 'this' is carousel this ;)

        Otherwhise you have to create a construtor and make special binding for 'this' like
        this.handleIndexClick = this.handleIndexClick.bind(this)
    */
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index,
        });
    };

    render() {
        const { photos, active } = this.state

        return (
            <div className="carousel">
                <img src={photos[active].value} alt="primary animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        <img
                            onClick={this.handleIndexClick}
                            src={photo.value}
                            src={photo.value}
                            data-index={index}
                            className={index === active ? 'active' : ''}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel
