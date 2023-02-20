import Navibar from "./components/navbar";
import LandingPage from "./pages/landing_page";
import Footer from "./components/footer";
import { JobsProvider } from "./context/jobs_context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DetailJob from "./pages/jobs_detail";
import SignIn from "./pages/authentication/sign_in";
import SignUp from "./pages/authentication/sign_up";
import Dashboard from "./pages/dashboard/dashboard";
import FormJob from "./pages/dashboard/form_job";
import DataJobs from "./pages/dashboard/data_jobs";
import ChangePassword from "./pages/dashboard/change_password";
import Cookies from 'js-cookie'
import ListJobs from "./pages/list_jobs";

function App() {
    const LoginRoute = (props) => {
        if (Cookies.get('token') !== undefined) {
            return <Navigate to={'/dashboard'} />
        } else if (Cookies.get('token') === undefined) {
            return props.children
        }

    }

    const DashboardRoute = (props) => {
        if (Cookies.get('token') !== undefined) {
            return props.children
        } else if (Cookies.get('token') === undefined) {
            return <Navigate to={'/sign-in'} />
        }

    }
    
    return (
        <>
            <BrowserRouter>
                <JobsProvider>
                    <Navibar/>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="sign-in" element={
                            <LoginRoute>
                                <SignIn/>
                            </LoginRoute>
                        }/>
                        <Route path="sign-up" element={
                            <LoginRoute>
                                <SignUp/>
                            </LoginRoute>
                        }/>
                        <Route path="detail-job/:idData" element={<DetailJob/>}/>
                        <Route path="dashboard" element={
                            <DashboardRoute>
                                <Dashboard/>
                            </DashboardRoute>}/>
                        <Route path="/dashboard/create-job" element={
                            <DashboardRoute>
                                <FormJob/>
                            </DashboardRoute>}/>
                        <Route path="/dashboard/edit-job/:idData" element={
                            <DashboardRoute>
                                <FormJob/>
                            </DashboardRoute>}/>
                        <Route path="/dashboard/account/change-password" element={
                            <DashboardRoute>
                                <ChangePassword/>
                            </DashboardRoute>}/>
                    </Routes>
                    <Footer/>
                </JobsProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
