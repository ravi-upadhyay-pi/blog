import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { RootMarkdown } from '../markdown/RootMarkdown';

export function BlogPage() {
  const [content, setContent] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetchBlog(id ?? '').then(setContent);
  }, [id]);
  const ast = unified().use(remarkParse).use(remarkGfm).parse(content);
  return <RootMarkdown content={ast} />;
}

async function fetchBlog(blogId: string) {
  const url = '/blog/' + blogId + '.md';
  const response = await fetch(url);
  return await response.text();
}
