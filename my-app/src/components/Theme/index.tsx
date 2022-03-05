import { ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../Header'
import * as C from './styles'




type Props = {
    children: ReactNode
}

export const Theme = ({children }: Props) =>{


    return (
        <div>
        <Header />
            
            <C.Container>
            <C.Page>
                {children}
            </C.Page>
                
            </C.Container>
            
        <C.Footer>
            <footer><Link to ='/Home'> <button>Voltar para Home</button></Link></footer>   
        </C.Footer>  
        
        </div>
        
    )
}





/*
export const Theme = ({children }: Props) => {



    /*

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Options>
                    <C.Sidebar>
                       aaaaaaaaaaaaaaaa

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Options>
            </C.Area>

        </C.Container>
    )
}

*/