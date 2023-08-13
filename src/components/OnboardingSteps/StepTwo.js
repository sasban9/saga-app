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
  
  const StepTwo = () => {
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
            <Button type="link">NEXT: READY FOR SALES</Button>
          </div>
        </Col>
        {/* <Col xs={24} md={3} lg={4} xl={6}>
          <Button type="link">&laquo; Ready for PRODUCTION</Button>
        </Col> */}
        <Col xs={24} md={18} lg={16} xl={12}>
          <h2>2️⃣ School & Photos</h2>
          <p>2/10 checks cleared</p>
          <Progress percent={"20.00"} strokeColor='orange' />
  
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
              <img alt=""
                src="https://ouch-cdn2.icons8.com/i3NpK6Z-apIsbZwOkOCaU6mzZRCRuqTSBnSBHTJlohE/rs:fit:256:237/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDE4/L2VkMjk3Zjk0LTA2/YjMtNGI3Mi1hMTFi/LTE0YTQyYzQ5MmNl/Ni5wbmc.png"
                align="right"
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
            <Panel header="This is panel header 1" key="4">
            <img
              src="https://ouch-cdn2.icons8.com/nDM0-LVSiT0eytjNwnY1337ubIAk2UnCho9Wdd1bySk/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDIx/LzJlNjQzNzNiLTEz/ZjgtNGNlZi1hMGM3/LWIxNzgyMDhkNmRj/OS5wbmc.png"
              alt=""
              align="left"
            />
              {text}
            </Panel>
            <Panel header="This is panel header 2" key="5">
              {text}
            </Panel>
            <Panel header="This is panel header 3" key="6">
              {text}
            </Panel>
          </Collapse>
        </Col>
      </>
    );
  };
  
  export default StepTwo;
  