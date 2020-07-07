import React from 'react'
import { Input, Button } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons'

const TransferForm = ({ form, onChange, onSubmit }) => {

    return(
        <form className="form-inline justify-content-center" onSubmit={onSubmit}>
        <div className="form-goup mb-2">

            <Input 
                placeholder="Description" 
                type="text" name="description"
                value={form.description}
                onChange={onChange} 
            />
        </div>
        <div className="input-group ms-sm-2 mb-2 ml-1">
        <Input 
            type="number"
            name="amount"
            value={form.amount}
            onChange={onChange}
            prefix={<DollarCircleOutlined />} 
        />
        </div>
        <div className=" mb-2 ml-1">
            <Button color="primary" type="primary" onClick={onSubmit}>
                Registrar
            </Button>
        </div>

    </form>
    )
    }

export default TransferForm