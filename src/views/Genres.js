import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import Peliculas from "../modules/Peliculas/Peliculas";
import '../modules/Peliculas/Peliculas.css'



const Genres = () => {
  
  const params = useParams();
  

    const keyApi = '?api_key=01f8864c658ff852bda51d8e300d91de&language=es-ES';
    const baseUrl = 'https://api.themoviedb.org/3';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const search = '/search/movie';
    const discover = '/discover/movie';
    const consulta = '&query=';
    const [datos1, setDatos] = useState([]);
    const [page, setPage] = useState(1);
    const urlTmdb = baseUrl + discover + keyApi;
    const genreApi = '/genre/movie/list';
    const navigate = useNavigate();






    const ver = async (idx) => {

        const uriVideo = baseUrl + '/movie/' + datos1[idx].id + keyApi + '&append_to_response=videos';
        const { data } = await axios.get(uriVideo);

        let key;

        if (data.videos.results.length == 0) {

            key = 'VKeJ2mzPszY'
        } else {

            key = data.videos.results[0].key
        }

        navigate('/Pelicula', {
            state: {
                id: datos1[idx].id,
                title: datos1[idx].title,
                image: imagePath + datos1[idx].poster_path,
                description: datos1[idx].overview,
                rate: datos1[idx].vote_average,
                count: datos1[idx].vote_count,
                urlVideo: key,
            }
        });
    };

    const getPeliculas = async (page) => {

        const { data } = await axios.get(urlTmdb + "&page=" + page+'&with_genres='+params.id);
        setDatos(data.results);
    }

    useEffect(() => {
        getPeliculas();
    }, [])

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