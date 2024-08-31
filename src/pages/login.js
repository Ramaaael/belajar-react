import React from "react";

import AuthLayout from "../components/Layouts/AuthLayout";
import FromLogin from "../components/Fragments/FormLogin";

const LoginPage= () => {
    return (
        <AuthLayout title="Login" >
            <FromLogin/>
        </AuthLayout>
    );
}

export default LoginPage;