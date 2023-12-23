import { useEffect, useState } from "react";
import InputField from './components/InputField'
import CardMovie from "./components/CardMovie";
import Initial from './components/Initial'
import Error from "./components/Error";
import Loading from "./components/Loading";
import { faL } from "@fortawesome/free-solid-svg-icons";

const API_URL = 'http://www.omdbapi.com/?apikey=49c4a48b'

const App = () => {
    const [search, setSearch] = useState(null);
    const [movieData, setData] = useState(null);
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (search == null) return;
    
        const fetchAllMovies = async (search) => {
            let page = 1;
            let allResults = [];

            setLoad(true);
            try {
                while (true) {
                    const response = await fetch(`${API_URL}&s=${search}&page=${page}`);
                    const data = await response.json();

                    if (page > 2 || !data.Search) {
                        break; 
                    }

                    allResults = [...allResults, ...data.Search];
                    page++;

                }

                setData(allResults);
                setError(allResults.length > 0 ? false : true);
                setLoad(false);

            } catch(error) {
                setError(true);
            }
        };

        fetchAllMovies(search);
    
    }, [search]);
    

    return (
        <>
            <InputField setSearch={setSearch} setLoad={setLoad}></InputField>
            {load && <Loading></Loading>}
            {(error & !load) && <Error></Error>}
            {movieData && !load ? <CardMovie movieData={movieData}></CardMovie> : !load ? <Initial></Initial> : null}

        </>
    )
}

export default App;