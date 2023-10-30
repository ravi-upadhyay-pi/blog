import { css, flexColumn, flexRow } from '../styles';
import { AboutMe } from './AboutMe';
import { ShortPost } from './ShortPost';
import { posts } from './data';

export const Posts = () => {
  return (
    <div className={containerClass()}>
      <h1>Blog</h1>
      {posts.map((post) => (
        <ShortPost post={post} />
      ))}
      <AboutMe />
    </div>
  );
};

const containerClass = css(flexColumn, {
  border: '2px solid #ddd',
  borderRadius: '2px',
  marginTop: '16px',
  padding: '12px',
  width: '800px',
});
