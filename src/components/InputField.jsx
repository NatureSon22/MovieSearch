import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const InputField = ({setSearch}) => {
    const [input, setInput] = useState('');

    const handleChange = (val) => {
        setInput(val);
    }

    const handleClick = async () => {
        await setSearch(input);
    }

    return (
        <div className="inputfield">
            <h1>MOVIESEARCH</h1>

            <div className="inputSearch">
                <input type="text" placeholder="Input movie name..." value={input} onChange={(e) => handleChange(e.target.value)} />
                <button onClick={handleClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    )
}

export default InputField;