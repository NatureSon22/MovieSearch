import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";

const Initial = () => {
    return (
        <div className="initial">
            <FontAwesomeIcon className="icon" icon={faClapperboard} />
            <p>Search for movies</p>
        </div>
    )
}

export default Initial;