import React from 'react';
import { IPost } from './model';
import { Link } from 'react-router-dom';

export interface ShortPostProps {
  post: IPost;
}

export const ShortPost: React.FC<ShortPostProps> = ({ post }) => (
  <li>
    <div>
      <Link to={`/blog/${post.url}`}>{post.title}</Link>
      <div>{post.summary}</div>
    </div>
  </li>
);
