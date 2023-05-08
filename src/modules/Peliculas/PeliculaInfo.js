import React from "react";
import { useLocation,useNavigate } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import "./PeliculaInfo.css"


const PeliculaInfo = () => {
    
    const navigate = useNavigate();  
    const location = useLocation();
    const salir =()=>{
        navigate("/")
    }


    return (
        <div >
            <div className="infoCont2">
                <div className="iconCont">
                    <ImExit className="icon1" onClick={()=>{salir()}}/>
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
                        <li>{location.state.rate}</li>
                        <li>{location.state.count}</li>
                        <li>
                            <a href={location.state.link}>descarga</a>
                        </li>
                                                
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default PeliculaInfo;