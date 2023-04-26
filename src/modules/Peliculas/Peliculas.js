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
    const num = 1;
    const [datos1, setDatos] = useState([])


    useEffect(() => {
        axios.get(baseUrl + discover + keyApi)
            .then((res) => {
                console.log(res);
                const resultado = res.data
                setDatos(resultado.results)
            })
            .catch((error) => (console.error(error)))

    }, [])


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
                    </div>
                </div>
            ))}
        </div>
        </div>



    );
};

export default Peliculas