import * as C from '../../pages/login/styles'
import { Link } from 'react-router-dom'







export const Login = () => {


    return (
        <C.Container>
            <div>
                <label>
                    <span>Digite o usuario</span>
                    <input 
                    type="text" 
                    placeholder="usuario" 
                    />
                    <br />

                    <span>Digite a senha</span>
                    <input 
                    type="text" 
                    placeholder="Senha" 
                    />

                    <br />
                    <Link to="/Home">Login</Link>

                    <p>Não possui conta? </p> <Link to="/RegisterPeople">Cadastro</Link>
                </label>
            </div>
        </C.Container>
    )
}