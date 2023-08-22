import React from "react";
import {  useNavigate } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import "./PeliculaInfo.css"
import YouTube from 'react-youtube';


const PeliculaInfo = (props) => {

    const navigate = useNavigate();
    const opts = {
        height: '300',
        width: '90%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    
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

    console.log('===============desde props video=====================');
    console.log(props.urlVideo);
    console.log('====================================');


    return (
        <div >
            <div className="infoCont2">
                <div className="title1">
                    <h1>{props.title}</h1>
                </div>
                
            </div>
            <div className="infoCont1">
                <div className="imgCont1">
                    <img src={props.image}></img>
                </div>
                <div className="listCont1">
                    <h1>Rating:{props.rate}<h2>{rating(props.rate)}</h2></h1>
                    <h1>Total votos:<br></br>{props.count}</h1>

                </div>
            </div>
            <p>
                {props.description}
            </p>
            <div>
                <YouTube videoId={props.urlVideo} opts={opts} />
            </div>
        </div>
    )
}
export default PeliculaInfo;