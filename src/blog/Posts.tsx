import { AboutMe } from './AboutMe';
import { ShortPost } from './ShortPost';
import { containerClass } from './Posts.css';
import { posts } from './data';

export const Posts = () => {
  return (
    <div className={containerClass}>
      <h1>Blog</h1>
      {posts.map((post) => (
        <ShortPost post={post} />
      ))}
      <AboutMe />
    </div>
  );
};
