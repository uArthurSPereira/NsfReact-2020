import React, { useState } from 'react';

import Filho from '../../Components/Filho'

export default function Pai() {

    const [nome, setNome] = useState('Johnn')
    const [idade, setIdade] = useState(16)
    const [esportes, setEsportes] = useState({
        futebol: 'Manja muito',
        basquete: 'Manja nada'
    })
    const [musica, setMusica] = useState(['Forró', 'Trap', 'Rap', 'Eletronica'])

    return (
        <div className="pai">
            <h2>Pai</h2>

            <Filho nome={nome}
                   idade={idade}
                   esportes={esportes}
                   musica={musica}/>

        </div>
    )
}