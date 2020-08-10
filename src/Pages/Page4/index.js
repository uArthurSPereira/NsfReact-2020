
import React, { useState } from 'react';

export default function Page4() {

    const [mensagem, setMensagem] = useState('')
    const [nome, setNome]         = useState('')
    const [valor, setValor]       = useState('')

    const botaoClick = () => {
        setMensagem(nome)
    }



    return ( 
        <div className="page4">
            <h1>Eventos</h1>

            <h2>{mensagem}</h2>

            <label>Nome: </label>
            <input type="text" 
                onChange={(e) => setNome(e.target.value)}
            />

            <div>
                <button onClick={botaoClick}>
                    Clique se for capaz
                </button>
            </div>

            <h2>Valor</h2>

            <div>
                <input type="number" 
                    onChange={(e) => setValor(Number(e.target.value))}
                />
            </div>

            <div>
                <input type="checkbox" 
                    onChange={(e) => setValor(Boolean(e.target.checked))}
                />
            </div>

            <div>
                <input name="sexo"
                    type="radio" 
                    onChange={(e) => setValor(Boolean(e.target.checked))}
                /> Masculino

                <input name="sexo"
                    type="radio" 
                    onChange={(e) => setValor(Boolean(e.target.checked))}
                /> Feminino
            </div>

            <div>
                <input type="date" 
                    onChange={(e) => setValor(Date(e.target.checked))}
                />
            </div>

            <h3> {valor} </h3>

        </div>
    )
}