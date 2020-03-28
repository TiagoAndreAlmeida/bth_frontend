import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import heroesimg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import './styles.css';

const Logon: React.FC = () => (
    <div className='logon-container'>
        <section className='form'>
            <img src={logo} alt='Be The Hero'/>
            <form>
                <h1>Faça seu logon</h1>
                <input placeholder='sua id' />
                <button type='submit' className='button'>
                    Entrar
                </button>
                <Link to='/registro'>
                    <FiLogIn size={16} color='#e02041'/>
                    não tenho cadastro
                </Link>
            </form>
        </section>
        <img src={heroesimg} alt='Be The Hero'/>
    </div>
);

export default Logon;