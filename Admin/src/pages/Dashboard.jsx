import React from 'react'
import { BsArrowUp } from 'react-icons/bs'


const Dashboard = () => {
    return (
        <div>
            <h3 className='mb-4'>Dashboard</h3>
            <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudnsed-3">
                    <div>
                        <p>Total</p> <h4 className='mb-0'>$1400</h4>
                    </div>
                    <div>
                        <h6><BsArrowUp />35%</h6>
                        <p className='mb-0'>compare to April</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
                    <div>
                        <p>Total</p> <h4 className='mb-0'>$1400</h4>
                    </div>
                    <div>
                        <h6><BsArrowUp />35%</h6>
                        <p className='mb-0'> compare to April</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
                    <div>
                        <p>Total</p> <h4 className='mb-0'>$1400</h4>
                    </div>
                    <div>
                        <h6><BsArrowUp />35%</h6>
                        <p className='mb-0'>compare to April</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard