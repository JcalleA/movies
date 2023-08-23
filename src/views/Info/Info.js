import React, { useEffect,  useState } from "react";
import axios from "axios";
import { ImExit } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import PeliculaInfo from '../../modules/Peliculas/PeliculaInfo'
import './Info.css'

const Info = () => {

    const keyApi = process.env.REACT_APP_APIKEY_TMDB+ '&language=es-ES'
    const baseUrl = 'https://api.themoviedb.org/3';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const [datos, setDatos] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
    const [keyVideo,setKeyVideo]=useState('');


    const getPelicula = async () => {

        const uriVideo = baseUrl + '/movie/' + params.id + keyApi + '&append_to_response=videos';
        const { data } = await axios.get(uriVideo);
        
        setDatos(data);

        if (data.videos.results.length == 0) {
            setKeyVideo('VKeJ2mzPszY');
        } else {
            setKeyVideo(data.videos.results[0].key)
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
                date={datos.release_date}
            ></PeliculaInfo>
        </div>



    );
};

export default Info;