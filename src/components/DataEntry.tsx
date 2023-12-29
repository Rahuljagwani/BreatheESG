import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined } from '@ant-design/icons';
import { AssignmentDataType } from '../@d.types';


const columns: ColumnsType<AssignmentDataType> = [
  {
    title: 'ASSESSMENT TITLE',
    dataIndex: 'assessment',
  },
  {
    title: 'TYPE',
    dataIndex: 'type',
  },
  {
    title: 'NO OF SUPPLLIERS',
    dataIndex: 'nos',
  },
  {
    title: 'SCORE',
    dataIndex: 'score',
  },
  {
    title: 'RISK CLASSIFICATION',
    dataIndex: 'rc',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
  },
  {
    title: 'RESULT',
    dataIndex: 'result',
  },
  {
    title: 'ACTION',
    dataIndex: 'action',
    render: () => <UserOutlined />,
  },
];

const data: AssignmentDataType[] = [];

data.push({
  key: 0,
  assessment: "assignment",
  type: "",
  nos: 5,
  score: 50,
  rc: "",
  status: "",
  result: true,
});

const DataEntry: React.FC = () => {
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

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
}

export default DataEntry;

