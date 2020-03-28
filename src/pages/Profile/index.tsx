import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './styles.css'

const Profile = () => {

    return (
        <div className='profile-container'>
            <header>
                <img src={logo} alt='logo'/>
                <span>Bem vinda, APAD</span>
                <Link to='/incidente/novo' className='button'>Cadastrar novo caso</Link>
                <button type='button'>
                    <FiPower size={18} />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>
                    
                    <strong>VALOR</strong>
                    <p>R$ 200,00</p>

                    <button>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>
                    
                    <strong>VALOR</strong>
                    <p>R$ 200,00</p>

                    <button>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>
                    
                    <strong>VALOR</strong>
                    <p>R$ 200,00</p>

                    <button>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>
                        Caso teste
                    </p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Descrição teste</p>
                    
                    <strong>VALOR</strong>
                    <p>R$ 200,00</p>

                    <button>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Profile;