import {Layout, Menu, Breadcrumb, List} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,Icon } from '@ant-design/icons';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import './Navi.css'
import { Input, Space} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;
const { Search } = Input;


class SiderDemo extends Component {
    // state = {
    //     collapsed: false,
    //     mode: 'inline',
    // };
    state = {
        current: 'mail',
    };

    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (


            <Menu onClick={this.handleClick} mode="vertical" theme="dark" >

            {/*<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">*/}
                <SubMenu key="SubMenu1" icon={<SettingOutlined />} title="Platform">
                    <Menu.Item>Suger
                    </Menu.Item>

                    <Menu.Item>Plant Oil
                    </Menu.Item>

                    <SubMenu title="Amino Acid">
                        <Menu.Item key="setting:3">Surfactant</Menu.Item>
                    </SubMenu>

                    <SubMenu title="Cellulose">
                        <Menu.Item key="setting:3">Conditioning</Menu.Item>
                    </SubMenu>

                    <Menu.Item>Gum
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="SubMenu2" icon={<SettingOutlined />} title="Catogeries">
                    <Menu.Item>Emollient
                    </Menu.Item>

                    <Menu.Item>Conditioning
                    </Menu.Item>

                    <SubMenu title="Ionic Surfactant">
                        <Menu.Item key="setting:3">Amino Acid</Menu.Item>
                    </SubMenu>

                    <Menu.Item>Emulsifier
                    </Menu.Item>
                </SubMenu>


                <SubMenu key="SubMenu3" icon={<SettingOutlined />} title="Application">
                    <Menu.Item>Cleansing
                    </Menu.Item>

                    <Menu.Item>Hair Care
                    </Menu.Item>

                    <Menu.Item>Skin Care
                    </Menu.Item>


                    <Menu.Item>Color cosmetic
                    </Menu.Item>


                    <Menu.Item>Sun Care
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="SubMenu4" icon={<SettingOutlined />} title="Certification">
                    <Menu.Item>Ecocert
                    </Menu.Item>

                    <Menu.Item>USDA
                    </Menu.Item>

                    <Menu.Item>Natural Products Association
                    </Menu.Item>

                </SubMenu>


                <SubMenu key="SubMenu5" icon={<SettingOutlined />} title="Company">
                    <Menu.Item key="Croda">
                        Croda
                    </Menu.Item>

                    <Menu.Item >BASF
                    </Menu.Item>

                    <Menu.Item>Lubrizol
                    </Menu.Item>

                    <Menu.Item>
                        Solvey
                    </Menu.Item>

                    <Menu.Item >Dow
                    </Menu.Item>

                    <Menu.Item>Clariant
                    </Menu.Item>

                    <Menu.Item>Inolex
                    </Menu.Item>

                </SubMenu>


                <SubMenu key="SubMenu6" icon={<SettingOutlined />} title="Industrial News">
                    <Menu.Item key="Link 1">
                        Link 1
                    </Menu.Item>
                    <Menu.Item >Link 2
                    </Menu.Item>
                    <Menu.Item>Link 3
                    </Menu.Item>
                </SubMenu>


                <SubMenu key="SubMenu7" icon={<SettingOutlined />} title="Labels">
                    <Menu.Item key="D5 Alternative">
                        D5 Alternative
                    </Menu.Item>
                    <Menu.Item >Mild cleasing
                    </Menu.Item>
                    <Menu.Item>Natural Hydrocarbon
                    </Menu.Item>
                    <Menu.Item>Natural Oil
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="SubMen8" icon={<SettingOutlined />} title="Collaboration">

                </SubMenu>
                <Menu.Item >
                    <Search placeholder="搜索内容" enterButton  style={{ width: 240 ,padding: '10px'}}>

                    </Search>
                </Menu.Item>
                {/*<Menu.Item key="mail" icon={<MailOutlined />}>*/}
                {/*    Platform*/}
                {/*</Menu.Item>*/}

                {/*<Menu.Item*/}
                {/*    key="app"*/}
                {/*    disabled icon={<AppstoreOutlined />}>*/}
                {/*    Navigation Two*/}
                {/*</Menu.Item>*/}



                {/*<Menu.Item key="alipay">*/}
                {/*    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">*/}
                {/*        Navigation Four - Link*/}
                {/*    </a>*/}
                {/*</Menu.Item>*/}

            </Menu>



        );
    }
            // <Layout>
            //     <Sider
            //         trigger={null}
            //         collapsible
            //         collapsed={this.state.collapsed}
            //     >
            //         <div className="logo" />
            //         <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            //             <Menu.Item key="1">
            //                 <Icon type="user" />
            //                 <span className="nav-text">nav 1</span>
            //             </Menu.Item>
            //             <Menu.Item key="2">
            //                 <Icon type="video-camera" />
            //                 <span className="nav-text">nav 2</span>
            //             </Menu.Item>
            //             <Menu.Item key="3">
            //                 <Icon type="upload" />
            //                 <span className="nav-text">nav 3</span>
            //             </Menu.Item>
            //         </Menu>
            //     </Sider>
            //     <Layout>
            //         <Header style={{ background: '#000', padding: 0 }}>
            // <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
            // <Icon
            //     className="trigger"
            //     type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            //     onClick={this.toggle}
            //     style={{cursor: 'pointer'}}
            // />
            // </span>
            //             <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>Information Management System</span>
            //             <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
            //         <img src={logo} className="App-logo" alt="logo" />
            //     </span>
            //         </Header>
            //         <Content style={{ margin: '0 16px' }}>
            //             <Breadcrumb style={{ margin: '12px 0' }}>
            //                 <Breadcrumb.Item>User</Breadcrumb.Item>
            //                 <Breadcrumb.Item>Bill</Breadcrumb.Item>
            //             </Breadcrumb>
            //             <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
            //
            //             </div>
            //         </Content>
            //         <Footer style={{ textAlign: 'center' }}>
            //             Ant Design ©2016 Created by Ant UED
            //         </Footer>
            //     </Layout>
            // </Layout>
}

export default SiderDemo;
// export default SearchCom;