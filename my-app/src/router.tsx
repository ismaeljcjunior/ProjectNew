import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RegisterProd } from './pages/RegisterProd'
import { Login } from './components/Login/InputLogin'
import { Home } from './pages/Home'
import { RegisterUser } from './pages/RegisterUser'
import { ContextProvider } from './contexts/Context'
import { NotFound } from './pages/NotFound'

export const Router = () => {

    return(
        <ContextProvider>
            <BrowserRouter>
                <Routes>

                    <Route path="/*" element={<Login />}/>
                    <Route path="/Login" element={<Login />}/>
                    <Route path="/Home" element={<Home />}/>
                    <Route path="/RegisterProd" element={<RegisterProd />}/>
                    <Route path="/RegisterUser" element={<RegisterUser />}/>
                    <Route path="/NotFound" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    )
}