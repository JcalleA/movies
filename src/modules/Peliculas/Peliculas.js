import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Peliculas.css";

import { useNavigate } from "react-router-dom";


const Peliculas = () => {
    
    const provider ={
        tpb:["ThePirateBay","Video"],
        t9:["Torrent9","Movies"],
        tz:["Torrentz2","Movies"],
        t13:["1337x","Movies"]
    }

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
    const uri = "https://back-movies-jwyg.onrender.com/";
    const external = baseUrl + "/find/tt10151854" + keyApi + "&external_source=imdb_id";
    const navigate = useNavigate();


    


    const ver = (idx) => {
        navigate('/Pelicula', {
            state: {
                id: datos1[idx].id,
                title: datos1[idx].title,
                image: imagePath + datos1[idx].poster_path,
                description: datos1[idx].overview,
                rate:datos1[idx].vote_average,
                count:datos1[idx].vote_count,
                link:datos1[idx].torrent.magnet
            }
        });
    };
    
    const getPeliculas = async (page) => {

        const { data } = await axios.get(urlTmdb+"&page="+page);
        let lis = [];

        data.results.forEach(element => {
            lis.push(axios.get(uri + element.original_title.replace(/[.!¡?¿:,;-]/g,'').normalize('NFD').replace(/[\u0300-\u036f]/g,"")+" dual/"+provider.tpb[1]+"/"+provider.tpb[0]))
            
        });
        console.log(lis);
        const promises = await axios.all(lis);
        let listaFull = [];
        let n = 0;
        data.results.forEach((item) => {
            item.torrent = promises[n].data[0];
            listaFull.push(item);

            n = n + 1;
        })
        setDatos(listaFull);
        

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
    console.log(datos1);

    return (

        <div>
            <h1>Esto es home</h1>
            <div className="cardCont">
                {datos1.map((element) => (
                    <div key={element.id}>
                        <div className="card">
                            <div className="titleCont">
                                <h1 >{element.title}</h1>
                            </div>
                            <div className="imgCont" onClick={()=>{ver(datos1.indexOf(element))}}>
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