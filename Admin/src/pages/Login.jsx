import React from 'react'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';

import { login } from '../features/auth/authSlice'

const Login = () => {

    const dispatch = useDispatch()

    // Form validator schema
    let schema = Yup.object().shape({
        email: Yup.string().email('Email must be valid').required('Email is required'),
        password: Yup.string('Password mut be valid ').required('Password must be required'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(login(values))
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
                    <div className="error">
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <CustomInput type="text" placeholder="password" id="pass" label='Password' name='password' onCh={formik.handleChange('password')}
                        value={formik.values.password} />
                    <div className="error">
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="mb-3 text-end">
                        <Link to='forgot-password'>
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        to='/admin'
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