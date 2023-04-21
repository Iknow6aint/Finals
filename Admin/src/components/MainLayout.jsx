import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUsergroupAdd } from "react-icons/ai"
import { SiBrandfolder } from "react-icons/si"
import { BiCategory } from "react-icons/bi"
import { FcServices } from "react-icons/fc"
import { TbMenuOrder } from "react-icons/tb"
import { FaBlogger } from "react-icons/fa"

import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                <div className="logo" />
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
                            key: '',
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
                            icon: <TbMenuOrder className='fs-4' />,
                            label: 'order',
                        },
                        {
                            key: 'blog',
                            icon: <FaBlogger className='fs-4' />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'blog',
                                    icon: <TbMenuOrder className='fs-4' />,
                                    label: 'Blog',
                                },
                                {
                                    key: 'blog-list',
                                    icon: <TbMenuOrder className='fs-4' />,
                                    label: 'Add Blog',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <TbMenuOrder className='fs-4' />,
                                    label: 'Blog Categoy List',
                                },
                            ]
                        },

                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout