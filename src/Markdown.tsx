import { StyleXStyles, create, props } from '@stylexjs/stylex';
import { Heading as HeadingAst, RootContent } from 'mdast';
import { Root } from 'remark-gfm/lib';
import { commonStyles } from './common.stylex';
import { colors, spacing } from './tokens.stylex';

export interface CustomRootMarkdownProps {
  content: Root;
  style: StyleXStyles;
}

export const CustomRootMarkdown = ({ content, style }: CustomRootMarkdownProps) => (
  <div {...props(style)}>
    {content.children.map((child, index) => (
      <CustomMarkdownContent key={index} content={child} />
    ))}
  </div>
);

interface CustomMarkdownContentsProps {
  content: RootContent[];
}

function CustomMarkdownContents({ content }: CustomMarkdownContentsProps) {
  return content.map((child, index) => <CustomMarkdownContent key={index} content={child} />);
}

interface CustomMarkdownContentProps {
  content: RootContent;
}

function CustomMarkdownContent({ content }: CustomMarkdownContentProps) {
  switch (content.type) {
    case 'heading':
      return <Heading content={content} />;
    case 'blockquote':
      return <NotSupported content={content} />;
    case 'break':
      return <br />;
    case 'code':
      return <pre {...props(styles.pre)}>{content.value}</pre>;
    case 'definition':
      return <NotSupported content={content} />;
    case 'delete':
      return (
        <span {...props(styles.delete)}>
          <CustomMarkdownContents content={content.children} />
        </span>
      );
    case 'emphasis':
      return (
        <span {...props(styles.emphasis)}>
          <CustomMarkdownContents content={content.children} />
        </span>
      );
    case 'footnoteDefinition':
      return <NotSupported content={content} />;
    case 'footnoteReference':
      return <NotSupported content={content} />;
    case 'html':
      return <NotSupported content={content} />;
    case 'image':
      return <NotSupported content={content} />;
    case 'imageReference':
      return <NotSupported content={content} />;
    case 'inlineCode':
      return <code {...props(styles.code)}>{content.value}</code>;
    case 'link':
      return <NotSupported content={content} />;
    case 'linkReference':
      return <NotSupported content={content} />;
    case 'list':
      return <NotSupported content={content} />;
    case 'listItem':
      return <NotSupported content={content} />;
    case 'paragraph':
      return (
        <p {...props(styles.p)}>
          <CustomMarkdownContents content={content.children} />
        </p>
      );
    case 'strong':
      return (
        <strong>
          <CustomMarkdownContents content={content.children} />
        </strong>
      );
    case 'table':
      return <NotSupported content={content} />;
    case 'tableCell':
      return <NotSupported content={content} />;
    case 'tableRow':
      return <NotSupported content={content} />;
    case 'text':
      return <>{content.value}</>;
    case 'thematicBreak':
      return <hr {...props(styles.hr)} />;
    case 'yaml':
      return <NotSupported content={content} />;
    default:
      return <NotSupported content={content} />;
  }
}

interface HeadingProps {
  content: HeadingAst;
}

function Heading({ content }: HeadingProps) {
  const phrasingContent = <CustomMarkdownContents content={content.children} />;
  switch (content.depth) {
    case 1:
      return <h1 {...props(commonStyles.h1)}>{phrasingContent}</h1>;
    case 2:
      return <h2 {...props(commonStyles.h2)}>{phrasingContent}</h2>;
    case 3:
      return <h3 {...props(commonStyles.h3)}>{phrasingContent}</h3>;
    case 4:
      return <h4 {...props(commonStyles.h4)}>{phrasingContent}</h4>;
    case 5:
      return <h5>{phrasingContent}</h5>;
    case 6:
      return <h6>{phrasingContent}</h6>;
    default:
      return <></>;
  }
}

interface NotSupportedProps {
  content: RootContent;
}

function NotSupported({ content }: NotSupportedProps) {
  return (
    <div {...props(styles.notSupported)}>
      <div>Not Supported</div>
      <div>{JSON.stringify(content)}</div>
    </div>
  );
}

async function fetchBlog(blogId: string) {
  const url = '/blog/' + blogId + '.md';
  const response = await fetch(url);
  return await response.text();
}

const styles = create({
  pre: {
    backgroundColor: `color-mix(in oklab, ${colors.primary}, white 95%)`,
    border: '1px solid #bbb',
    borderRadius: '2px',
    padding: spacing.small,
    maxWidth: '100%',
    overflowX: 'auto',
    marginBlock: spacing.small,
  },
  hr: {
    marginBlock: '12px',
    border: `1px solid ${colors.primary}`,
  },
  code: {
    backgroundColor: `color-mix(in oklab, ${colors.primary}, white 95%)`,
    paddingInline: spacing.small,
    borderRadius: spacing.xsmall,
    display: 'inline-flex',
  },
  delete: {
    textDecoration: 'line-through',
  },
  emphasis: {
    fontStyle: 'italic',
  },
  p: {
    marginBlock: spacing.small,
  },
  notSupported: {
    backgroundColor: 'red',
    padding: spacing.small,
    minHeight: '240px',
  },
});
