import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ImExit } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import PeliculaInfo from '../../modules/Peliculas/PeliculaInfo'
import './Info.css'

const Info = () => {

    const keyApi = '?api_key=01f8864c658ff852bda51d8e300d91de&language=es-ES';
    const baseUrl = 'https://api.themoviedb.org/3';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const search = '/search/movie';
    const discover = '/discover/movie';
    const consulta = '&query=';
    const [datos, setDatos] = useState([]);
    const [page, setPage] = useState(1);
    const urlTmdb = baseUrl + discover + keyApi;
    const genreApi = '/genre/movie/list';
    const navigate = useNavigate();
    const params = useParams();
    let keyVideo;





    const getPelicula = async () => {

        const uriVideo = baseUrl + '/movie/' + params.id + keyApi + '&append_to_response=videos';
        const { data } = await axios.get(uriVideo);
        console.log('====================================');
        console.log(data.videos.results[0].key);
        console.log('====================================');
        setDatos(data);

        if (data.videos.results.length == 0) {
            keyVideo = 'VKeJ2mzPszY'
        } else {
            keyVideo = data.videos.results[0].key
        }
    };

    const salir = () => {
        navigate("/")
    }

    useEffect(() => {
        getPelicula();
    }, [])



    return (

        <div>
            <div className='header2'>
                <div>
                    <h1>ALURAFLIX</h1>
                </div>
                <div>
                    <ImExit className='icon2' onClick={() => { salir() }} />
                </div>

            </div>

            <PeliculaInfo
                key={datos.id}
                title={datos.title} datos
                image={imagePath + datos.poster_path}
                id={datos.id}
                description={datos.overview}
                rate={datos.vote_average}
                count={datos.vote_count}
                urlVideo={keyVideo}
            ></PeliculaInfo>
        </div>



    );
};

export default Info;