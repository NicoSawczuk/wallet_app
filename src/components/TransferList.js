import React from 'react'
import 'antd/dist/antd.css';
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons'

const TransferList = ({ transfers }) => {



    const columns = [
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            align: 'center'
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            align: 'right',
            width: '300px'
        },
        {
            title: 'Options',
            dataIndex: 'options',
            key: 'options',
            align: 'right',
            width: '100px'
        }
    ];

    const dataSource = [];

    transfers.map((transfer) => {

        let trans = {
            key: transfer.id,
            description: transfer.description,
            amount: <Tag color={transfer.amount >0 ? "green":"magenta"}>{ transfer.amount}</Tag>,
            options: <Link to={`/transfer/${transfer.id}`} ><EyeOutlined /></Link>
        }
        dataSource.push(trans)
    })

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} size="middle" bordered />
        </div>
    )
}
//? significa entonces
//: significa sino
export default TransferList