import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layouts/AuthLayout'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import HomeLayout from '../Layouts/HomeLayout'
import Dashboard from '../pages/Dashboard'
// import MyCourses from '../pages/MyCourses'
import MyInternship from '../pages/MyInternship'
import AdminDashboard from '../pages/AdminDashboard'
// import SpecialOffer from '../pages/SpecialOffer'
import AdminTaskUploader from '../pages/AdminTaskUploader'
import TaskDetails from '../pages/TaskDetails'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayout />
        },
        {
            path: "/home",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <HomeLayout />,
                    children: [
                        {
                            path: "",
                            element: <Dashboard />
                        },
                        // {
                        //     path:"special-offer",
                        //     element:<SpecialOffer/>
                        // },
                        {
                            path: "admin-dashoard",
                            element: <AdminDashboard />
                        },
                        // {
                        //     path: 'my-courses',
                        //     element: <MyCourses />
                        // },
                        {
                            path: 'my-internship',
                            element: <MyInternship />
                        },
                        {
                            path:"task-details/:id",
                            element:<TaskDetails/>
                        },
                        {
                            path:'admin-task-uploader',
                            element:<AdminTaskUploader/>
                        },
                        {
                            path: "admin-dashoard",
                            element: <AdminDashboard />
                        },
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
};

export default AppRouter;