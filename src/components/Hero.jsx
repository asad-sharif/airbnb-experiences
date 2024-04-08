import hero from '../assets/hero-img.png';

export default function Hero() { 
    return (
        <div className='hero'>
            <img src={hero} alt="hero" className='hero-img'/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}