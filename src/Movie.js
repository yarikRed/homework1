import React, {Component} from "react"
import './Movie.css'
import MovieDetails from "./MovieDetails"
import Image from "./Image"
import Title from "./Title"
import Body from "./Body"

class Movie extends Component {

    state = {
        isOpen: false
    };

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };


    render() {

        const {movie} = this.props

        const button = (<div>
            <button onClick={this.handleClick} className='button-trailer'>
                {this.state.isOpen ? "Close trailer" : "Watch trailer"}
            </button>
        </div>)

        const watchTrailer = (this.state.isOpen && <div className='trailer-frame'><iframe title={movie.uniqueTitle} width="660" height="415" src={movie.trailer}></iframe></div>)

        return (
            <div className='movie-section'>
                <Image img={movie.img} title={movie.title} />
                <Title title={movie.title} date={movie.date} />
                <MovieDetails certificate={movie.certificate} duration={movie.duration} genres={movie.genres} metascore={movie.metascore}/>
                <Body text={movie.text}/>
                {button}
                {watchTrailer}
            </div>
        )
    }

}


export default Movie

