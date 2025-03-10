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

interface CardsProps extends LayoutProps {
  colNumber: string
  withTitle?: boolean
  bigCenteredTitle?: boolean
  title: types.TextValue
  subtitle: types.TextValue
  cards: types.RepeaterItems
}

const Cards: types.Brick<CardsProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
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
            className={classNames(bigCenteredTitle ? 'mb-10' : 'mb-8')}
            bigCentered={bigCenteredTitle}
          />
        )}
        <div
          className={classNames(
            'grid gap-[30px] grid-cols-1',
            width === 'small' ? 'lg:grid-cols-2' : 'md:grid-cols-2'
          )}
        >
          <Repeater propName="cards" items={cards} />
        </div>
      </Container>
    </Section>
  )
}

Cards.schema = {
  name: blockNames.Cards,
  label: 'Cards',
  category: 'main content',
  tags: ['cards', 'thumbnails', 'features'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Cards}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    withTitle: true,
    bigCenteredTitle: false,
    title: 'Join our community',
    subtitle:
      "Join our community of over 6,500 React developers: let's change the way people edit websites!",
    cards: [
      {
        withIcon: true,
        withTitle: true,
        withLink: true,
        icon: icons.YOUTUBE,
        title: 'YouTube channel',
        description: 'Watch insider previews, feature demos, and interviews.',
        linkText: 'Watch now',
      },
      {
        withIcon: true,
        withTitle: true,
        withLink: true,
        icon: icons.TWITTER,
        title: 'Twitter',
        description: 'Get the latest event updates about React Bricks.',
        linkText: 'Follow us now',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'cards',
      itemType: blockNames.Card,
      itemLabel: 'Card',
      min: 0,
      max: 6,
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

export default Cards
