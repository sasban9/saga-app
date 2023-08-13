import { Alert, Col, Collapse, Progress, Radio, Button, Tag } from "antd";
import React, { useState } from "react";


const StepSix = () => {
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
            <Button type="link">NEXT: Ready for INVOICING</Button>
          </div>
      </Col>

      <Col xs={24} md={18} lg={16} xl={12}>
        <h2>6️⃣ PRODUCTION Info</h2>
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
          height={300}
          src="https://ouch-cdn2.icons8.com/c66_qcYMmT_TqxPWLC_iJv-esURi4ITAbRQE5r4J7tE/rs:fit:256:352/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjEw/L2E4YTUxMDhjLTMw/NmYtNGFhMS1iYTJj/LTI4NWZlNmRlN2Uz/Ny5wbmc.png"
          align="right"
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

export default StepSix;
