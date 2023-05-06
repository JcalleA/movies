import React from "react";
import { useLocation } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import "./PeliculaInfo.css"


const PeliculaInfo = () => {
    const location = useLocation();


    return (
        <div >
            <div className="infoCont1">
                <div className="iconCont">
                    <ImExit />
                </div>
                <div className="title1">
                    <h1>{location.state.title}</h1>
                </div>
            </div>

            <div className="infoCont1">
                <div className="imgCont1">
                    <img src={location.state.image}></img>
                </div>
                <div className="listCont1">
                    <ol>
                        <li>{location.state.title}</li>
                        <li>{location.state.title}</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default PeliculaInfo;