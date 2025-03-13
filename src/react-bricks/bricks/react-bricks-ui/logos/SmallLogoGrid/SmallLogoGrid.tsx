import classNames from 'classnames'
import { Repeater, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import { highlightTextColors } from '../../colors'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  containerWidthSideGroup,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { iconLogos } from '../../shared/defaultImages'

export interface SmallLogoGridProps extends LayoutProps {
  targetBlank: boolean
  badge: types.RepeaterItems
  logos: types.RepeaterItems
}

const SmallLogoGrid: types.Brick<SmallLogoGridProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  targetBlank,
  badge,
  logos,
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
        <Repeater
          propName="badge"
          items={badge}
          itemProps={{
            textAlign: 'left',
          }}
          renderWrapper={(items) => (
            <div className="mb-6 flex justify-start">{items}</div>
          )}
        />
        <div
          className={classNames(
            'grid gap-5 auto-rows-auto grid-cols-[repeat(auto-fit,minmax(60px,60px))]'
          )}
        >
          <Repeater
            propName="logos"
            items={logos}
            itemProps={{ targetBlank }}
          />
        </div>
      </Container>
    </Section>
  )
}
SmallLogoGrid.schema = {
  name: blockNames.SmallLogoGrid,
  label: 'Small Logo Grid',
  category: 'logos',
  tags: ['logo grid', 'logos', 'logo cloud', 'customers'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/LogoGrid/LogoGrid.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.SmallLogoGrid}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    targetBlank: true,
    badge: [
      {
        text: 'Technologies',
        badgeColor: highlightTextColors.GRAY.value,
      },
    ],
    logos: [
      {
        image: iconLogos.REACT,
        link: 'https://reactjs.org/',
      },
      {
        image: iconLogos.VUE,
        link: 'https://vuejs.org/',
      },
      {
        image: iconLogos.SVELTE,
        link: 'https://svelte.dev/',
      },
      {
        image: iconLogos.SOLID,
        link: 'https://www.solidjs.com/',
      },
      {
        image: iconLogos.ASTRO,
        link: 'https://astro.build/',
      },
      {
        image: iconLogos.REACT,
        link: 'https://reactjs.org/',
      },
      {
        image: iconLogos.VUE,
        link: 'https://vuejs.org/',
      },
      {
        image: iconLogos.SVELTE,
        link: 'https://svelte.dev/',
      },
      {
        image: iconLogos.SOLID,
        link: 'https://www.solidjs.com/',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'logos',
      itemType: blockNames.SmallLogoGridItem,
      itemLabel: 'Logo',
    },
    {
      name: 'badge',
      itemType: blockNames.Badge,
      itemLabel: 'Badge',
      min: 0,
      max: 1,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Links',
      defaultOpen: true,
      props: [
        {
          name: 'targetBlank',
          label: 'Open links in new window',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}
export default SmallLogoGrid
