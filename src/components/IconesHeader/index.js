import './style.css';

import sacola  from '../../assets/icons/sacola.svg';
import perfil  from '../../assets/icons/perfil.svg';

const icones = [sacola , perfil]

function IconesHeader() {
  return (
           <ul className='icones'>
            {
               icones.map((icone, index)=> (
                <li key={index}>
                  <img className='icone' src={icone} alt='icone'/>
                </li>
              ))}           
        </ul>
  )
}

export default IconesHeader


