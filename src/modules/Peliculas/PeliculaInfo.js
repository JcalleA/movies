import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import "./PeliculaInfo.css"


const PeliculaInfo = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const salir = () => {
        navigate("/")
    }
    const rating = (rat) => {
        console.log(Math.round((rat / 2)));
        let rate = '';
        for (let i = 0; i < Math.round((rat / 2)); i++) {
            rate = rate + ' ⭐'
        }
        return (
            rate
        )

    }


    return (
        <div >
            <div className="infoCont2">
                <div className="title1">
                    <h1>{location.state.title}</h1>
                </div>
                <div className="iconCont">
                    <ImExit className="icon1" onClick={() => { salir() }} />
                </div>
            </div>
            <div className="infoCont1">
                <div className="imgCont1">
                    <img src={location.state.image}></img>
                </div>
                <div className="listCont1">
                    <h1>Rating:{location.state.rate}<h2>{rating(location.state.rate)}</h2></h1>
                    <h1>Total votos:<br></br>{location.state.count}</h1>
                    <h1>Descargar Torrent:<br></br>
                        <a href={location.state.link}>
                            <button className="btnDesc">Descargar</button>
                        </a><br></br>
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default PeliculaInfo;