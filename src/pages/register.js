import React from "react";

import AuthLayout from "../components/Layouts/AuthLayout";
import FromRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" >
            <FromRegister/>
        </AuthLayout>
    );
}

export default RegisterPage;