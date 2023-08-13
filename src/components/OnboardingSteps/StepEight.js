import {
    Alert,
    Col,
    Collapse,
    Progress,
    Tag,
    Radio,
  } from "antd";
  import React, { useState } from "react";
  
  const { Panel } = Collapse;

  
  const StepEight = () => {
    const [activeKeys, setActiveKeys] = useState([1, 2, 3]);
    return (
      <>
        <Col xs={24} xl={6} style={{ textAlign: "left" }}>
          <p>Please note:</p>
          <>
            
            <Alert
              message="Some generic error message"
              showIcon
              type="error"
            />
            <Alert
              message="Address is not verified"
              type="warning"
              
            />
            
          </>
        </Col>
     
        <Col xs={24} md={18} lg={16} xl={12}>
          <h2>8️⃣ INVOICING Info</h2>
          <p>2/4 checks cleared</p>
          <Progress percent={"50.00"} />
  
          <div style={{ textAlign: "right" }}>
            <Radio.Group value={"small"} onChange={() => setActiveKeys([1])}>
              <Radio.Button value="large">Collapse All</Radio.Button>
              <Radio.Button value="small">Expand All</Radio.Button>
            </Radio.Group>
          </div>
              <img alt="" style={{margin:16}}
                src="https://ouch-cdn2.icons8.com/bPh_AVG47BckBO94mIInK0kjOv-Rh68_6l5cpbtZ_EI/rs:fit:256:352/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjQ4/LzU2YzI4MjMyLTlk/NTMtNGE2NC04ZjZk/LTllZGM4YWM4N2I4/MC5wbmc.png"
                align="right"
              />
          <Collapse bordered={false} defaultActiveKey={activeKeys}>
            <Panel
              header={
                <>
                  Invoice Amount <Tag color="green">2/2</Tag>
                </>
              }
              key="2"
            >
              Inovice amount generate for the list of orders processed <Tag color="green">YES</Tag><br/>
              Number of Print Jobs: 999
              
            </Panel>
            <Panel
              header={
                <>
                  Payments <Tag color="orange">0/2</Tag>
                </>
              }
              key="1"
            >
                <ul>
                    <li>Payment done to school <Tag color="orange">NO</Tag></li>
                    <li>Payment done to photographer <Tag color="orange">NO</Tag></li>
                </ul>
              
                
            </Panel>
            </Collapse>
        </Col>
      </>
    );
  };
  
  export default StepEight;
  