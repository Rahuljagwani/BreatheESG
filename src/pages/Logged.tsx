import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { signOutLocal } from '../auth/Register';
import logo from '../images/logo.webp'
import whitelogo from '../images/whitelogo.png'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Select, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { MenuItem, StateGlobalProviderProps } from '../@d.types';


const { Header, Content, Sider } = Layout;

const menuItems: MenuItem[] = [
    { icon: <UserOutlined />, label: "Dashboard", route: "/user/dashboard" },
    { icon: <UserOutlined />, label: "Entity Manager", route: "/user/em" },
    { icon: <UserOutlined />, label: "Data Manager", route: "/user/dm" },
    { icon: <UserOutlined />, label: "Reporting", route: "/user/reporting" },
    { icon: <UserOutlined />, label: "Materiality", route: "/user/matrial" },
    { icon: <UserOutlined />, label: "Suppliers", route: "/user/suppliers" },
    { icon: <UserOutlined />, label: "Analytics", route: "/user/analytics" },
    { icon: <UserOutlined />, label: "Targets", route: "/user/targets" },
];

const menuItemsWithRoutes = menuItems.map((item, index) => ({
    key: String(index + 1),
    icon: item.icon,
    label: item.label,
    route: item.route,
}));

const Logged: React.FC<StateGlobalProviderProps> = ({ children }: StateGlobalProviderProps) => {

    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();

    const handleLogout = async (e: React.MouseEvent) => {
        await signOutLocal();
        navigate('/');
    }

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [])

    const handleChange = (value: string) => {

    }

    return (
        <Layout className='layout' hasSider>
            <Sider className='sider'>
                <div className="logo-vertical">
                    <img
                        src={logo}
                        width="25px"
                        height="25px" /> BREATHE ESG
                </div>
                <Menu className="menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {menuItemsWithRoutes.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={`${item.route}`}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                    <Menu.Item icon={<UserOutlined />} >
                        <p onClick={handleLogout}>Logout</p>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className='header'>
                    <img src={whitelogo} width="50px" height="50px" />
                    <Typography className='genText'>{user?.displayName ? user.displayName.toLocaleUpperCase() : "View Name"}
                        <Select
                            defaultValue="North Indian Region"
                            onChange={handleChange}
                            options={[
                                { value: 'N', label: 'North Indian Region' },
                                { value: 'S', label: 'South Indian Region' },
                            ]}
                        />
                    </Typography>
                    <div className='fixed' />
                    {user?.displayName ? user.displayName.toUpperCase() : "No Name Provided"}
                    {user?.photoURL ? <img src={user.photoURL} width="30px" height="30px" /> : <UserOutlined />}
                </Header>
                <Content className='content'>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default Logged;
