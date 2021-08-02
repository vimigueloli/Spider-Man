import React from 'react'
import {Perfil} from '../perfil'
import './styles.css';

export function Account(){
    return(
        <section className="container">
            <div className="cover">
                <a>emoji - seguidores</a>
                <div className="user">
                    <Perfil/>
                    <div className="divisor" />
                    <div className="user-data">
                        <div>
                            <a className="name">nome</a>
                        </div>
                        <div>
                            <a className="nick">@nick</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bio">
                <a className="bio-text">your friendly neighborhood web-slinger Spider Man</a>
                <img className="toon" alt="spider toon" src='https://raw.githubusercontent.com/vimigueloli/Spider-Man/main/spider-man/src/assets/toonSpider.png' />
                <div className="localInfo">
                    <div className="location"></div>
                    <div className="Info">
                        <div className="location-data">
                            <div className="data">
                                <p className="temp">-3º</p>
                                <p className="place">New York</p>
                            </div>
                            <div className="sky"> :) </div>
                        </div>
                        <div className="sky-bar"></div>
                        <div className="sky-status"> light snow</div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}