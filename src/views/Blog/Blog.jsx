import React, { useEffect, useState } from 'react'
import { getPosts } from '../../store/posts/posts.thunks';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsState } from '../../store/posts/posts.selectors';
import { Container } from '../../components/ui/Container/Container';
import { PostCard } from '../../components/ui/PostCard/PostCard';
import { Col, Grid, Row } from 'antd';

import './blog.style.scss';
import { CustomPagination } from '../../components/ui/CustomPagination/CustomPagination';
import { BlogSkeleton } from '../../components/ui/SkeletonLoaders/BlogSkeleton';

const { useBreakpoint } = Grid;

const Blog = () => {

  const screens = useBreakpoint();

  const dispatch = useDispatch();

  const { content, isLoading } = useSelector(getItemsState);

  const [params, setParams] = useState({
    page: 1,
    perPage: 8,
    sort_by: null,
    sortDirection: null,
    searchPhrase: null,
    categoryId: null
  });

  const pageChangeHandler = (page) => setParams({ ...params, page });

  useEffect(() => {
    dispatch(getPosts(params));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <div className="blog">
      {isLoading ? <BlogSkeleton withPagination={false} /> : (
        <Container>
          <Row gutter={[24, 24]}>
            {content?.data?.map((el) => (
              <Col span={24} lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }}>
                <PostCard key={el.id} data={el} />
              </Col>
            ))}
          </Row>

          
        </Container>
      )}

          <Row className="blog__pagination" justify="center">
            <CustomPagination
              total={content?.total}
              pageSize={params.perPage}
              onChange={pageChangeHandler}
              current={params.page}
              showSizeChanger={false}
              responsive={true}
              // disabled={isLoading}
              showLessItems={screens.xs}
            />
          </Row>
    </div>
  )
}

Blog.skeleton = BlogSkeleton;

export default Blog;