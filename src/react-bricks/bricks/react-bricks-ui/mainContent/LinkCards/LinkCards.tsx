import classNames from 'classnames'
import { Repeater, types } from 'react-bricks/astro'
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
import TitleSubtitle from '../../shared/components/TitleSubtitle'
import { icons } from '../../shared/defaultImages'

interface LinkCardsProps extends LayoutProps {
  withTitle?: boolean
  bigCenteredTitle?: boolean
  title: types.TextValue
  subtitle: types.TextValue
  cards: types.RepeaterItems
}

const LinkCards: types.Brick<LinkCardsProps> = ({
  backgroundColor,
  paddingTop,
  paddingBottom,
  borderTop,
  borderBottom,
  width,
  withTitle,
  bigCenteredTitle,
  title,
  subtitle,
  cards,
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
        {withTitle && (
          <TitleSubtitle
            title={title}
            subtitle={subtitle}
            className={classNames(bigCenteredTitle ? 'mb-12' : 'mb-8')}
            bigCentered={bigCenteredTitle}
          />
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          <Repeater propName="cards" items={cards} />
        </div>
      </Container>
    </Section>
  )
}
LinkCards.schema = {
  name: blockNames.LinkCards,
  label: 'Link cards',
  category: 'main content',
  tags: ['cards', 'links', 'thumbnails', 'features', 'banners'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/Features.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.LinkCards}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    withTitle: true,
    bigCenteredTitle: true,
    title: 'Why you will love React Bricks',
    subtitle:
      'We created React Bricks as a "one stop shop" to make everybody happy.',
    cards: [
      {
        title: 'Visual editing',
        text: 'The best UX on the market.',
        linkPath: 'https://reactbricks.com/visual-editing-cms',
        withIcon: true,
        icon: icons.VISUAL_EDITING,
      },
      {
        title: 'React components',
        text: 'Add visual magic to your components.',
        linkPath: 'https://reactbricks.com/react-cms',
        withIcon: true,
        icon: icons.COMPONENTS,
      },
      {
        title: 'Multilanguage',
        text: 'Internationalization? Built in.',
        withIcon: true,
        icon: icons.MULTILANGUAGE,
      },
      {
        title: 'Scheduled publishing',
        text: 'Publish at midnight? Roger.',
        withIcon: true,
        icon: icons.SCHEDULED_PUBLISHING,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'cards',
      itemType: blockNames.LinkCard,
      itemLabel: 'Card',
      min: 0,
      max: 8,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Title',
      defaultOpen: true,
      props: [
        {
          name: 'withTitle',
          label: 'With title',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'bigCenteredTitle',
          label: 'Big centered',
          type: types.SideEditPropType.Boolean,
          show: (props) => !!props.withTitle,
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}
export default LinkCards
