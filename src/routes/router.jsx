import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../components/pages/Home";
import MainLayout from './../components/MainLayout';
import Error from "../components/pages/Error";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "../components/ForgetPass";
import AllSportsEquipments from "../components/pages/AllSportsEquipments";
import AddEquipment from "../components/pages/AddEquipment";
import MyEquipments from "../components/pages/MyEquipments";
import ViewDetails from "../components/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allSports',
                element: <AllSportsEquipments></AllSportsEquipments>,
                loader: () => fetch('http://localhost:5000/equipments')
            },
            {
                path: '/addEquipment',
                element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path: '/myEquipments',
                element:<PrivateRoute><MyEquipments></MyEquipments> </PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/forgetPass',
                element: <ForgetPass></ForgetPass>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/equipments/${params.id}`)
            },
        ]
    },
]);

export default router;