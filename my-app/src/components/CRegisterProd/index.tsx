
import { Theme } from '../Theme'
import * as C from './styles'



export const CRegisterProd = () => {

    return (
       
        <C.Container>
            <div>
                <form>
                    <label>
                        Nome:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </C.Container>
    )
}