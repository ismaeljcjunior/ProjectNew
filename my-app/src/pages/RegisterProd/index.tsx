import { Link } from 'react-router-dom'
import { CRegisterProd } from '../../components/CRegisterProd'
import { Theme } from '../../components/Theme'
import * as C from './styles'


export const RegisterProd = () => {

    return(
        <Theme>
            <C.Container>
                Cadastrar Produto
                
                <CRegisterProd />
                              
            </C.Container>
        </Theme>
    )
}