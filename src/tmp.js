// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';

import './index.css';
import {Input, List, Space,Avatar,Layout, Menu } from 'antd';
import SiderDemo from "./Navi/Navi";
import { MessageOutlined, LikeOutlined, StarOutlined,SettingOutlined } from '@ant-design/icons';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

import { useState, useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

const handleStyle = { left: 10 };


const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;





// import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
const itemStyle = {
                    // border: '1px dashed #ccc',
                    margin: '10px',
                    padding: '10px'
                    };
const listData = [];


const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },
  
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 },
    },
  ];

  
  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ];

 


const item = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
    
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  console.log(item)

// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'www.baidu.com',
//         title: `Coco-caprylate/caprate ${i}`,
//         // avatar: 'https://joeschmoe.io/api/v1/random',
//         description:
//             'description',
//         content:
//             'Coco caprylate/caprate is made by combining esters from coconut-derived fatty alcohol (the non-drying kind) with caprylic and capric acids, also from coconut. \n' +
//             '\n' +
//             '\n' +
//             'Platform: Plant Oil\n' +
//             '\n' +
//             'Categories: Emollient\n' +
//             '\n' +
//             'Application: Hair Care/Skin Care/Color Cosmetic/Sun Care\n' +
//             '\n' +
//             '\n' +
//             'Biorenewable rating: High\n' +
//             'Origin: Coconut Oil\n' +
//             '\n' +
//             '\n' +
//             'COSING REF No:\t75266\n' +
//             'Chem/IUPAC Name:\tAlcohols, coco, mixed esters with octanoic and decanoic acids\n' +
//             '\n' +
//             '\n' +
//             'Trade Name (Supplier):\n' +
//             '\n' +
//             'MIGLYOL® Coco 810 (IOI Oleo)\n' +
//             'CETIOL® LC (BASF)\n' +
//             'LANOL 2681 (Seppic)',
//     });
// }
// const IconText = ({ icon, text }) => (
//     <Space>
//         {React.createElement(icon)}
//         {text}
//     </Space>
// );
function handleClick() {
    console.log('click ');
};

// function TextUpdaterNode({ data }) {
//     const onChange = useCallback((evt) => {
//         console.log(evt.target.value);
//     }, []);
//     return (
//         <>
//           <Handle type="target" position={Position.Top} />
//           <div>
//             <label htmlFor="text">Text:</label>
//             <input id="text" name="text" onChange={onChange} />
//           </div>
//           <Handle type="source" position={Position.Bottom} id="a" />
//           <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
//         </>
//       );
//     }

function App(props){
    const [nodes, setNodes] = useState(initialNodes); 
    const [edges, setEdges] = useState(initialEdges);
 
    return(

        <div style={itemStyle}>

            {/*<div*/}
            {/*    style={{*/}
            {/*        textAlign: 'right',*/}
            {/*        height: '64px',*/}
            {/*        lineHeight: '64px',*/}
            {/*        boxShadow: '0 1px 4px rgba(0,21,41,.12)',*/}
            {/*        padding: '0 32px',*/}
            {/*        width: '400px',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <HeaderSearch*/}
            {/*        placeholder="站内搜索"*/}
            {/*        dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}*/}
            {/*        onSearch={value => {*/}
            {/*            console.log('input', value); // eslint-disable-line*/}
            {/*        }}*/}
            {/*        onPressEnter={value => {*/}
            {/*            console.log('enter', value); // eslint-disable-line*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<Space direction='horizontal'>*/}
            {/* <SiderDemo/> */}
            {/*<Search placeholder="搜索内容" enterButton  style={{ width: 260 }}>*/}

            {/*</Search>*/}
            {/*</Space>*/}


  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={item} /> */}
      <Menu  mode="vertical" theme="dark"  >
                <SubMenu  key="SubMenu1" icon={<SettingOutlined />} title="Platform">
                            <Menu.Item onClick="handleClick">Suger
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
      
    </Menu>
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      />
      <Content style={{
          margin: '24px 16px 0',
        //   overflow: 'initial',
        }}>
   <ReactFlow 
            style={{
            margin: '140px 60px 0',
            overflow: 'initial',
            // position:center
            }}
            nodes={nodes} 
            edges={edges} 
            // fitView 
        />
      </Content>
      {/* <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: 'center',
          }}
        >
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
  
          content
        </div>
      </Content> */}

   
      <Footer
        style={{
          margin: '540px 60px 0',
          textAlign: 'center',
        }}
      >
        Flow Design ©2022 Created by HJC
       </Footer>
    </Layout>
  </Layout>


            {/* <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 5,
                }}
                dataSource={listData}
                // footer={
                //     <div>
                //         <b>ant design</b> footer part
                //     </div>
                // }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        // actions={[
                        //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        // ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            // avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />, */}



        </div>
    );
}
ReactDOM.render(<App />,
                document.getElementById("root")
                
);

// registerServiceWorker();