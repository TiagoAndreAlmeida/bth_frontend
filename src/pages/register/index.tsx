import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import './styles.css';

const Register = () => {

    return (
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={logo} alt='Be The Hero'/>
                    <h1>Registro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os cados da sua ONG.</p>
                    <Link to='/'>
                        <FiArrowLeft size={16} color='#e02041'/> Voltar
                    </Link>
                </section>
                <form>
                    <input placeholder='Nome da ONG' />
                    <input placeholder='E-mail' type='email'/>
                    <input placeholder='WhatsApp' />

                    <div className='input-group'>
                        <input placeholder='Cidade' />
                        <input placeholder='UF' style={{width: 70}}/>
                    </div>
                    <button className='button' type='submit'>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;