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
import UpdateEquipment from "../components/UpdateEquipment";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import DashboardOverview from "../components/Dashboard/DashboardOverview";
import Profile from "../components/Dashboard/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://equi-sports-server-murex.vercel.app/equipments/home')
            },
            {
                path: '/allSports',
                element: <AllSportsEquipments></AllSportsEquipments>,
                loader: () => fetch('https://equi-sports-server-murex.vercel.app/equipments')
            },
            {
                path: '/addEquipment',
                element: <PrivateRoute><AddEquipment /></PrivateRoute>
            },
            {
                path: '/myEquipments',
                element: <PrivateRoute><MyEquipments /></PrivateRoute>
            },
            {
                path: '/equipmentUpdate/:id',
                element: <PrivateRoute><UpdateEquipment /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://equi-sports-server-murex.vercel.app/equipmentUpdate/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ViewDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://equi-sports-server-murex.vercel.app/equipments/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/forgetPass',
                element: <ForgetPass />
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
                children: [
                    {
                        path: 'overview',
                        element: <DashboardOverview />
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    {
                        path: 'addEquipment',
                        element: <AddEquipment />
                    },
                    {
                        path: 'myEquipments',
                        element: <MyEquipments />
                    }
                ]
            }
        ]
    },
]);

export default router;
