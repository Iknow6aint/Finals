import React from 'react'
import { BsArrowUp } from 'react-icons/bs'
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

const columns = [
    {
        title: 'Sno',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Product',
        dataIndex: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        product: 32,
        stauts: `London, Park Lane no. ${i}`,
    });
}
const Dashboard = () => {
    const data = [
        {
            type: 'Jan',
            sales: 38,
        },
        {
            type: 'Feb',
            sales: 52,
        },
        {
            type: 'March',
            sales: 61,
        },
        {
            type: 'April',
            sales: 145,
        },
        {
            type: 'May',
            sales: 48,
        },
        {
            type: 'Jun',
            sales: 38,
        },
        {
            type: 'July',
            sales: 54,
        },
        {
            type: 'aug',
            sales: 53,
        },
        {
            type: 'sep',
            sales: 43,
        },
        {
            type: 'Oct',
            sales: 28,
        },
        {
            type: 'Nov',
            sales: 32,
        },
        {
            type: 'Dec',
            sales: 45,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
            return "#ffd33"
        },
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#FFFFFF',
                opacity: 1,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'Month',
            },
            sales: {
                alias: 'Income',
            },
        },
    };
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
                        <h6 className='red'><BsArrowUp />35%</h6>
                        <p className='mb-0'> compare to April</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
                    <div>
                        <p>Total</p> <h4 className='mb-0'>$1400</h4>
                    </div>
                    <div>
                        <h6 className='green'><BsArrowUp />35%</h6>
                        <p className='mb-0'>compare to April</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h3>Income Stats</h3>
                <div>
                    <Column {...config} />
                </div>
            </div>
            <div className='mt4'>
                <h3>Recent Orders</h3>
                <div>
                    <Table columns={columns} dataSource={data1} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard