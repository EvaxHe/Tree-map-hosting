import React from "react";
import ReactDOM from "react-dom";
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';

import "./index.css";
import { Input, Button, Space, Layout, Menu } from "antd";
import SiderDemo from "./Navi/Navi";
import { SettingOutlined } from "@ant-design/icons";

import resetList from "./json/Vehicle_Reset_output.json";
import goalList from "./json/Safty_Goal_output.json";
import nominalList from "./json/Nominal_Temp_id_output.json";

import resetEdges from "./json/Vehicle_Reset_eg_output.json";
import goalEdges from "./json/Safty_Goal_edge_output.json";
import normalEdges from "./json/Nominal_Temp_edge_output.json";

import resetRelationList from "./json/Vehicle_Reset_Relationship";
import safeRelationList from "./json/safe_relationship.json";
import normalRelationList from "./json/Nominal_Temp_relationship.json";

import resetUrlList from "./json/Vehicle_Reset_url.json";
import safeUrlList from "./json/Safty_Goal_url.json";
import normalUrlList from "./json/Nominal_Temp_url.json";

import { useState, useCallback, useEffect } from "react";

import { FlowAnalysisGraph } from "@ant-design/graphs";

const handleStyle = { left: 20 };

const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const getData = (list, edges) => {
  edges = edges.map((ele) => {
    //edge json文件中传入的值，source、target转字符串类型
    return {
      source: ele.source.toString(),
      target: ele.target.toString(),
    };
  });

  let res = { nodes: [], edges },
    obj = {
      //存储每一层不重复的node节点   存储csv每一列的数据（去重之后生成node节点）  规则：过滤掉带id的和field1列
    };
  Object.keys(list[0] || {})
    .filter((ele) => ele !== "field1" && !ele.includes("id"))
    .forEach((ele) => {
      obj[ele] = {};
    });
  console.log(obj);
  for (let i = 0; i < list.length; i++) {
    for (let idx = 0; idx < Object.keys(obj).length; idx++) {
      //默认拿到Level 0-6的值  像Feature列得加判断
      let level = Object.keys(obj)[idx];
      if (!obj[level][list[i][level + "_id"]] && list[i][level + "_id"]) {
        //生成antv所需结构
        let arr = list[i][level].split("|");
        let val = {
          id: parseInt(list[i][level + "_id"]).toString(),
          value: {
            title: arr[0],
            items: [
              {
                text: arr[1],
              },
            ],
          },
        };
        res.nodes.push(val);
        obj[level][list[i][level + "_id"]] =
          obj[level][list[i][level + "_id"]] || 1;
      }
    }
  }
  console.log(res, "res");
  return res;
};
//主要是从getData函数传入参数 获取到antv所需数据结构resetList
//resetList, resetEdges这两个参数是从json数据中拿到的数据
//（import resetList from "./json/06_23_Vehicle_Reset_output.json";）（import resetEdges from "./json/06_24_Vehicle_Reset_eg_output.json";）

const nodes = getData(resetList, resetEdges);
const nodes2 = getData(goalList, goalEdges);
const nodes3 = getData(nominalList, normalEdges);

const nodeObj = {
  sub1:nodes,
  sub2:nodes2,
  sub3:nodes3
}

