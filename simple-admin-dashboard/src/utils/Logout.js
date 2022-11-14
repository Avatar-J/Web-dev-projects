import React from "react";
import { useAuth } from "../hooks/useAuth"
import '../AdminDashboard/LogIn/loading.css';

const Logout = () => {
    const { logout } = useAuth();
    logout();
    return (
        <div>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        </div>
    )
}

export default Logout;