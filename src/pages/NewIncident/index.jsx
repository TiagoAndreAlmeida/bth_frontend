import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import './styles.css';

const NewIncident = () => {

    return (
        <div className='new-incident-container'>
            <div className='content'>
                <section>
                    <img src={logo} alt='Be The Hero'/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to='/'>
                        <FiArrowLeft size={16} color='#e02041'/> Voltar para Home
                    </Link>
                </section>
                <form>
                    <input placeholder='Titulo do caso' />
                    <textarea placeholder='Descrição'/>
                    <input placeholder='Valor em reais' />
                    
                    <button className='button' type='submit'>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident;