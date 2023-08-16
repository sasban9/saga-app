import { List, Tag } from 'antd';
import React from 'react'
const data = [
    <>1. SCHOOL Setup <Tag color="green">8/8</Tag></>,
    <>2. SCHOOL & PHOTOS <Tag color="orange">8/8</Tag></>,
    <>3. Ready for SALES <Tag color="red-inverse">0/8</Tag></>,
    <>4. SALES Info <Tag color="red">8/8</Tag></>,
    <>5. PRODUCTION Checklist <Tag color="green">8/8</Tag></>,
    <>6. PRODUCTION Ready <Tag color="green-inverse">4/12</Tag></>,
    <>7. INVOICING Checklist <Tag color="orange-inverse">8/19</Tag></>,
    <>8. INVOICING Ready <Tag color="green">8/8</Tag></>,
  ];
const StepsList = () => {
  return (
    <List
      style={{background:'cornsilk'}} //mistyroad, papayawhip
      // header={<h2>START SELLING!</h2>}
      footer={<h3>&copy; 2023 PixFirst</h3>}
      bordered size='small'
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  )
}

export default StepsList