import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import css
import './header.css';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
    return (
        <nav>
            <img className="lupa_nav" id="lupa_img_nav" src="imagenes/home_page/lupa.png" alt=''></img>
            <input id="input_search_nav" className="input_search_nav"/>
            <a href="https://wiki-marvel-git-2a04b3464a8d.herokuapp.com/personajes"><div id="personajes_nav" className="personajes_nav">PERSONAJES</div></a>
            <a href="https://wiki-marvel-git-2a04b3464a8d.herokuapp.com/album"><div id="album_nav" className="album_nav">ALBUMS</div></a>
            <a href="https://wiki-marvel-git-2a04b3464a8d.herokuapp.com/mi_album"><div id="mi_album_nav" className="mi_album_nav">MI ALBUM</div></a>
            <a href="https://wiki-marvel-git-2a04b3464a8d.herokuapp.com/register"><img id="cuenta_nav" className="cuenta_nav" src="imagenes/home_page/account.png"></img></a>
        </nav>
    );
}

