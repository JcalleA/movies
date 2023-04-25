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
    const [datos, setDatos] = useState([])


    const sendGetRequest = async () => {
        try {
            axios
            .get(baseUrl + discover + keyApi)
            .then((res) => {
                const data = res.data;
                setDatos(data.results);
                console.log(datos);
            })
            .catch((error) => console.log(error))
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    
    sendGetRequest();

    
    return (

        <div>
        <h1>Esto es home</h1>
            {datos.forEach(element => {
                <div>
                    <h1>Peliculas</h1>
                    <div className="card">
                        <h1>${element.title}</h1>
                        <div className="imgCont">
                            <img className="imgPeli"></img>
                        </div>
                    </div>
                </div>
            })}
        </div>



    );
};

export default Peliculas