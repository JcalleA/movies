import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import Peliculas from "../modules/Peliculas/Peliculas";
import '../modules/Peliculas/Peliculas.css'



const Genres = () => {
  
    const params = useParams();
    const keyApi = process.env.REACT_APP_APIKEY_TMDB+ '&language=es-ES'
    const baseUrl = 'https://api.themoviedb.org/3';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const discover = '/discover/movie';
    const [datos1, setDatos] = useState([]);
    const [page, setPage] = useState(1);
    const urlTmdb = baseUrl + discover + keyApi;
    const navigate = useNavigate();



    const getPeliculas = async (page) => {

        const { data } = await axios.get(urlTmdb + "&page=" + page+'&with_genres='+params.id);
        setDatos(data.results);
    }

    useEffect(() => {
        getPeliculas();
        
    }, [params] )

    const next = () => {
        const nPage = page + 1;
        getPeliculas(nPage);
        setPage(nPage);
    }
    const prev = () => {

        if (page == 1) {
        } else {
            const nPage = page - 1;
            getPeliculas(nPage);
            setPage(nPage);
        }
    }


    return (
        <div>
            <h1>{params.name}</h1>
            <div className='cardCont'>
                {datos1.map((pelicula) => {
                    return <Peliculas
                        key={pelicula.id}
                        id={pelicula.id}
                        poster={pelicula.poster_path}
                        title={pelicula.title}>
                    </Peliculas>
                })}
                <div className="btnNextCont">
                    <button className="btnNext" onClick={() => { prev() }}>PREV</button>
                    <h1>{page}</h1>
                    <button className="btnNext" onClick={() => { next() }}>NEXT</button>
                </div>
            </div>
        </div>


    );
};

export default Genres;