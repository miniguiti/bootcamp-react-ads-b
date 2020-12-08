import React from 'react'
import NavBar from '../components/NavBar'
import {Link} from 'react-router-dom'

function Logout() {
    return (
        <>
            <NavBar/>
            <div className="end">
                <div className="end-info">
                    <h1>Até logo, Giu!</h1>
                    <h2>Nos vemos nas próximas aulas</h2>
                    <Link to="/">
                        <button className="btn-rosa">Voltar</button>
                    </Link>
                    
                </div>
                <div className="end-img"></div>
            </div>
        </>
    );
}

export default Logout;