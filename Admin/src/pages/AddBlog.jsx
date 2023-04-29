import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
    const [value, setValue] = useState();
    const handleDesc = (e) => { }
    return (
        <div>
            <h3 className="mb-4">
                Add Blog
            </h3>
            <div>
                <form action="">
                    <CustomInput type='text' Placeholder="AddBlog" label='Enter Blog Title' />
                    <select name="" id="">
                        <option value="">select blog category</option>
                    </select>
                    <ReactQuill theme="snow" value={value} onChange={(e) => {
                        handleDesc(e.target.value)
                    }} />
                </form>
            </div>
        </div>
    )
}

export default AddBlog