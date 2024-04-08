import logo from '../assets/airbnb-logo.png'
export default function Header() {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" />
        </nav>
    )
}