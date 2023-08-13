import {
  Alert,
  Button,
  Col,
  Collapse,
  Progress,
  Tag,
  Radio,
  //   Divider, Space,
} from "antd";
import React, { useState } from "react";

const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);

const StepOne = () => {
  const [activeKeys, setActiveKeys] = useState([1, 2, 3]);
  return (
    <>
      {/* <Col lg={20} xl={18}></Col> */}
      <Col xs={24} xl={6} style={{ textAlign: "left" }}>
        <p>Please note:</p>
        <>
          {/* <Alert
            message="Success Tips"
            type="success"
            showIcon
            // action={
            //   <Button size="small" type="text">
            //     UNDO
            //   </Button>
            // }
            closable
          /> */}
          <Alert
            message="Some generic error message"
            showIcon
            // description="New thumbnails need to be generated before you can proceed to next step."
            type="error"
            // action={
            //   <Button size="small" danger>
            //     More details
            //   </Button>
            // }
          />
          <Alert
            message="Address is not verified"
            type="warning"
            // action={
            //   <Space>
            //     <Button size="small" type="ghost">
            //       Done
            //     </Button>
            //   </Space>
            // }
            // closable
          />
          {/* <Alert
            // message="Info Text"
            message="Info Description Info Description Info Description Info Description"
            type="info"
            // action={
            //   <Space direction="vertical">
            //     <Button size="small" type="primary">
            //       Accept
            //     </Button>
            //     <Button size="small" danger type="ghost">
            //       Decline
            //     </Button>
            //   </Space>
            // }
            closable
          /> */}
        </>
        <div style={{ textAlign: "right" }}>
          <Button type="link">NEXT: SCHOOLS & PHOTOS</Button>
        </div>
      </Col>
      {/* <Col xs={24} md={3} lg={4} xl={6}>
        <Button type="link">&laquo; Ready for PRODUCTION</Button>
      </Col> */}
      <Col xs={24} md={18} lg={16} xl={12}>
        <h2>1️⃣ School Setup</h2>
        <p>8/8 checks cleared</p>
        <Progress percent={"100.00"} />

        <div style={{ textAlign: "right" }}>
          <Radio.Group value={"small"} onChange={() => setActiveKeys([1])}>
            <Radio.Button value="large">Collapse All</Radio.Button>
            <Radio.Button value="small">Expand All</Radio.Button>
          </Radio.Group>
        </div>
        
        <Collapse bordered={false} defaultActiveKey={activeKeys}>
          <Panel
            header={
              <>
                Shoot Planning <Tag color="green">2/2</Tag>
              </>
            }
            key="2"
          >
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    Shooting Date
                    <br />
                    <h3 style={{ color: "tomato" }}>23/08/2023</h3>
                  </td>
                  <td>
                    Photo Poses planned
                    <br />
                    <h3>2</h3>
                  </td>
                  <td>
                    Group Poses Planned?
                    <br />
                    <h3>Yes</h3>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <ol>
              <li>Planned Photo Poses: 1/2</li>
              <li>
                Planned Group Photos <Tag color="magenta">Yes</Tag>
              </li>
              <li>
                Shooting Date <Tag>23/08/2023</Tag>{" "}
              </li>
            </ol> */}
          </Panel>
          <Panel
            header={
              <>
                ECOLE-ADM Details <Tag color="orange">3/4</Tag>
              </>
            }
            key="1"
          >
            <table style={{ width: "100%", paddingBottom: 16 }}>
              <tbody>
                <tr>
                  <td>
                    Email
                    <br />
                    <b style={{ color: "blue" }}>abcjwhejhjwhe@xyz.com</b>
                  </td>
                  <td>
                    Bank details
                    <br />
                    <Tag color="red">NOT ADDED</Tag>
                  </td>
                  <td>
                    School Banner
                    <br />
                    <Tag color="green">UPLOADED</Tag>
                  </td>
                </tr>
              </tbody>
            </table>
          <img
                src="https://ouch-cdn2.icons8.com/xBbJ2CrZo4YVi95NjLiAfX09MvhLeLcGswWIA_WlFjM/rs:fit:256:249/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQ1/L2UyNjI2OTExLTZl/NjAtNDMwYS1hYTU3/LWU4M2MzN2I3ZmI0/Ni5wbmc.png"
                alt=""
                align="left" style={{margin:"16px 0"}}
              />
            <ol>
              {/* <li>
                Email: abc@xyz.com{" "}
                <Tag size="small" color="green">
                  ACTIVE
                </Tag>
              </li>
              <li>Bank Details </li>
              <li>
                School Banner <Tag color="green">UPLOADED</Tag>
              </li> */}
              School Address: <Tag color="green">VERIFIED</Tag>
              <br />
              <h3 style={{ margin: 0 }}>Ecole de Mauritians Pleus Chreme</h3>
              <p>
                50 boulevard Albin Durand
                <br />
                Cergy 95800, FRANCE
                <br /> Île-de-France Phone number 01.05.86.99.65
              </p>
              <br />
            </ol>
            
          </Panel>
          <Panel
            header={
              <>
                SFTP Account <Tag color="red">0/1</Tag>
              </>
            }
            key="3"
          >
            <p>
              SFTP Account for Photographer <Tag color="red">NOT CREATED</Tag>
            </p>
          </Panel>
        </Collapse>
        {/* <Divider /> */}
        {/* <img alt="" style={{objectFit:'contain', maxWidth:'100%'}} src="http://romlpub.unc.edu/files/2018/08/divider_line.png" /> */}
        {
          // <img
          //   src="https://ouch-cdn2.icons8.com/6-wxJzDAlKWJbi1MMk2uO1D6LIm6inM8rcxH6l_zYus/rs:fit:256:292/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzE0/L2YxODJkMjZmLWM1/NDctNDdlZi05YThh/LWI3ZTZlMDM1ODE2/YS5wbmc.png"
          //   alt=""
          //   align="left"
          // />
        }

        <Collapse bordered={false}>
          <Panel header="This is panel header 1" key="1">
            {text}
          </Panel>
          <Panel header="This is panel header 2" key="2">
            {text}
          </Panel>
          <Panel header="This is panel header 3" key="3">
            {text}
          </Panel>
        </Collapse>
      </Col>
    </>
  );
};

export default StepOne;
