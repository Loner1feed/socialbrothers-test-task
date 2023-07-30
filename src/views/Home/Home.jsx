import React, { useEffect } from 'react'
import { ApiService } from '../../services/ApiService';
import { Container } from '../../components/ui/Container/Container';
import { Col, Row } from 'antd';
import { CreatePostForm } from '../../components/util/CreatePostForm/CreatePostForm';
import { RecentPosts } from '../../components/util/RecentPosts/RecentPosts';

const Home = () => {

  useEffect(() => {
    ApiService.getPosts().then((res) => {
      console.log(res.data);
    })
  }, []);

  return (
    <Container>
      <Row gutter={24}>
        <Col span={10} order={1}>
          <CreatePostForm />
        </Col>
        <Col span={14} order={2}>
          <RecentPosts />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
