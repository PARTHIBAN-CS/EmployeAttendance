import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import Welcome from "../components/Welcome";
import EmployeDetail from "../components/EmployeDetail";
import Attendance from "../components/Attendance";

export default [
    {
        path: '/',
        component: RegistrationForm,
        exact: true
    },
    {
        path: '/LoginForm',
        component: LoginForm,
    },
    {
        path: '/Welcome',
        component: Welcome,
    },
    {
        path: '/EmployeDetail',
        component: EmployeDetail,
    },
    {
        path: '/Attendance',
        component: Attendance,
    },
    
]