import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Peliculas.css";

const Peliculas = () => {




    const keyApi = '?api_key=01f8864c658ff852bda51d8e300d91de';
    const baseUrl = 'https://api.themoviedb.org/3';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const search = '/search/movie';
    const discover = '/discover/movie';
    const consulta = '&query=';
    const [datos1, setDatos] = useState([]);
    const [page, setPage] = useState(1);
    const urlTmdb = baseUrl + discover + keyApi;
    const yts = "https://yts.mx/api/v2/list_movies.json";
    const consulta2 = "?query_term=";
    const uri ="http://localhost:4000/1080/Video"; //"https://back-movies-jwyg.onrender.com/1080/Video";
    const external = baseUrl+"/find/tt10151854"+keyApi+"&external_source=imdb_id";


    const getPeliculas = async (page) => {
        
        const datos = await axios.get(uri);
        setDatos(datos.data);
        console.log(datos.data);
// category:"207"  id:"55131929"   imdb: ""
// magnet:"magnet:?xt=urn:btih:CF109D8D0CFE46BFE7AC5378B587D27B71DD87A8&dn=The%20Matrix%20Resurrections%20(2021)%20%5B1080p%5D%20%5BWEBRip%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce"
// numFiles: 8 peers: 29   provider: "ThePirateBay"    seeds: 473
// size: "2.9 GB"  status: "vip"   time : "Wed, 22 Dec 2021 13:59:13 GMT"
// title:"The Matrix Resurrections (2021) [1080p] [WEBRip]"


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
            <h1>Esto es home</h1>
            <div className="cardCont">
                {datos1.map((element) => (
                    <div>
                        <div className="card">
                            <div className="titleCont">
                                <h1 >{element.title}</h1>
                            </div>
                            <div className="imgCont">
                                <img className="imgPeli" src={`${element.medium_cover_image
                                    }`}></img>
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