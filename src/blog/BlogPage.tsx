import { create, props } from '@stylexjs/stylex';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { commonStyles } from '../common.stylex';
import { colors, spacing } from '../tokens.stylex';

export function BlogPage() {
  const [content, setContent] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetchBlog(id ?? '').then(setContent);
  }, [id]);
  return (
    <div {...props(styles.page)}>
      <CustomMarkdown content={content} />
    </div>
  );
}

const CustomMarkdown = ({ content }: { content: string }) => (
  <Markdown
    children={content}
    components={{
      code(codeProps) {
        const { node, ...rest } = codeProps;
        return <code {...{ ...rest, ...props(styles.code) }} />;
      },
      pre(preProps) {
        const { node, ...rest } = preProps;
        return <pre {...{ ...rest, ...props(styles.pre) }} />;
      },
      hr(hrProps) {
        const { node, ...rest } = hrProps;
        return <hr {...{ ...rest, ...props(styles.hr) }} />;
      },
      h1(h1Props) {
        const { node, ...rest } = h1Props;
        return <h1 {...{ ...rest, ...props(commonStyles.h1) }} />;
      },
      h2(h2Props) {
        const { node, ...rest } = h2Props;
        return <h2 {...{ ...rest, ...props(commonStyles.h2) }} />;
      },
      h3(h3Props) {
        const { node, ...rest } = h3Props;
        return <h3 {...{ ...rest, ...props(commonStyles.h3) }} />;
      },
      h4(h4Props) {
        const { node, ...rest } = h4Props;
        return <h4 {...{ ...rest, ...props(commonStyles.h4) }} />;
      },
      p(pProps) {
        const { node, ...rest } = pProps;
        return <p {...{ ...rest, ...props(commonStyles.p) }} />;
      },
    }}
  />
);

async function fetchBlog(blogId: string) {
  const url = '/blog/' + blogId + '.md';
  const response = await fetch(url);
  return await response.text();
}

const styles = create({
  page: {
    marginBlock: '24px',
    maxWidth: '50em',
    overflowX: 'auto',
    width: '80%',
  },
  pre: {
    backgroundColor: `color-mix(in srgb, ${colors.secondary}, white 90%)`,
    border: '1px solid #bbb',
    borderRadius: '2px',
    padding: '4px 8px',
    maxWidth: '100%',
    overflowX: 'auto',
    marginBlock: spacing.small,
  },
  hr: {
    marginBlock: '12px',
    border: `1px solid ${colors.primary}`,
  },
  code: {
    backgroundColor: `color-mix(in srgb, ${colors.secondary}, white 90%)`,
    borderRadius: '2px',
  },
});
