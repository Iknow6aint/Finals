import React from 'react'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Stepper } from 'react-form-stepper';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const AddBlog = () => {
    const [value, setValue] = useState();
    const handleDesc = (e) => {
        setValue(e)
    }
    return (
        <div>
            <h3 className="mb-4 title">
                Add Blog
            </h3>
            <Stepper
                steps={[{ label: 'Add Bog Details' }, { label: 'Upload Images' }, { label: 'Finish' }]}
                activeStep={1}
            />
            <div>
                <form action="">
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                            banned files.
                        </p>
                    </Dragger>
                    <div className='mt-3'>
                        <CustomInput type='text' Placeholder="AddBlog" label='Enter Blog Title' />
                    </div>
                    <select className='form-control py-3 mb-3' name="" id="">
                        <option value="">select blog category</option>
                    </select>
                    <ReactQuill theme="snow" value={value} onChange={(e) => {
                        handleDesc(e.target.value)
                    }} />
                    <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Add Blog</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlog