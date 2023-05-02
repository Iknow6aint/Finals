import React from 'react'
import CustomInput from '../components/CustomInput'
const SignUp = () => {
    return (
        <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3 overflow-hideen'>
                <h3 className='text-center'>Sign Up</h3>
                <p className='text-center'>Create your account </p>
                <form action=''>

                    <CustomInput type="text" placeholder="First Name" label='Enter First Name' />
                    <CustomInput type="text" placeholder="Email Address" label='Enter Last Name' />
                    <CustomInput type="text" placeholder="Email Address" label='Enter Phone Number' />
                    <CustomInput type="text" placeholder="Email Address" label='Enter Password' />
                    <CustomInput type="text" placeholder="Email Address" label='Confirm Password' />
                    <button
                        className='border-0 px-3 py-2 text-white fw-bold w-100'
                        style={{ background: '#ffd333' }}
                        type='submit'
                    >Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp