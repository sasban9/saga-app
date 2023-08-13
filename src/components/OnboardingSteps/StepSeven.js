import { Alert, Col, Collapse, Progress, Radio, Button, Tag } from "antd";
import React, { useState } from "react";


const StepSeven = () => {
  const [activeKeys, setActiveKeys] = useState([1, 2, 3]);
  return (
    <>
      <Col xs={24} xl={6} style={{ textAlign: "left" }}>
        <p>Please note:</p>
        <>
          <Alert message="Some generic error message" showIcon type="error" />
          <Alert message="Address is not verified" type="warning" />
        </>
          <div style={{ textAlign: "right" }}>
            <Button type="link">NEXT: INVOICING Info</Button>
          </div>
      </Col>

      <Col xs={24} md={18} lg={16} xl={12}>
        <h2>7️⃣ Ready for INVOICING</h2>
        <p>4/12 checks cleared</p>
        <Progress percent={"33.00"} />

        <div style={{ textAlign: "right" }}>
          <Radio.Group value={"small"} onChange={() => setActiveKeys([1])}>
            <Radio.Button value="large">Collapse All</Radio.Button>
            <Radio.Button value="small">Expand All</Radio.Button>
          </Radio.Group>
        </div>
        <Collapse defaultActiveKey={activeKeys} />
        <div>
            <h3>Photos <Tag color="orange-inverse">7/10</Tag></h3>
            List of cancelled orders from photographer <br/>
            Orders processed in print job ID #XXXX   <br/>
            XXXX/1 to XXXX/100  <br/>
            List of print types <br/>
        <img
          alt=""
          style={{ margin: 16 }}
          src="https://ouch-cdn2.icons8.com/7KupNCeua3hOEIcCEs0zJSJmr5Qne_8G_Qcf8l1R3oU/rs:fit:256:231/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTgz/L2JhYzgyOTRiLTNk/ZTItNGNhNy04MTQ0/LTkyNmUwMTFkYjVh/NC5wbmc.png"
          align="left"
        />
            List of commandes placed with printers <br/>
            Print types <br/>
            Mise en pochette requested or not <br/>
            Marked as Billable for Invoicing <br/>
            Order update from printer  <br/>
            Unprocessed orders after first round of production <br/>
            Missed orders 

        </div>
      </Col>
    </>
  );
};

export default StepSeven;
