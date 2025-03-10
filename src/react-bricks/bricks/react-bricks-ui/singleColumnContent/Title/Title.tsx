import { types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  containerWidthSideGroup,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import type { Padding, Size } from '../../shared/components/Container'
import Container from '../../shared/components/Container'
import type { Border } from '../../shared/components/Section'
import Section from '../../shared/components/Section'
import TitleSubtitle from '../../shared/components/TitleSubtitle'

interface TitleProps extends LayoutProps {
  backgroundColor: { color: string; className: string }
  backgroundImage: types.IImageSource
  paddingTop: Padding
  paddingBottom: Padding
  borderTop: Border
  borderBottom: Border
  width: Size
  bigCentered: boolean
  extraboldTitle: boolean
  title: types.TextValue
  subtitle: types.TextValue
}

const Title: types.Brick<TitleProps> = ({
  bigCentered,
  extraboldTitle,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  title,
  subtitle,
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
        <TitleSubtitle
          title={title}
          subtitle={subtitle}
          bigCentered={bigCentered}
          extraboldTitle={extraboldTitle}
        />
      </Container>
    </Section>
  )
}

Title.schema = {
  name: blockNames.Title,
  label: 'Title',
  category: 'single column / blog',
  tags: ['title'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Title}.png`,
  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    paddingTop: '0',
    paddingBottom: '0',
    title: 'Thick as a brick',
    subtitle: "All in all you're just another brick in the page",
    bigCentered: true,
    extraboldTitle: false,
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
    {
      groupName: 'Text',
      defaultOpen: true,
      props: [
        {
          name: 'bigCentered',
          label: 'Big centered',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'extraboldTitle',
          label: 'Extra bold Title',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
}

export default Title
