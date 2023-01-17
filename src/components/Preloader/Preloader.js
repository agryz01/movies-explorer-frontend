import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    // console.log('загрузка', props.isLoading);

    const className = !props.isLoading? 'preloader': 'preloader preloader_activ';

    return (
        <div className={className}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
