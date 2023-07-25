import React from 'react'
import BackgroundImg from '../../../assets/hero-image/bgimg.png'

const HeroScreen = () => {
    return (
        <div style={{ height: '20rem', backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '20px' }} />
    )
}

export default HeroScreen;