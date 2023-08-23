import React, { useState,useEffect} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import "./Header.css"
import axios from 'axios';




const Header = () => {

    const keyApi = '?api_key=01f8864c658ff852bda51d8e300d91de&language=es-ES';
    const baseUrl = 'https://api.themoviedb.org/3';
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const search = '/search/movie';
    const discover = '/discover/movie';
    const consulta = '&query=';
    const [genres, setGenres] = useState([]);
    const urlTmdb = baseUrl + discover + keyApi;
    const genreApi = '/genre/movie/list';
    const navigate = useNavigate();
    const [menu,setMenu] = useState('menuHidden');
    const [categoryButon, setCategoryButon]=useState('buttonVisible')
    const [data1,setData1]=useState([]);


    const getGenres = async () => {

        const { data } = await axios.get(baseUrl+genreApi+keyApi );
        setGenres(data.genres);
    }

    useEffect(() => {
        getGenres();
    }, [])

    const viewMenu = ()=>{

        if (menu ==='menuVisible'){
            setMenu('menuHidden');
        }else{
            setMenu('menuVisible')
        }
    }


    const verGenre=async(genre)=>{
        
        const { data } = await axios.get(baseUrl+discover+keyApi+'&with_genres='+genre );
        console.log('====================================');
        console.log(data);
        console.log('====================================');

    }
    


    return (
            <header className="header">
            <div className='headerContent'>
                
                    <Link to="/" className="header__content__logo">
                        <img className="img-logo"
                            src="https://aluraflix-jade.vercel.app/static/media/Logo.5e7b3578.png"
                            alt="Imagen del logo">
                        </img>
                    </Link>
                    <button className={categoryButon} onClick={()=>{viewMenu()}}>Categorias</button>
                </div>
                <li className={menu}>
                    {genres.map((element)=>(
                            <button key={element.id} onClick={()=>{viewMenu();navigate('/genres/'+element.name+'/'+element.id)}} >{element.name}</button>
                        ))}
                    </li>
                    
            </header>
    );

};
export default Header;