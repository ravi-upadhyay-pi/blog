import { IPost } from './model';
import { NotFound } from '../NotFound';
import { posts } from './data';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import React, { useState, useEffect } from 'react';
import { css, flexColumn } from '../styles';

export const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.url === id);
  return post != null ? <Post post={post} /> : <NotFound />;
};

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [content, setContent] = useState('');
  useEffect(() => {
    (async () => {
      const response = await fetch('/blog_content/' + post.contentFileName);
      setContent(await response.text());
    })();
  }, []);
  return (
    <div className={postContainerClass()}>
      <h1>{post.title}</h1>
      <div>{post.author}</div>
      <div>{post.date.toLocaleDateString()}</div>
      <div className={lineClass()}></div>
      <Markdown>{content}</Markdown>
    </div>
  );
};

const postContainerClass = css(flexColumn, {
  marginTop: '16px',
  width: '600px',
});

const lineClass = css({
  backgroundColor: '#900',
  height: '1px',
});
