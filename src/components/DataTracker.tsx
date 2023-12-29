import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined } from '@ant-design/icons';

interface DataType {
  key: React.Key;
  month: string;
  status: string;
  completion: number;
  bu: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'MONTH',
    dataIndex: 'month',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },
  {
    title: 'COMPLETION',
    dataIndex: 'completion',
  },
  {
    title: 'BUSINESS UNIT',
    dataIndex: 'bu',
  }
];

const data: DataType[] = [];

data.push({
  key: 0,
  month: "January",
  status: "Pending Approval",
  completion: 20,
  bu: "BU 1",
});


const DataTracker: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className='flex-center'>
        <div className='block'>
          <div>
            <p className='grey'>Pending Trackers</p>
            <h1>45/60</h1>
          </div>
          <UserOutlined className='icon'/>
        </div>
        <div className='block'>
          <div>
            <p className='grey'>Pending Reviews</p>
            <h1>3</h1>
          </div>
          <UserOutlined className='icon'/>
        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default DataTracker
