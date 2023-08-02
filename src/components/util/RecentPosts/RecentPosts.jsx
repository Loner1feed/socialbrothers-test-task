import React, { useEffect, useState } from 'react';

import './recentPosts.style.scss';
import { ContentCard } from '../../ui/ContentCard/ContentCard';
import { CustomButton } from '../../ui/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentPosts } from '../../../store/posts/posts.thunks';
import { getRecentState } from '../../../store/posts/posts.selectors';
import { PostCard } from '../../ui/PostCard/PostCard';

export const RecentPosts = () => {

  const [params, setParams] = useState({
    page: 1,
    perPage: 4,
    sort_by: "created_at",
    sortDirection: "desc",
    searchPhrase: null,
    categoryId: null
  });

  const dispatch = useDispatch();

  const { content, isLoading } = useSelector(getRecentState);

  const showMoreHandler = () => setParams({ ...params, perPage: params.perPage + 4 });

  useEffect(() => {
    dispatch(getRecentPosts(params));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    console.log(content);
  }, [content]);
  
  return (
    <ContentCard customClassName="recentPosts">
      <div className="recentPosts__grid">
        {content?.data.map((el) => <PostCard data={el} />)}
      </div>

      <CustomButton disabled={isLoading} style={{ marginTop: "auto" }} onClick={showMoreHandler}>Laad meer</CustomButton>
    </ContentCard>
  )
}
