import './style.css';
import logo  from '../../assets/icons/logo.svg';

function Logo() {
    return(
        <div className='logo'>
            <img src={logo} alt='logo do site' className='logo-img'/>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;
