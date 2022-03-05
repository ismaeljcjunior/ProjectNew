import { useState } from 'react'
import { Theme } from '../../components/Theme'
import * as C from './styles'
import { Link } from 'react-router-dom'

export const Home = () => {

    return(
        <Theme>
            <C.Container>
                Home 
                <br />

                <Link to ='/RegisterProd'> <button>Cadastrar Produto</button></Link>
                <Link to ='/RegisterUser'> <button>Cadastrar Usuário</button></Link>
                <Link to ='/RegisterProd'> <button>Cadastrar opçao 3</button></Link>
                
            </C.Container>
        </Theme>
       
    )
}