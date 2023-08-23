import React, { useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css"
import axios from 'axios';




const Header = () => {

    const keyApi = process.env.REACT_APP_APIKEY_TMDB+ '&language=es-ES'
    const baseUrl = 'https://api.themoviedb.org/3';
    const discover = '/discover/movie';
    const [genres, setGenres] = useState([]);
    const genreApi = '/genre/movie/list';
    const navigate = useNavigate();
    const [menu,setMenu] = useState('menuHidden');
    const [categoryButon, setCategoryButon]=useState('CATEGORIAS')


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
            setCategoryButon('CATEGORIAS');
        }else{
            setMenu('menuVisible');
            setCategoryButon('OCULTAR');
            
        }
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
                    <button className='buttonVisible' onClick={()=>{viewMenu()}}>{categoryButon}</button>
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