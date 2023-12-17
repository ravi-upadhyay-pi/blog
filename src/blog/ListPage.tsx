import { create, props } from '@stylexjs/stylex';
import { Link } from 'react-router-dom';
import { commonStyles } from '../common.stylex';
import { posts } from './shared/data';
import type { IPost } from './shared/model';

function postUrl(post: IPost) {
  return '/blog/' + post.url;
}

export function ListPage() {
  return (
    <div {...props(styles.list)}>
      <h1 {...props(commonStyles.h1)}>Blog</h1>
      <ul {...props(styles.item)}>
        {posts.map((post) => (
          <li key={post.url}>
            <div {...props(styles.description)}>
              <Link to={postUrl(post)}>{post.title}</Link>
              <span>{post.summary}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = create({
  list: {
    border: '2px solid #ddd',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '16px',
    padding: '12px',
    width: '800px',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    marginBottom: '16px',
    marginLeft: '16px',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
});
