import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBlog = () => {
    return (
        <div>
            <h3 className="mb-4">
                Add Blog
            </h3>
            <div>
                <form action="">
                    <CustomInput type='text' label='Enter Blog Title' />
                    <select name="" id="">
                        <option value="">select blog category</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default AddBlog