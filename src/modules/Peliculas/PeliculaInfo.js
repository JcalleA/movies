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
                    <div className="tableCont">
                        <table >
                            <tr>
                                <td>
                                    <h1>Rating:</h1>
                                </td>
                                <td>
                                    <h1>
                                        {location.state.rate}
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1>
                                        Total votos:
                                    </h1>
                                </td>
                                <td>
                                    <h1>
                                        {location.state.count}
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1>
                                        Descarga Torrent:
                                    </h1>
                                </td>
                                <td>
                                    <a href={location.state.link}>descarga</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PeliculaInfo;