import { Col, Row, Skeleton } from 'antd';
import React from 'react';

import './skeletonLoaders.style.scss';
import { Container } from '../Container/Container';

export const BlogSkeleton = ({ withPagination = true }) => (
  <Container>
    <Row gutter={[24, 24]} className="blogSkeleton">
      {[...Array(8)].map((_, i) => (
        <Col key={i} span={24} lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }}>
          <Skeleton.Node active className="blogSkeleton__item" />
        </Col>
      ))}
    </Row>

    {withPagination && <Skeleton.Input className="blogSkeleton__pagination" />}
  </Container>
)
