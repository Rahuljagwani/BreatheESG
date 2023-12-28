import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router';
import { signOutLocal } from '../auth/Register';
import logo from '../images/logo.webp'
import { UserOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

interface MenuItem {
    icon: React.ReactNode;
    label: string;
    route: string;
}

interface StateGlobalProviderProps {
    children: JSX.Element
}

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
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: "black"
                }}
            >
                <div className="demo-logo-vertical"
                    style={{ color: "white", fontSize: "larger", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", marginBottom: "15px" }}>
                    <img
                        src={logo}
                        width="25px"
                        height="25px" /> BREATHE ESG
                </div>

                <Menu style={{ backgroundColor: "black" }} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
            <Layout style={{ marginLeft: 200 }}>
                <Header style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    background: colorBgContainer
                }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Logged;
