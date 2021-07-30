import React from 'react'
import {Perfil} from '../perfil'
import './styles.css';

export function Account(){
    return(
        <section className="container">
            <div className="cover">
                <h1>emoji - seguidores</h1>
                <div className="user">
                    <Perfil/>
                    <div className="divisor" />
                    <div className="user-data">
                        <h1 className="name">nome</h1>
                        <h2 className="nick">@nick</h2>
                    </div>
                </div>
            </div>
            
            
        </section>
    );
}