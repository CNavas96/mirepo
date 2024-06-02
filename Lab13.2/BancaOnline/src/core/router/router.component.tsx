import { BrowserRouter, Route, Routes } from "react-router-dom"
import { 
    AccountListPage, 
    CreateAccountPage, 
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
                <Route path={appRoutes.editAccount} element={<CreateAccountPage/>} />
                <Route path={appRoutes.movements} element={<MovementListPage/>} />
                <Route path={appRoutes.transfer} element={<TransferPage/>} />
                <Route path={appRoutes.tranferFromAccount} element={<TransferPage/>} />
            </Routes>
        </BrowserRouter>
    );
};