import { Alert, Col, Collapse, Progress, Radio, Button, Tag } from "antd";
import React, { useState } from "react";

const StepFive = () => {
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
          <Button type="link">NEXT: PRODUCTION Info</Button>
        </div>
      </Col>

      <Col xs={24} md={18} lg={16} xl={12}>
        <h2>5️⃣ Ready for PRODUCTION</h2>
        <p>8/19 checks cleared</p>
        <Progress percent={"45.00"} strokeColor={"orange"} />

        <div style={{ textAlign: "right" }}>
          <Radio.Group value={"small"} onChange={() => setActiveKeys([1])}>
            <Radio.Button value="large">Collapse All</Radio.Button>
            <Radio.Button value="small">Expand All</Radio.Button>
          </Radio.Group>
        </div>
        <Collapse defaultActiveKey={activeKeys} />
        <div>
          <img
            alt=""
            style={{ margin: 16 }}
            src="https://ouch-cdn2.icons8.com/dtG7UTHfCcpiodoHrJtOq_w3P-YFcfUHDgWNnxWxuIA/rs:fit:256:289/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzA0/LzA0ODk1NTNkLWQ1/ZGMtNGE2Zi1hNTQ3/LTU4ZTdkNDY0NTli/MC5wbmc.png"
            align="right"
          />
          <h3>
            Photos <Tag color="orange-inverse">7/10</Tag>
          </h3>
          ✔️ Original photos uploaded? <Tag color="green">DONE</Tag> <br />
          ✔️ SFTP setup for photographer (if photographer is printing):{" "}
          <Tag color="green">DONE</Tag> <br />
          ✔️ Magic upload square photos looking right (not cropped)?{" "}
          <Tag color="green">DONE</Tag> <br />❌ Group and Group Fun photos
          coming correctly for respective classes? <Tag color="green">YES</Tag>{" "}
          <br />❌ Orientation of cartonnages for horizontal photos{" "}
          <Tag color="green">DONE</Tag> <br />
          ✔️ Album cover photo is marked correctly for the multi-poses?{" "}
          <Tag color="green">DONE</Tag> <br />( Example: In Green-screen schools
          if the cover photos are not correct, the cartonnages will have errors
          ) <br />
          ✔️ Products with “Photo détourée” photos in print structure should
          have below version in HTML to PDF ( Green-Screen FIX: 0.12.1.4,
          possible white-line issue ) <hr />
          ✔️ Accessories should be marked as Accessories <br />
          ✔️ Production separator files should not get generated for
          accessories. <br />
          ✔️ Check for shipping address if PixFirst is printing <br />
          ❌ Check for mise en pochette request in ticket <br />
          <hr />
          <img alt="" style={{ margin: 16 }} height={300} src="https://ouch-cdn2.icons8.com/gwzh1o5GF0Z1mGqYjERbpfuWVJsjxB71lUQJsPwSR64/rs:fit:256:472/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODk3/LzJhOTI2MDk0LTQx/YWUtNDg2ZS1iYzli/LWU5YzFjNWUzN2Ix/Zi5wbmc.png" align="left" />
          <br />
          <h3>
            Calculated <Tag color="red-inverse">1/9</Tag>
          </h3>
          ❌ Number of square photos = Tag used to generate square photos <br />
          ❌ Print structures for all the products. <br />
          ❌ Print type for all the products. <br />
          ✔️ List the print types <br />
          ❌ Products printed by Pixfirst or photographer <br />
          ❌ Sold products are active or deleted <br />
          ❌ Flex trombi have 600 dpi in print structure page <br />
          ❌ For products with 600dpi where web kit rotation used in CSS where
          variable is set to pick kid photo or class photo. <br />❌ Items where
          radius:0.5mm radius used in CSS in print structures
        </div>
      </Col>
    </>
  );
};

export default StepFive;
