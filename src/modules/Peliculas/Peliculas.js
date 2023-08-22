import React, { useEffect, useRef, useState } from "react";
import "./Peliculas.css";

import { useNavigate } from "react-router-dom";


const Peliculas = (props) => {
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const navigate =useNavigate();



    return (
        <div>
            <div className="cardCont">
                    <div key={props.id}>
                        <div className="card">
                            <div className="titleCont">
                                <h1 >{props.title}</h1>
                            </div>
                            <div className="imgCont" onClick={() => { navigate('/info/'+props.id) }}>
                                <img className="imgPeli" src={`${imagePath + props.poster}`}></img>
                            </div>
                        </div>
                    </div>
            </div>
        </div>



    );
};

export default Peliculas