import './style.css';
          
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'FAVORITOS']
          
function OpcoesHeader() {
    return (
                <ul className='opcoes'>
                    {
                        textoOpcoes.map((textoOpcao, index)=>(
                            <li className='opcao' key={index}>
                                <p>{textoOpcao}</p>
                            </li>
                         ))}
                    </ul>
                    )
          }
          
export default OpcoesHeader
