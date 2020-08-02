import React from 'react';
import Logo from '../../assets/imgs/logo.png'
import './menu.css';
import Button from '../components/ButtonLink'

function Menu(){
    return(
        <nav className='Menu'>
            <a href='/'>
                <img src={Logo} className='Logo' alt="magaldiflix"/>
            </a>

            <Button as="a" className='ButtonLink' href='/'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;