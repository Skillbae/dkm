import { Card, Col, Row } from 'antd';

const InfoCards = () => {
  return(
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={4}>
        <Card title="Card title" bordered={true}>
          Card content
        </Card>
      </Col>
      <Col span={4}>
        <Card title="Card title" bordered={true}>
          Card content
        </Card>
      </Col>
      <Col span={4}>
        <Card title="Card title" bordered={true}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
  )
};

export default InfoCards;