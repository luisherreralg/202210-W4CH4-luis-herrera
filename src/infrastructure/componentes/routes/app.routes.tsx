import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../../../features/home/home';
import { RobotList } from '../../../features/robotList/robotList';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="robotlist" element={<RobotList></RobotList>}></Route>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
