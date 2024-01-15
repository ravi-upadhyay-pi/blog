import { StyleXStyles, create, props } from '@stylexjs/stylex';
import { Heading, RootContent } from 'mdast';
import { colors, spacing } from '../styles/tokens.stylex';

interface TocProps {
  toc: TocData[];
  style?: StyleXStyles;
}

export const Toc = ({ toc, style }: TocProps) => (
  <div {...props(styles.toc, style)}>
    {toc.map((toc, index) => (
      <a key={index} href={`#${toc.anchor}`} {...props(getTocItemStyle(toc.level))}>
        {toc.title}
      </a>
    ))}
  </div>
);

function getTocItemStyle(level: number): StyleXStyles {
  switch (level) {
    case 1:
      return styles.tocLevel1;
    case 2:
      return styles.tocLevel2;
    case 3:
      return styles.tocLevel3;
    case 4:
      return styles.tocLevel4;
    case 5:
      return styles.tocLevel5;
    case 6:
      return styles.tocLevel6;
    default:
      return {};
  }
}

interface TocData {
  title: string;
  anchor: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export function getToc(markdownAst: RootContent[], depth: number = 2): TocData[] {
  return markdownAst
    .filter((ast): ast is Heading => ast.type === 'heading')
    .map((ast) => {
      const text = getAstText(ast);
      return {
        title: text,
        anchor: getAnchorText(text),
        level: ast.depth,
      };
    });
}

export function getAstText(ast: RootContent): string {
  switch (ast.type) {
    case 'text':
    case 'code':
    case 'inlineCode':
      return ast.value;
    case 'heading':
    case 'paragraph':
    case 'emphasis':
    case 'delete':
    case 'strong':
      return getAstText(ast.children[0]);
    default:
      return `Unexpected node (${ast.type}) found.`;
  }
}

export function getAnchorText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/ /g, '-');
}

const styles = create({
  toc: {
    backgroundColor: `color-mix(in oklab, ${colors.primary}, white 90%)`,
    'border-left': `2px solid ${colors.secondary}`,
    borderRadius: spacing.xsmall,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xsmall,
    height: 'fit-content',
    padding: spacing.small,
    position: 'sticky',
    top: '10px',
  },
  tocLevel1: {
    paddingLeft: '0px',
  },
  tocLevel2: {
    paddingLeft: '16px',
  },
  tocLevel3: {
    paddingLeft: '32px',
  },
  tocLevel4: {
    paddingLeft: '48px',
  },
  tocLevel5: {
    paddingLeft: '60px',
  },
  tocLevel6: {
    paddingLeft: '72px',
  },
});
