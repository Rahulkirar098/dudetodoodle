import React from 'react'
import './style.css'

export const ComingSoon = () => {
    return (
        <div className="coming_soon">
            <div>
                <img src={'./images/comingsoon/Cat.svg'} style={{ width: '7%', marginRight: '2%', float: 'right' }} alt='Cat' />
            </div>

            <div>
                <h1 style={{ fontFamily: 'outfit' }}>COMING SOON</h1>
                <h1>"We are preparing something exciting & amazing for you"</h1>
            </div>

            <div>
                <img src={'./images/comingsoon/Dog.svg'} style={{ width: '10%' }} />
            </div>

            <div>
                <h1 style={{ fontFamily: 'outfit' }}>Contact : hello@dudetodoodle.in</h1>
            </div>

        </div>
    )
}
