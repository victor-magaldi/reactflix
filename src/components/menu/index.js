import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/imgs/logo.png'
import './menu.css';
import Button from '../components/ButtonLink'

function Menu(){
    return(
        <nav className='Menu'>
            <Link to='/'>
                <img src={Logo} className='Logo' alt="magaldiflix"/>
            </Link>

            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;