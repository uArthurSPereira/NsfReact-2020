import React, { useState } from 'react'

export default function Page3() {

    const [mensagem, setMensagem] = useState("HeHe Boy");
    const [nome, setNome]         = useState("Arthur");
    const [linguagens, setLinguagens] = useState(['Html', 'Css', 'JavaScript', 'C#', 'MySql'])

    return (
        <div className="page3">

            <h2> {mensagem} </h2>

            {nome === 'Arthur' &&
                <h3>{nome} é lindo</h3>
            }

            {nome !== 'Arthur' &&
                <h3>{nome} é feio</h3>
            }

            <ol>

                {linguagens.map(item => 
                    <li key={item}>{item}</li>  
                )}

            </ol>

        </div>
    )
}