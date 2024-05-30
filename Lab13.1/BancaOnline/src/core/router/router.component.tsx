import { BrowserRouter, Route, Routes } from "react-router-dom"
import { 
    AccountListPage, 
    AccountPage, 
    LoginPage, 
    MovementListPage, 
    TransferPage, 
} from "@/pages"
import { appRoutes } from "./routes";


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={appRoutes.root} element={<LoginPage/>} />
                <Route path={appRoutes.accounList} element={<AccountListPage/>} />
                    {/* aqui va la ruta de unos de los lab */}
                <Route path={appRoutes.editAccount} element={<AccountPage/>} />
                <Route path={appRoutes.movements} element={<MovementListPage/>} />
                <Route path={appRoutes.transfer} element={<TransferPage/>} />
                <Route path={appRoutes.tranferFromAccount} element={<TransferPage/>} />
            </Routes>
        </BrowserRouter>
    );
};