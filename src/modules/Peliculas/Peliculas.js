import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Peliculas.css";
import { ImExit } from "react-icons/im"
const Peliculas = () => {

    const keyApi = '?api_key=01f8864c658ff852bda51d8e300d91de&language=es-ES';
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
    const uri = "http://localhost:4000/"; //"https://back-movies-jwyg.onrender.com/1080/Video";
    const external = baseUrl + "/find/tt10151854" + keyApi + "&external_source=imdb_id";
    const display = {
        display: "none"
    };

    const colorRef = useRef();
    const ver = () => {
        colorRef.current.style.display = 'block';
    };


    const getPeliculas = async (page) => {

        const { data } = await axios.get(urlTmdb);
        let lis = [];

        data.results.forEach(element => {
            lis.push(axios.get(uri + element.title))
        });
        const promises = await axios.all(lis);
        let listaFull = [];
        let n = 0;
        data.results.forEach((item) => {
            item.torrent = promises[n].data[0].magnet;
            listaFull.push(item);
            console.log(listaFull);
            n = n + 1;
        })
        setDatos(listaFull);
        console.log(datos1);

    }

    const salir = (id) => {

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
                            <div className="imgCont" onClick={ver}>
                                <img className="imgPeli" src={`${imagePath + element.poster_path}`}></img>
                            </div>
                        </div>
                        <div className="modal" ref={colorRef}>
                            <div className="modalCont" >
                                <div className="modalIconCont">
                                    <ImExit onClick={salir(`${element.id}`)} />
                                </div>
                                <div className="modalImgCont">
                                    <img className="modalImg" src={`${imagePath + element.poster_path}`}></img>
                                </div>
                                <div className="modalListCont">
                                    <ol>
                                        <li>Rate: {element.vote_average}</li>
                                        <li>Total Votos: {element.vote_count}</li>
                                        <li>Lanzamiento: {element.release_date}</li>
                                    </ol>
                                </div>
                                <div className="modalParrafo">
                                    <p>Descripcion: <br></br>{element.overview}</p>
                                </div>
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