import React from 'react'
import logo from '../../src/logo.svg'

function Card({title, description}) {
    return (
        <div>
            <div class="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    )
}

export default Card