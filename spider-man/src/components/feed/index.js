import React from "react";
import './style.css';
import {Perfil} from '../perfil'
import {Post} from '../post'

export function Feed(){
    return(
        <div className="feed">
            <div className="header">
                <Perfil/>
                <div className="divider" />
                <h1>@nick</h1>
            </div>
            <div className="posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}