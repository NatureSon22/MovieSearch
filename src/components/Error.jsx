import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard, faTrash } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
    return (
        <div className="initial error">
            <FontAwesomeIcon className="icon" icon={faTrash} />
            <p>No results found</p>
        </div>
    )
}

export default Error;