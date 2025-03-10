import { Link, RichText, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  containerWidthSideGroup,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

interface ParagraphProps extends LayoutProps {
  text: types.TextValue
}

const Paragraph: types.Brick<ParagraphProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  text,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <RichText
          propName="text"
          value={text}
          placeholder="Paragraph..."
          renderBlock={({ children }) => (
            <p className="text-base leading-7 mt-6 mb-6 text-gray-800 dark:text-gray-100">
              {children}
            </p>
          )}
          allowedFeatures={[
            types.RichTextFeatures.Heading2,
            types.RichTextFeatures.Heading3,
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Link,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.UnorderedList,
            types.RichTextFeatures.OrderedList,
          ]}
          renderH2={({ children }) => {
            return (
              <h2 className="text-2xl leading-7 font-bold text-gray-800 dark:text-white mt-6 mb-2">
                {children}
              </h2>
            )
          }}
          renderH3={({ children }) => {
            return (
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-6 mb-2">
                {children}
              </h3>
            )
          }}
          renderUL={({ children }) => (
            <ul className="list-disc list-outside ml-5 mt-4 text-gray-800 dark:text-gray-200">
              {children}
            </ul>
          )}
          renderOL={({ children }) => (
            <ol className="list-decimal list-outside ml-5 mt-4 text-gray-800 dark:text-gray-200">
              {children}
            </ol>
          )}
          renderLink={({ children, href }) => (
            <Link
              href={href}
              className="inline-block text-sky-500 hover:text-sky-600 font-bold hover:-translate-y-px hover:underline transition-all ease-out duration-150"
            >
              {children}
            </Link>
          )}
        />
      </Container>
    </Section>
  )
}

Paragraph.schema = {
  name: blockNames.Paragraph,
  label: 'Paragraph',
  category: 'single column / blog',
  tags: ['blog', 'paragraph', 'text'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Paragraph/Paragraph.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.Paragraph}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    paddingTop: '0',
    paddingBottom: '0',
    text: [
      {
        type: 'h2',
        children: [
          {
            text: 'Lorem ipsum dolor sit title',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sagittis faucibus.',
          },
        ],
      },
    ],
  }),
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default Paragraph
