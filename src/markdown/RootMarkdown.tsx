import { StyleXStyles, create, props } from '@stylexjs/stylex';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Root } from 'remark-gfm/lib';
import { spacing } from '../styles/tokens.stylex';
import { MarkdownContent } from './Markdown';
import { Toc, getToc } from './Toc';

export interface CustomRootMarkdownProps {
  content: Root;
  style?: StyleXStyles;
}

export const RootMarkdown = ({ content, style }: CustomRootMarkdownProps) => {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash.split('#')[1];
    if (hash == null) return;
    const targetElement = document.getElementById(hash);
    if (targetElement == null) return;
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }, [location]);
  return (
    <div {...props(styles.container, style)}>
      <div {...props(styles.content)}>
        {content.children.map((child, index) => (
          <MarkdownContent key={index} content={child} />
        ))}
      </div>
      <Toc toc={getToc(content.children)} />
    </div>
  );
};

const styles = create({
  container: {
    width: '1000px',
    marginTop: spacing.large,
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    width: '700px',
  },
});
