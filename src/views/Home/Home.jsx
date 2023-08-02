import React from 'react';
import { Container } from '../../components/ui/Container/Container';
import { Col, Row } from 'antd';
import { CreatePostForm } from '../../components/util/CreatePostForm/CreatePostForm';
import { RecentPosts } from '../../components/util/RecentPosts/RecentPosts';

import './home.style.scss';

const Home = () => {

  return (
    <Container customClassName="home">
      <Row className="home__row" gutter={24} align="stretch">
        <Col className="home__col" span={24} md={{ span: 10 }} order={1}>
          <CreatePostForm />
        </Col>
        <Col className="home__col" span={24} md={{ span: 14 }} order={2}>
          <RecentPosts />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
