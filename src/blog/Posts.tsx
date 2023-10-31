import { AboutMe } from './AboutMe';
import { ShortPost } from './ShortPost';
import { containerClass, listContainerClass } from './Posts.css';
import { posts } from './data';

export const Posts = () => {
  return (
    <div className={containerClass}>
      <h1>Blog</h1>
      <ul className={listContainerClass}>
        {posts.map((post) => (
          <ShortPost post={post} />
        ))}
      </ul>
      <AboutMe />
    </div>
  );
};
