import { Col, Row, Tabs } from "antd";
import React from "react";
import {StepEight, StepFive, StepFour, StepOne, StepSix, StepThree, StepTwo} from "./OnboardingSteps";
import StepSeven from "./OnboardingSteps/StepSeven";
const Onboarding = () => {

  const items = [
    {
      key: 1,
      label: "1. School Setup",
      children: <Row gutter={24}><StepOne /></Row>
    },
    {
      key: 2,
      label: "2. School & Photos",
      children: <Row gutter={24}><StepTwo /></Row>
    },
    {
      key: 3,
      label: "3. Ready for SALES",
      children: <Row gutter={24}><StepThree /></Row>
    },
    {
      key: 4,
      label: "4. SALES Info",
      children: <Row gutter={24}><StepFour /></Row>
    },
    {
      key: 5,
      label: "5. Ready for PRODUCTION",
      children: <Row gutter={24}><StepFive /></Row>
    },
    {
      key: 6,
      label: "6. PRODUCTION Info",
      children: <Row gutter={24}><StepSix /></Row>
    },
    {
      key: 7,
      label: "7. Ready for INVOICING",
      children: <Row gutter={24}><StepSeven /></Row>
    },
    {
      key: 8,
      label: "8. INVOICING Info",
      children: <Row gutter={24}><StepEight /></Row>
    }
  ]
  return (
    <Row gutter={32}>
      <Col span={24}>
        <Tabs defaultActiveKey="1" centered items={items}>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Onboarding;
