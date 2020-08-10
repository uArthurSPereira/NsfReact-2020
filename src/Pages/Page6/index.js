import React, { useState, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PacmanLoader, ScaleLoader } from 'react-spinners';
import LoadingBar from 'react-top-loading-bar';

export default function Page6() {

    const [consultando, setConsultando] = useState(false)

    const ref = useRef(null)

    const salvarClick = () => {
        toast.success('🚀 Salvo com sucesso!')
    }

    const errorClick = () => {
        toast.error('😿 Erro ao salvar')
    }

    const conslutarClick = () => {
        setConsultando(true)
        ref.current.continuousStart()
    }

    return (
        <div>
             <LoadingBar color='#f11946' height={4} ref={ref} />

            <h1>Alertas & Loading</h1>

            <div>
                <button onClick={salvarClick}> Salvar </button>
            </div>
             
            <div>
                <button onClick={errorClick}> Erro </button>
            </div>

            <div>
                <button onClick={conslutarClick}> Consultar </button>
            </div>

            <ScaleLoader
                color={"#123abc"}
                loading={consultando}    
            />
            
            <ToastContainer />
        </div>
    )
}