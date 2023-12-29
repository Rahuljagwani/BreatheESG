import { Button, Select, Typography } from 'antd';
import { Content, Header } from 'antd/es/layout/layout'
import { UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import DataEntry from './DataEntry';
import DataTracker from './DataTracker';
import InputModal from './InputModal';

const DataManager: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const openModal = (e: React.MouseEvent) => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <Header className='header-child'>
                <div className="tab-switcher">
                    <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                        {<UserOutlined />} Data Entry
                    </div>
                    <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                        {<UserOutlined />} Data Tracker
                    </div>
                </div>
                <div className='fixed' />
                <Typography className='genText'>For:
                    <Select
                        defaultValue="FY 2023-24"
                        options={[
                            { value: '23', label: 'FY 2023-24' },
                            { value: '22', label: 'FY 2022-23' },
                            { value: '21', label: 'FY 2021-22' }
                        ]}
                    />
                </Typography>
                {
                    activeTab === 1 &&
                    <Button size='large' onClick={openModal} className='headerButton'>Submit for Approval</Button>
                }
            </Header>
            <InputModal closeModal={closeModal} open={isModalOpen} />
            <Content className='content-child'>
                {activeTab === 1 && <DataEntry />}
                {activeTab === 2 && <DataTracker />}
            </Content>
        </>
    )
}

export default DataManager
