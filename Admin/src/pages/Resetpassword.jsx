import React from 'react'
import CustomInput from '../components/CustomInput'

const Resetpassword = () => {
    return (
        <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
                < h3 className='text-center' > Forgot Password</h3 >
                <p className='text-center'>Please Enter Your New Password </p>
                <form action=''>
                    <CustomInput type="text" placeholder="New Password" id="pass" />
                    <CustomInput type="text" placeholder="Confirm Address" id="email" />

                    <button
                        className='border-0 px-3 py-2 text-white fw-bold w-100'
                        style={{ background: '#ffd333' }}
                        type='submit'
                    >Reset</button>
                </form>
            </div>
        </div>
    )
}

export default Resetpassword