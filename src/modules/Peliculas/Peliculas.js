import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Peliculas.css";

import { useNavigate } from "react-router-dom";


const Peliculas = () => {

    const provider = {
        tpb: ["ThePirateBay", "Video"],
        t9: ["Torrent9", "Movies"],
        tz: ["Torrentz2", "Movies"],
        t13: ["1337x", "Movies"]
    }

    const keyApi = '?api_key=01f8864c658ff852bda51d8e300d91de&language=es-ES';
    const baseUrl = 'https://api.themoviedb.org/3';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const search = '/search/movie';
    const discover = '/discover/movie';
    const consulta = '&query=';
    const [datos1, setDatos] = useState([]);
    const [page, setPage] = useState(1);
    const [key, setKey] = useState('')
    const urlTmdb = baseUrl + discover + keyApi;
    const yts = "https://yts.mx/api/v2/list_movies.json";
    const consulta2 = "?query_term=";
    const uri = "https://back-movies-jwyg.onrender.com/";
    const external = baseUrl + "/find/tt10151854" + keyApi + "&external_source=imdb_id";
    const navigate = useNavigate();






    const ver = async (idx) => {

        const uriVideo = baseUrl + '/movie/' + datos1[idx].id + keyApi + '&append_to_response=videos';
        const { data } = await axios.get(uriVideo);

        
        
        if(data.videos.results.length==0){
            console.log('====================================');
            console.log('es null');
            console.log('====================================');
            setKey('4xRG-6-J0mA')
        }else{
            console.log('====================================');
            console.log('no es null');
            console.log('====================================');
            setKey(data.videos.results[0].key)
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

        const { data } = await axios.get(urlTmdb + "&page=" + page + '&append_to_response=videos');
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
            <h1>Pelis Play</h1>
            <div className="cardCont">
                {datos1.map((element) => (
                    <div key={element.id}>
                        <div className="card">
                            <div className="titleCont">
                                <h1 >{element.title}</h1>
                            </div>
                            <div className="imgCont" onClick={() => { ver(datos1.indexOf(element)) }}>
                                <img className="imgPeli" src={`${imagePath + element.poster_path}`}></img>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="btnNextCont">
                <button className="btnNext" onClick={() => { prev() }}>PREV</button>
                <h1>{page}</h1>
                <button className="btnNext" onClick={() => { next() }}>NEXT</button>
            </div>
        </div>



    );
};

export default Peliculas