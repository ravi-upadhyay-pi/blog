import { create, props } from '@stylexjs/stylex';
import { Heading, RootContent } from 'mdast';
import { commonStyles } from '../styles/common';
import { colors, spacing } from '../styles/tokens.stylex';
import { getAnchorText, getAstText } from './Toc';

interface MarkdownContentsProps {
  content: RootContent[];
}

export function MarkdownContents({ content }: MarkdownContentsProps) {
  return content.map((child, index) => <MarkdownContent key={index} content={child} />);
}

interface MarkdownContentProps {
  content: RootContent;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  switch (content.type) {
    case 'heading':
      return <HeadingContent content={content} />;
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
          <MarkdownContents content={content.children} />
        </span>
      );
    case 'emphasis':
      return (
        <span {...props(styles.emphasis)}>
          <MarkdownContents content={content.children} />
        </span>
      );
    case 'footnoteDefinition':
      return <NotSupported content={content} />;
    case 'footnoteReference':
      return <NotSupported content={content} />;
    case 'html':
      return <NotSupported content={content} />;
    case 'image':
      ``;
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
          <MarkdownContents content={content.children} />
        </p>
      );
    case 'strong':
      return (
        <strong>
          <MarkdownContents content={content.children} />
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

interface HeadingContentProps {
  content: Heading;
}

export function HeadingContent({ content }: HeadingContentProps) {
  const phrasingContent = <MarkdownContents content={content.children} />;
  const anchorId = getAnchorText(getAstText(content));
  switch (content.depth) {
    case 1:
      return (
        <h1 id={anchorId} {...props(commonStyles.h1)}>
          {phrasingContent}
        </h1>
      );
    case 2:
      return (
        <h2 id={anchorId} {...props(commonStyles.h2)}>
          {phrasingContent}
        </h2>
      );
    case 3:
      return (
        <h3 id={anchorId} {...props(commonStyles.h3)}>
          {phrasingContent}
        </h3>
      );
    case 4:
      return (
        <h4 id={anchorId} {...props(commonStyles.h4)}>
          {phrasingContent}
        </h4>
      );
    case 5:
      return <h5 id={anchorId}>{phrasingContent}</h5>;
    case 6:
      return <h6 id={anchorId}>{phrasingContent}</h6>;
    default:
      return <></>;
  }
}

interface NotSupportedProps {
  content: RootContent;
}

export function NotSupported({ content }: NotSupportedProps) {
  return (
    <div {...props(styles.notSupported)}>
      <div>Not Supported</div>
      <div>{JSON.stringify(content)}</div>
    </div>
  );
}

const styles = create({
  customMarkdown: {
    display: 'flex',
    gap: spacing.large,
  },
  toc: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xsmall,
    height: 'fit-content',
    backgroundColor: `color-mix(in oklab, ${colors.primary} 7.5%, white)`,
    padding: spacing.small,
    borderRadius: spacing.xsmall,
    position: 'sticky',
    top: '10px',
    border: '1px solid black',
    minWidth: '250px',
  },
  markdownContent: {
    width: '75%',
  },
  pre: {
    backgroundColor: `color-mix(in oklab, ${colors.primary} 5%, white)`,
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
