import React from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
                <h3 className='text-center'>Login</h3>
                <p className='text-center'>Login to your account </p>
                <form action='' onSubmit={formik.handleSubmit}>
                    <CustomInput type="text" placeholder="Email Address" id="email" label='Email Address' name='email' onCh={formik.handleChange('email')}
                        value={formik.values.email} />
                    <CustomInput type="text" placeholder="Password" id="pass" label='Password' name='password' onCh={formik.handleChange('passwords')}
                        value={formik.values.password} />
                    <div className="mb-3 text-end">
                        <Link to='forgot-password'>
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        // to='/admin'
                        className='border-0 px-3 py-2 text-white fw-bold w-100'
                        style={{ background: '#ffd333' }}
                        type='submit'
                    >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login