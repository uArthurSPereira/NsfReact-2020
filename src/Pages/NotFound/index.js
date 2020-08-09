
import React from 'react';

import Erro from './NotFound.png'

export default function NotFound() {

    return ( 
        <div className="notfound">
            <img src={Erro} alt="Não encontrado" />
        </div>
    )
}