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
  
  const StepThree = () => {
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
          <div style={{ textAlign: "right" }}>
            <Button type="link">NEXT: SALES Info</Button>
          </div>
        </Col>
     
        <Col xs={24} md={18} lg={16} xl={12}>
          <h2>3️⃣ Ready for SALES</h2>
          <p>4/11 checks cleared</p>
          <Progress percent={"37.00"} />
  
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
                src="https://ouch-cdn2.icons8.com/gMrGqwlYY6y40X8KB8DQi2jD2qltkzJVQyEfiwH53ic/rs:fit:256:210/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzU3/Lzk4OTJiZjFhLWJh/ZWQtNDcxMC1hNmRi/LTdmMDFjNDlhODIw/YS5wbmc.png"
                align="left"
              />
              <ol>
                
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
          {
            <img
              src="https://ouch-cdn2.icons8.com/1LD4aARyF3lTTZK3NcrFBb7kisBwsrO331Pfg1AgclQ/rs:fit:256:192/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDcx/LzBmMDQ0MGQzLTJk/MDctNGM1NC1iMzJk/LTE2YTE3YWZkNTJl/Ni5wbmc.png"
              alt=""
              align="right"
            />
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
          </Collapse><br/>
                    <div>
          DATA: <br/>
          Check magic upload based on photographer requirements (require original photo, fails if thumbnails are uploaded) <br/>
          Check group normal and fun tagged properly. <br/>
          Check group normal and fun uploaded all required classes. <br/>
          CALCULATED: <br/>
          School year <br/>
          Pose mismatch <br/>
          Check for photo tag and orientation <br/>
          Check access card link generated for all albums <br/>
          Check for which products will be printed by pixfirst and photographer <br/>
          Check for packs with sub-products <br/>
          Pack with zero sub-products <Tag color="green">NONE</Tag><br/>
          Sub-products from which lab <br/>
          3rd check box should be enabled for all sub-products of pack <br/>
            Utiliser des exemples de photos téléchargées  (display product specimen in product page) <br/>
            Utiliser pour l'affichage  (visual structure for a product parent in product page) <br/>
            Utiliser pour impression (should be active for printing) <br/>
          Automatic calculation of pack price and discount amount <Tag color="green">ENABLED</Tag> <br/>
          Products with "0" price in price list <Tag color="green">NONE</Tag><br/>
          Special effect activated but previews not generated <Tag color="green">NONE</Tag> <br/>
          Check for original photo upload (required if HD product is sold) <Tag color="red">NOT DONE</Tag><br/>
          Check for number of products available for below tags in price list <br/>
          Individual, Individual pose 02, Individual vertical, <br/>
          Individual horizontal, Individual horizontal pose 02,  <br/>
          Fratrie vertical, Fratrie horizontal <br/>
          Group normal and fun <br/>
          Access cards are generated  <br/>
          Access cards distributed  <br/>
          Class and album delete is not allowed after access card distributed <br/>
          Album move feature is in pipeline <br/>
          For Green screen school <br/>
          “Écran vert” - checked in school settings <br/>
          Background photos should be tagged as “Produit fond vert” <br/>
          “Produit fond vert” photos should be uploaded to all classes where “Photo détourée” are uploaded <br/>
          Different “Produit fond vert” should be used based on the orientation of the Photo détourée. <br/>
          PNG photos should be tagged as “Photo détourée” <br/>
          All products should be tagged as “Produit fond vert” except products where “Photo détourée” tags are used in inside print and visual structure. <br/>
          In print and visual structures, there should be two items for where kid photo will appear <br/>
          First item will be “Produit fond vert” <br/>
          Second item will be “Photo détourée” <br/>
          Check for latest photos uploaded <br/>
          Access cards generation <br/>
          Access cards distribution <br/>
          Check for magic upload flow for photos uploaded after first round of magic upload 
          </div>
        </Col>
      </>
    );
  };
  
  export default StepThree;
  