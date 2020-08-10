import React from 'react';

export default function filho(props) {

    return (
        <div className="filho">
            <h2>filho</h2>

            <h3>
                {props.nome} - {props.idade} anos    
            </h3> 
            <h3>
                Futebol: {props.esportes.futebol}
                <br />
                Basquete: {props.esportes.basquete}
            </h3>

            <div>
                <ul>
                    {props.musica.map(item =>
                        <li key={item}> {item} </li>    
                    )}
                </ul>
            </div>


        </div>
    )
}