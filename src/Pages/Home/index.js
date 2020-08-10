
import React from 'react';

import { Link } from 'react-router-dom'

export default function Home() {

    return ( 
        <div className="home">
            <h1>Home</h1>
            <Link to="/pagina1"> Ir para página1 </Link>
            <br />
            <Link to="/pagina2"> Ir para página2 </Link>
            <br />
            <Link to="/pagina3"> Ir para página3 </Link>
            <br />
            <Link to="/pagina4"> Ir para página4 </Link>
            <br />
            <Link to="/pagina5"> Ir para página5 </Link>
            <br />
            <Link to="/pagina6"> Ir para página6 </Link>
            
        </div>
    )
}