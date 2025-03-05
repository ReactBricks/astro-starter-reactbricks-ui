import classNames from 'classnames'
import { Repeater, types } from 'react-bricks/astro'
//import blockNames from '../blockNames'
import type { LayoutProps } from '../LayoutSideProps'
import {
  containerSizeEditProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../LayoutSideProps'
import blockNames from '../blockNames'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'

export interface DocumentsProps extends LayoutProps {
  documents: types.RepeaterItems
}

const Documents: types.Brick<DocumentsProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  documents,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        size={width}
        className={classNames(
          'grid gap-[30px] grid-cols-1',
          width === 'small' ? 'lg:grid-cols-2' : 'md:grid-cols-2'
        )}
      >
        <Repeater propName="documents" items={documents} />
      </Container>
    </Section>
  )
}

Documents.schema = {
  name: blockNames.Documents,
  label: 'Documents',
  category: 'documents',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Documents/Documents.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.Documents}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    documents: [
      {
        fileName: 'React Bricks - Horizontal',
        fileDescription: 'Vector horizontal logo of React Bricks in SVG format',
        linkText: 'Download',
        withSize: true,
        file: {
          name: 'ReactBricks_Horizontal.svg',
          size: 14.512,
          url: 'https://files.reactbricks.com/a82666b7-c82e-47f0-a087-4e0063d8c07c/ReactBricks_Horizontal.svg',
        },
      },
      {
        fileName: 'React Bricks - Vertical',
        fileDescription: 'Vector vertical logo of React Bricks in SVG format',
        linkText: 'Download',
        withSize: true,
        file: {
          name: 'ReactBricks_Vertical.svg',
          size: 14.318,
          url: 'https://files.reactbricks.com/c6f5cb23-8e80-4af0-9108-63709505e079/ReactBricks_Vertical.svg',
        },
      },
    ],
  }),
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerSizeEditProps,
  ],
  repeaterItems: [
    {
      name: 'documents',
      itemType: blockNames.Document,
      itemLabel: 'Document',
    },
  ],
}

export default Documents
