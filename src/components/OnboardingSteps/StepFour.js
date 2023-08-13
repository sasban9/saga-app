import { Alert, Col, Collapse, Progress, Tag, Radio, Button } from "antd";
import React, { useState } from "react";

const { Panel } = Collapse;

const StepFour = () => {
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
            <Button type="link">NEXT: Ready for PRODUCTION</Button>
          </div>
      </Col>

      <Col xs={24} md={18} lg={16} xl={12}>
        <h2>4️⃣ SALES Info</h2>
        <p>2/7 checks cleared</p>
        <Progress percent={"30.00"} />

        <div style={{ textAlign: "right" }}>
          <Radio.Group value={"small"} onChange={() => setActiveKeys([1])}>
            <Radio.Button value="large">Collapse All</Radio.Button>
            <Radio.Button value="small">Expand All</Radio.Button>
          </Radio.Group>
        </div>
        <img
          alt=""
          style={{ margin: 16 }}
          height={300}
          src="https://ouch-cdn2.icons8.com/Fr7j0BG4-2Z_QSD-QxE6G_c5_enb8CmUREVVfl7AbCI/rs:fit:256:536/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDYz/LzQ1NTdkZTNiLTJm/NjEtNGU0OS05ZTUy/LTg2NTM3YTc2MDkw/MC5wbmc.png"
          align="right"
        />
        <Collapse bordered={false} defaultActiveKey={activeKeys}>
          <Panel
            header={
              <>
                Orders <Tag color="green">2/2</Tag>
              </>
            }
            key="2"
          >
            No of orders <br />
            Average basket: 25,00&euro; <br />
            Internet, cash, and cheque sales <br />
            Shipping cost collected (if any): 5,00&euro; <br />
            Photographer and school split <Tag color="blue">30.00%</Tag>{" "}
            <Tag color="green">70.00%</Tag> <br />
            Offers availed <br />
            Check for products deleted after sold <br />
            Cancelled orders <br />
          </Panel>
          <Panel
            header={
              <>
                Product Matrix <Tag color="orange">0/2</Tag>
              </>
            }
            key="1"
          >
            <ul>
                <li>The same products sold alone and in packs</li>
                <li> The products sold alone</li>
            </ul>
            
           
          </Panel>
          <Panel header="Cartonnages Count" key={3}>
            <img
              alt=""
              style={{ margin: 16 }}
              src="https://ouch-cdn2.icons8.com/mOfVvCJclnVLLoJTZ7VZyGewGRdJjnlv40G0kQoVYx4/rs:fit:256:309/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTA3/LzA2NGE4ZDU5LTFi/ZGItNDM4Ny1hMDk2/LWM2MTk1MmQ2ZGQy/Zi5wbmc.png"
              align="left"
            />
            Number of cartonnages expected based on sort type <br />
            <ul>
              <li>Ventes - vue par commande</li>
              <li>Ventes - vue par élève par nom de fichier </li>
            </ul>
          </Panel>
          <Panel header="Generate Cartonnages" key={4}>
            List of orders where cartonnages should not generate <br />
            <ul>
              <li>Orders with only accessories</li>
              <li>Orders with HD product only</li>
            </ul>
          </Panel>
        </Collapse>
      </Col>
    </>
  );
};

export default StepFour;
