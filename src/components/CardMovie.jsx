import CardContainer from "./CardContainer";

const CardMovie = ({movieData}) => {
    console.log(movieData)
    return (
        <div className="moviecontainer">
            {
                movieData.map((movie) => <CardContainer key={movie.imdbID} movie={movie} ></CardContainer>)
            }

        </div>
    )
}

export default CardMovie;