import { types } from 'react-bricks/astro'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
  sectionPaddingsEditProps,
} from '../../LayoutSideProps'
import blockNames from '../../blockNames'
import { bgColors } from '../../colors'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

interface HorizontalRuleProps extends LayoutProps {}

const HorizontalRule: types.Brick<HorizontalRuleProps> = ({
  backgroundColor,
  width,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <hr className="border-black/10" />
      </Container>
    </Section>
  )
}

HorizontalRule.schema = {
  name: blockNames.HorizontalRule,
  label: 'Horizontal Rule',
  category: 'separator',
  previewImageUrl: `/bricks-preview-images/${blockNames.HorizontalRule}.png`,
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    width: 'medium',
    paddingTop: '16',
    paddingBottom: '16',
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        backgroundColorsEditProps,
        containerSizeEditProps,
        ...sectionPaddingsEditProps,
      ],
    },
  ],
}

export default HorizontalRule
