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

import { useState, useCallback, useEffect } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import ReactFlow, { MiniMap, Controls, useNodesState, useEdgesState  } from 'react-flow-renderer';
import nodedata from './node_Vehicle_Reset_0621_v2.json'
import edgedata from './edge_Vehicle_Reset_0621_v2.json'
import nodedata_safty from './node_Safty_Goal_0621_v2.json'
import edgedata_safty from './edge_Safty_Goal_0621_v2.json'

// console.log(nodedata)
const handleStyle = { left: 20 };


const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



//ReactDOM.render(<App />, document.getElementById('root'));
const itemStyle = {
                    // border: '1px dashed #ccc',
                    margin: '10px',
                    padding: '10px'
                    };

const listData = [];


// var initialNodes = [
//     {
//       id: '1',
//       type: 'input',
//       data: { label: 'Input Node' },
//       position: { x: 250, y: 25 },
//     },
  
    // {
    //   id: '2',
    //   // you can also pass a React component as a label
    //   data: { label: <div>Default Node</div> },
    //   position: { x: 100, y: 125 },
    // },
    // {
    //   id: '3',
    //   type: 'output',
    //   data: { label: 'Output Node' },
    //   position: { x: 250, y: 250 },
    // },
 // ];

//   var initialNodes1 = [
//     {
//       id: '1',
//       type: 'input',
//       data: { label: 'Input Node=====' },
//       position: { x: 250, y: 25 },
//     },
  
//     {
//       id: '2',
//       // you can also pass a React component as a label
//       data: { label: <div>Default Node</div> },
//       position: { x: 100, y: 125 },
//     },
//     {
//       id: '3',
//       type: 'output',
//       data: { label: 'Output Node' },
//       position: { x: 250, y: 250 },
//     },
//   ];

  
// var initialEdges = [
//   { id: 'e1-2', source: '1', target: '2' },
//   { id: 'e2-3', source: '2', target: '3', animated: true },
// ];

const initialNodes = [
  
];
const initialEdges = [];

const initialNodes_safty = [
  
];
const initialEdges_safty = [];

const initialNodes1 = [
 

];
const initialEdges1 = [];

const s = 1




const App =(props) =>{

  const [nodes, setNodes] = useState(initialNodes1);
  const [edges, setEdges] = useState(initialEdges1);


  const HandleClick = (props) =>{
    if(props.key == 'SubMenu1-User Story'){
      // const reader=new FileReader();
      // reader.readAsText('/Users/hanjiacheng/PycharmProjects/LexicalAnalysisHW/test/tree_res.json');
      // reader.onload=(result)=>{
      //   let targetNum=result.target.result;
      //   console.log(targetNum)
      // }
      console.log('SubMenu1-User Story ');
      for(var i=0;i<nodedata_safty.length; i++){
        initialNodes_safty.push({
                          id:nodedata_safty[i]['id'],
                          data:{label:nodedata_safty[i]['label']}, 
                          position: {x: nodedata_safty[i]["x"], y: nodedata_safty[i]["y"]
                        
                        }
                         })

      }
      console.log('initialNodes_safty:', initialNodes_safty)
      for(var i=0;i< edgedata_safty.length; i++){
        initialEdges_safty.push({ 
            id: edgedata_safty[i]['id'], 
            source: edgedata_safty[i]['source'], 
            target: edgedata_safty[i]['target'] 
          })
                          
      }
      setNodes(initialNodes_safty)
      setEdges(initialEdges_safty)
      console.log('initialEdges:', initialEdges_safty)
    }
    else if(props.key == 'SubMenu2-User Story'){

      console.log('SubMenu2-User Story ');
      for(var i=0;i<nodedata.length; i++){
        initialNodes.push({
                          id:nodedata[i]['id'],
                          data:{label:nodedata[i]['label']}, 
                          position: {x: nodedata[i]["x"], y: nodedata[i]["y"] },
                          style: {
                            background: nodedata[i]["background"]
                          },
                         })

      }
      console.log('initialNodes:', initialNodes)
      for(var i=0;i< edgedata.length; i++){
        initialEdges.push({ 
            id: edgedata[i]['id'], 
            source: edgedata[i]['source'], 
            target: edgedata[i]['target'],
            // type: edgedata[i]['type'],
            style: edgedata[i]['style']
          })
                          
      }
      setNodes(initialNodes)
      setEdges(initialEdges)
      console.log('initialEdges:', initialEdges)
    }


    

    // console.log(props)

    // setNodeName(props.key)
    // setNodes()
    // console.log(this)

    // let [nodes1, setNodes] = useState(initialNodes1); 
    // let [edges, setEdges] = useState(initialEdges);
    // setNodes(nodes)
    // nodes[0].data.label = 'click'
 
    // console.log(nodes)
    // let [num, setNum] = useState(s);
    // console.log(nodes[0].data.label);
    // nodes[0].data.label = 'Click'
    // setNodes(nodes)
    // setNum(num++)
    // console.log(nodes1[0].data.label);
    // console.log(this.initialNodes[0].data)
};
 

    // const item = [
    //     UserOutlined,
    //     VideoCameraOutlined,
    //     UploadOutlined,
    //     BarChartOutlined,
    //     CloudOutlined,
    //     AppstoreOutlined,
    //     TeamOutlined,
    //     ShopOutlined,
        
    //   ].map((icon, index) => ({
    //     key: String(index + 1),
    //     icon: React.createElement(icon),
    //     label: `nav ${index + 1}`,
    //   }));
    //   console.log(item)

    return(
        // <div style={itemStyle}>
    <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        width:'30vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={item} /> */}
      <Menu  mode="inline" theme="dark"  >
            
        <SubMenu  key="SubMenu1" icon={<SettingOutlined />} title="Safty Goal 41.2">
            <Menu.Item key="SubMenu1-User Story" onClick={HandleClick} >(OBS) Safety Goal
            </Menu.Item>
        </SubMenu>

        <SubMenu key="SubMenu2" icon={<SettingOutlined />} title="Vehicle Reset">
            <Menu.Item key="SubMenu2-User Story" onClick={HandleClick}>User Story
            </Menu.Item>
        </SubMenu>
      </Menu>

    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 10,
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      />
      {/* <Content style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}> */}
        {/* <div 
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: 'center',
              width:1900,
              height:700
            }}
        > */}
          {/* {num} */}
      
        {/* </div> */}
      {/* </Content>  */}
      <ReactFlow 
              style={{
              margin: '40px 100px 0',
              // overflow: 'auto',
              position:'fixed'
              // // position:center
              }}
              nodes={nodes} 
              edges={edges} 
              // onNodesChange={onNodesChange}
              // onEdgesChange={onEdgesChange}
              // fitView 
          />  
        {/* <Footer
            style={{
              // margin: '140px 60px 0',
              textAlign: 'center',
            }}
        >
          Flow Design ©2022 Created by HJC
       </Footer> */}
    </Layout>
  </Layout>
        // </div>
    );
}
ReactDOM.render(<App />,document.getElementById("root")
                
);

// registerServiceWorker();