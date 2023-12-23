const CardContainer = ({ movie : {Title, Year, Type, Poster} }) => {
    console.log(Poster)
    return (
        <div className="moviecard">
            <div className="moviecard-poster">
                <p>{Type}</p>
                <img src={Poster} alt={Poster == "N/" ? Title : 'No Image'} />
            </div>

            <div className="movieinfo">
                <p className="movietitle">{Title}</p>
                <p className="movieyear">{Year}</p>
            </div>
        </div>
    )
}
export default CardContainer;