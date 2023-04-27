import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Peliculas.css";
const Peliculas = () => {

    const keyApi = '?api_key=01f8864c658ff852bda51d8e300d91de&language=es-ES';
    const baseUrl = 'https://api.themoviedb.org/3';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const search = '/search/movie';
    const discover = '/discover/movie';
    const consulta = '&query=';
    const [datos1, setDatos] = useState([]);
    const [page, setPage] = useState(1);



    const getPeliculas = async (page) => {

        const { data: { results } } = await axios.get(baseUrl + discover + keyApi + "&page=" + page)

        setDatos(results)
    }
    useEffect(() => {
        getPeliculas();
    }, [])

    const next = ()=>{
        const nPage = page+1;
        getPeliculas(nPage);
        setPage(nPage);
    }
    const prev = ()=>{
        
        if (page==1){


        }else{
        
        const nPage = page-1;
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
                    <div>
                        <div className="card">
                            <div className="titleCont">
                                <h1>${element.title}</h1>
                            </div>
                            <div className="imgCont">
                                <img className="imgPeli" src={`${imagePath + element.backdrop_path}`}></img>
                            </div>
                            <div className="btnVerCont">
                                <button className="btnVer">VER</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="btnNextCont">
                <button className="btnNext" onClick={()=>{next()}}>NEXT</button>
                <h1>{page}</h1>
                <button className="btnNext" onClick={()=>{prev()}}>PREV</button>
            </div>
        </div>



    );
};

export default Peliculas