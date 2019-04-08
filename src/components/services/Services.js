import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class Services extends Component {
    render() {
        return(
            <div id="services" className="services-section" >
                <h1>Services</h1>
                <Row  gutter={16}>
                    <Col span={8}>
                        <Card hoverable title="Service 1" bordered={true}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable title="Service 2" bordered={true}>Card content</Card>
                    </Col>
                    <Col span={8}>
                        <Card hoverable title="Service 3" bordered={true}>Card content</Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Services;