const App = (props) => {
  const [data, setData] = useState(nodes); //赋值给data渲染antv 图
  const [menuKey, setMenuKey] = useState("sub1");
  const [relationList, setRelationList] = useState(resetRelationList);
  const [urlList, setUrlList] = useState(resetUrlList);

  const nodeClick = (id) => {
    setCurId(id);
  };
  const config = {
    data,
    nodeCfg: {
      size: [200, 25],
      autoWidth: true,
      badge: {
        style: (cfg) => {
          const ids = ["-3", "-2", "-1"];
          const fill = ids.includes(cfg.id) ? "#c86bdd" : "#5ae859";
          return {
            fill,
            radius: [2, 0, 0, 2],
          };
        },
      },
      items: {
        padding: 6,
        containerStyle: {
          fill: "#fff",
          overflow: "hidden",
        },

        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: "#f00",
              overflow: "auto",
            },
            text: {
              fill: "#aaa",
              overflow: "hidden",
            },
          };
          return styles[type];
        },
      },
      // nodeStateStyles: {
      //   hover: {
      //     stroke: "#1890ff",
      //     lineWidth: 2,
      //   },
      // },
      title: {
        containerStyle: {
          fill: "transparent",
        },
        style: {
          fill: "#000",
          fontSize: 12,
        },
      },
      style: (a, b, c) => {
        let obj = {
            "Feature-level Functional Requirement": 1,
            "Document Item": 1,
            "Requirement [incl FuSa]": 1,
          },
          obj2 = {
            "Software Test Case - Vehicle": 1,
            "Verification - HIL": 1,
            "Software Test Case - Component": 1,
            "Software Test Case - Subsystem": 1,
          };
        if (obj[a.value.title.trim()]) {
          return {
            fill: "rgb(52, 174, 235", //节点背景色  三个规则判断颜色
            stroke: "#B2BED5",
            radius: [2, 2, 2, 2],
          };
        } else if (obj2[a.value.title.trim()]) {
          return {
            fill: "pink", //节点背景色
            stroke: "#B2BED5",
            radius: [2, 2, 2, 2],
          };
        } else {
          return {
            fill: "#E6EAF1", //节点背景色
            stroke: "#B2BED5",
            radius: [2, 2, 2, 2],
          };
        }
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: "#aaa",
          fontSize: 12,
          fillOpacity: 1,
        },
      },
      style: (edge) => {
        const stroke = "#aaa"; //线颜色
        return {
          stroke,
          lineWidth: 1,
        };
      },
      edgeStateStyles: {
        hover: {
          lineWidth: 2,
          strokeOpacity: 1,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges = [] } = data;
      return {
        position: "right", //收缩按钮位置
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id),
      };
    },
    layout: {
      center: [200, 200],
      ranksepFunc: () => 300, //控制线宽度
    },
    behaviors: ["drag-canvas", "zoom-canvas", "drag-node", "scroll-canvas"],
    autoFit: true,
    onReady: (graph) => {
      graph.on("node:click", (evt, b, c) => {
        nodeClick(evt.item._cfg.id);
        // if(evt.item._cfg.id == 0){
        //   window.open('https://rivianautomotive.jamacloud.com/perspective.req#/items/6690794?projectId=VA1-SG-269')
        // }else if(evt.item._cfg.id == 1){
        //   window.open('https://rivianautomotive.jamacloud.com/perspective.req#/items/3612402?projectId=MFD-DOC-3211')
        // }
        // window.open(resetUrlList[evt.item._cfg.id])
      });
      graph.on("node:dblclick", (evt, b, c) => {
        // nodeClick(evt.item._cfg.id);
        window.open(urlList[evt.item._cfg.id]);
      });
      graph.on("node:dblclick", (evt, b, c) => {
        nodeClick("");
      });
    },
  };
  const config1 = {
    data,
    nodeCfg: {
      size: [200, 25],
      autoWidth: true,
      badge: {
        style: (cfg) => {
          const ids = ["-3", "-2", "-1"];
          const fill = ids.includes(cfg.id) ? "#c86bdd" : "#5ae859";
          return {
            fill,
            radius: [2, 0, 0, 2],
          };
        },
      },
      items: {
        padding: 6,
        containerStyle: {
          fill: "#fff",
          overflow: "hidden",
          stroke: "red",
        },

        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: "#f00",
              overflow: "auto",
            },
            text: {
              fill: "#aaa",
              overflow: "hidden",
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: "#1890ff",
          lineWidth: 2,
        },
      },
      title: {
        containerStyle: {
          fill: "transparent",
        },
        style: {
          fill: "#000",
          fontSize: 12,
        },
      },
      style: (a, b, c) => {
        let obj = {
            "Feature-level Functional Requirement": 1,
            "Document Item": 1,
            "Requirement [incl FuSa]": 1,
          },
          obj2 = {
            "Software Test Case - Vehicle": 1,
            "Verification - HIL": 1,
            "Software Test Case - Component": 1,
            "Software Test Case - Subsystem": 1,
          };
        if (obj[a.value.title.trim()]) {
          return {
            fill: "rgb(52, 174, 235)", //节点背景色  三个规则判断颜色
            // stroke: "#B2BED5",
            radius: [2, 2, 2, 2],
            stroke: "#1890ff",
            lineWidth: 2,
          };
        } else if (obj2[a.value.title.trim()]) {
          return {
            fill: "pink", //节点背景色
            // stroke: "#B2BED5",
            radius: [2, 2, 2, 2],
            stroke: "#1890ff",
            lineWidth: 2,
          };
        } else {
          return {
            fill: "#E6EAF1", //节点背景色
            // stroke: "#B2BED5",
            radius: [2, 2, 2, 2],
            stroke: "#1890ff",
            lineWidth: 2,
          };
        }
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: "#aaa",
          fontSize: 12,
          fillOpacity: 1,
        },
      },
      style: (edge) => {
        const stroke = "#aaa"; //线颜色
        return {
          stroke,
          lineWidth: 2,
          strokeOpacity: 1,
        };
      },
      edgeStateStyles: {
        hover: {
          lineWidth: 2,
          strokeOpacity: 1,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges = [] } = data;
      return {
        position: "right", //收缩按钮位置
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id),
      };
    },
    layout: {
      center: [200, 200],
      ranksepFunc: () => 300, //控制线宽度
    },
    behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
    onReady: (graph) => {
      graph.on("node:click", (evt, b, c) => {
        evt.target.attrs.stroke = "red";
        console.log(evt, b, c);
        setStateConfig(config1);
      });
    },
  };
  const [curId, setCurId] = useState();

  useEffect(
    () => {
      if (curId) {
        setStateConfig((state) => {
          return {
            ...state,
            nodeCfg: {
              ...state.nodeCfg,
              style: (a, b, c) => {
                let obj = {
                    "Feature-level Functional Requirement": 1,
                    "Document Item": 1,
                    "Requirement [incl FuSa]": 1,
                  },
                  obj2 = {
                    "Software Test Case - Vehicle": 1,
                    "Verification - HIL": 1,
                    "Software Test Case - Component": 1,
                    "Software Test Case - Subsystem": 1,
                  };
                let arr = relationList[curId].map((ele) =>
                  parseInt(ele).toString()
                );
                if (arr.includes(a.id)) {
                  if (obj[a.value.title.trim()]) {
                    console.log(arr, a.id, "node", curId);

                    return {
                      fill: "rgb(52, 174, 235)", //节点背景色  三个规则判断颜色
                      radius: [2, 2, 2, 2],
                      stroke: "red",
                      lineWidth: 3,
                    };
                  } else if (obj2[a.value.title.trim()]) {
                    return {
                      fill: "pink", //节点背景色
                      radius: [2, 2, 2, 2],
                      stroke: "red",
                      lineWidth: 3,
                    };
                  } else {
                    return {
                      fill: "#E6EAF1", //节点背景色
                      radius: [2, 2, 2, 2],
                      stroke: "red",
                      lineWidth: 3,
                    };
                  }
                } else {
                  if (obj[a.value.title.trim()]) {
                    return {
                      fill: "rgb(52, 174, 235", //节点背景色  三个规则判断颜色
                      stroke: "#B2BED5",
                      radius: [2, 2, 2, 2],
                    };
                  } else if (obj2[a.value.title.trim()]) {
                    return {
                      fill: "pink", //节点背景色
                      stroke: "#B2BED5",
                      radius: [2, 2, 2, 2],
                    };
                  } else {
                    return {
                      fill: "#E6EAF1", //节点背景色
                      stroke: "#B2BED5",
                      radius: [2, 2, 2, 2],
                    };
                  }
                }
              },
            },
            edgeCfg: {
              ...state.edgeCfg,
              style: (edge) => {
                const stroke = "#aaa"; //线颜色
                let arr = relationList[curId].map((ele) =>
                  parseInt(ele).toString()
                );
                if (arr.includes(edge.target)) {
                  console.log(
                    relationList[curId],
                    edge.source,
                    edge.target,
                    curId
                  );
                  return {
                    stroke: "red",
                    lineWidth: 2,
                    strokeOpacity: 1,
                  };
                } else {
                  return {
                    stroke,
                    strokeOpacity: 1,
                  };
                }
              },
              edgeStateStyles: {
                hover: {
                  lineWidth: 2,
                  strokeOpacity: 1,
                },
              },
            },
          };
        });
      } else {
        setStateConfig(config);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [curId, relationList]
  );

  const [stateConfig, setStateConfig] = useState(config);
  console.log(resetList, "resetList");

  const HandleClick = (props) => {
    let res;
    if (props.key == "sub1") {
      console.log(nodes);
      setData(nodes);
      res = nodes;
      setRelationList(resetRelationList);
      setUrlList(resetUrlList);
    } else if (props.key == "sub2") {
      console.log(nodes2);
      res = nodes2;
      setData(nodes2);
      setRelationList(safeRelationList);
      setUrlList(safeUrlList);
    } else if (props.key == "sub3") {
      res = nodes3;
      setData(nodes3);
      setRelationList(normalRelationList);
      setUrlList(normalUrlList);
    }
    setMenuKey(props.key);
    nodeClick("");
    setStateConfig((state) => ({ ...state, data: res }));
  };

  const changeData = () => {
    const obj2 = {
        "Software Test Case - Vehicle": 1,
        "Verification - HIL": 1,
        "Software Test Case - Component": 1,
        "Software Test Case - Subsystem": 1,
      },
      arr = [];
    let res = JSON.parse(JSON.stringify(data));
    res = {
      ...res,
      nodes: res.nodes.filter((ele) => {
        if (obj2[ele.value.title.trim()]) {
          arr.push(ele.id);
          return false;
        }
        return true;
      }),
      edges: res.edges.filter((ele) => !arr.includes(ele.target)),
    };
    console.log(res, data, arr);
    setData(res);
    setStateConfig((state) => {
      return {
        ...state,
        data: res,
      };
    });
  };
  const handleResetData = () => {
    let res = nodeObj[menuKey];
    setData(res);
    setStateConfig((state) => {
      return {
        ...config,
        data: res,
      };
    });
  }
  console.log(stateConfig);
  return (
    <Layout hasSider style={{ height: "100vh" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          width: "30vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          paddingTop: 40,
        }}
      >
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={item} /> */}
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={["sub1"]}
          defaultOpenKeys={["SubMenu1"]}
        >
          <SubMenu
            key="SubMenu1"
            icon={<SettingOutlined />}
            title={resetList[0].Feature}
          >
            <Menu.Item key="sub1" onClick={HandleClick}>
              {resetList[0].Feature}
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="SubMenu2"
            icon={<SettingOutlined />}
            title={goalList[0].Feature}
          >
            <Menu.Item key="sub2" onClick={HandleClick}>
              {goalList[0].Feature}
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="SubMenu3"
            icon={<SettingOutlined />}
            title="Vehicle Attribute"
          >
            <Menu.Item key="sub3" onClick={HandleClick}>
              {nominalList[0].Feature}
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content
        className="site-Content"
        style={{
          marginLeft: "200px",
        }}
      >
        <div className="fiter">
          <Space>
            <Button type="primary" size="large" ghost onClick={changeData}>
              Requirement Coverage
            </Button>
            <Button size="large" onClick={handleResetData}>
              Test Case Coverage
            </Button>
          </Space>
        </div>
        <div className='cavasContent' key={menuKey}>
        <FlowAnalysisGraph {...stateConfig} />
        </div>
      </Content>
    </Layout>
    // </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// registerServiceWorker();
