import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { ImExit } from "react-icons/im";
import axios from "axios";
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';


const Genres = () => {

    const navigate = useNavigate();
    
    
    
    const salir = () => {
        navigate("/")
    }
    

    return (
        <div>
            <h1>desde genre</h1>
        </div>
    )
}
export default Genres;