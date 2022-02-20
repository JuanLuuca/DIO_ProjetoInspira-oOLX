import React from 'react';
import { FooterArea }  from './styled';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <FooterArea>
            <Link to='/about' className='about'>Todos os direitos reservados<br/>
                DIO
            </Link>
        </FooterArea>
    );
}
