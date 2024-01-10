import { create } from '@stylexjs/stylex';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { CustomRootMarkdown } from '../Markdown';
import { spacing } from '../tokens.stylex';

export function BlogPage() {
  const [content, setContent] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetchBlog(id ?? '').then(setContent);
  }, [id]);
  const ast = unified().use(remarkParse).use(remarkGfm).parse(content);
  return <CustomRootMarkdown content={ast} style={styles.page} />;
}

async function fetchBlog(blogId: string) {
  const url = '/blog/' + blogId + '.md';
  const response = await fetch(url);
  return await response.text();
}

const styles = create({
  page: {
    maxWidth: '700px',
    overflowX: 'auto',
    marginTop: spacing.large,
  },
});
