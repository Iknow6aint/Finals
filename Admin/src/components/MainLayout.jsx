import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUsergroupAdd, AiFillNotification } from "react-icons/ai"
import { SiBrandfolder } from "react-icons/si"
import { BiCategory, BiPhoneCall, BiCartDownload, BiToggleLeft, BiToggleRight } from "react-icons/bi"
import { FcServices } from "react-icons/fc"
import { TbMenuOrder } from "react-icons/tb"
import { FaBlogger } from "react-icons/fa"

import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className='textwhite fs-5 text-center py-3 mb-0'>
                        <span className='sm-logo'>ap</span>
                        <span className='lg-logo'> Admin Panel</span>
                    </h2>
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={({ key }) => {
                        if (key == 'signOut') {

                        } else {
                            navigate(key)
                        }
                    }}
                    items={[
                        {
                            key: 'dashboard',
                            icon: <AiOutlineDashboard className='fs-4' />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <AiOutlineUsergroupAdd className='fs-4' />,
                            label: 'Cutomers',
                        },
                        {
                            key: 'catalog',
                            icon: <AiOutlineShoppingCart className='fs-4' />,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'Product',
                                    icon: <AiOutlineShoppingCart className='fs-4' />,
                                    label: 'Add product',
                                },
                                {
                                    key: 'Product-list',
                                    icon: <AiOutlineShoppingCart className='fs-4' />,
                                    label: 'Product-list',
                                },
                                {
                                    key: 'brand',
                                    icon: <SiBrandfolder className='fs-4' />,
                                    label: 'Brand',
                                },
                                {
                                    key: 'list-brand',
                                    icon: <SiBrandfolder className='fs-4' />,
                                    label: 'Brand List',
                                },
                                {
                                    key: 'Category',
                                    icon: <BiCategory className='fs-4' />,
                                    label: 'Category',
                                },
                                {
                                    key: 'list-category',
                                    icon: <BiCategory className='fs-4' />,
                                    label: 'CategoryList',
                                },
                                {
                                    key: 'Services',
                                    icon: <FcServices className='fs-4' />,
                                    label: 'Services',
                                },
                                {
                                    key: 'list-service',
                                    icon: <FcServices className='fs-4' />,
                                    label: 'Service List',
                                },
                            ]
                        },
                        {
                            key: 'orders',
                            icon: < BiCartDownload className='fs-4' />,
                            label: 'order',
                        },
                        {
                            key: 'blog',
                            icon: <FaBlogger className='fs-4' />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'add-blog',
                                    icon: <TbMenuOrder className='fs-4' />,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'blog-list',
                                    icon: <FaBlogger className='fs-4' />,
                                    label: 'Blog List',
                                },
                                {
                                    key: 'add-blog-list',
                                    icon: <TbMenuOrder className='fs-4' />,
                                    label: 'Add Blog List',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <FaBlogger className='fs-4' />,
                                    label: 'Blog Categoy List',
                                },
                            ]
                        },
                        {
                            key: 'enquires',
                            icon: < BiPhoneCall className='fs-4' />,
                            label: 'Enquiries',
                        },

                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className='d-flex justify-content-between ps-3 pe-5 '
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className='d-flex gap-4 align-items-center'>
                        <div>
                            h
                        </div>
                        <div className='position-relative'>
                            <AiFillNotification className='fs-4' />
                            <span className='badge bg-warning rounded-circle p-1 position-absolute'>
                                3
                            </span>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <div>
                                <img
                                    width={32}
                                    height={32}
                                    src="" alt="" />
                            </div>
                            <div>
                                <h5 className='mb-0'>iknowsaint</h5>
                                <p className='mb-0'>iknowsaint@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >

                    <Outlet />

                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout