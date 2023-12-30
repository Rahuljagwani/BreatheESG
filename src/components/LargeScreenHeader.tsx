import { Button, Select, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react'
import { auth } from '../config/firebase';
import whitelogo from '../images/whitelogo.png'
import { UserOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import { LSHeader } from '../@d.types';

const LargeScreenHeader: React.FC<LSHeader> = ({toggleSider}: LSHeader) => {
    const user = auth.currentUser;
    return (
        <div className="large-screen-header">
            <Header className="header">
                <Button
                    type="text"
                    icon={<DoubleLeftOutlined />}
                    onClick={toggleSider}
                    className="collapse-button"
                />
                <img alt='logo' src={whitelogo} width="50px" height="50px" />
                <Typography className="genText">
                    {user?.displayName ? user.displayName.toLocaleUpperCase() : 'View Name'}
                    <Select defaultValue="North Indian Region"
                        options={[{ value: 'North Indian Region', label: 'North Indian Region' },
                        { value: 'South Indian Region', label: 'South Indian Region' }]}
                    />
                </Typography>
                <div className="fixed" />
                {user?.displayName ? user.displayName.toUpperCase() : 'No Name Provided'}
                {user?.photoURL ? <img alt='logo' src={user.photoURL} width="30px" height="30px" /> : <UserOutlined />}
            </Header>
        </div>
    )
}

export default LargeScreenHeader;
