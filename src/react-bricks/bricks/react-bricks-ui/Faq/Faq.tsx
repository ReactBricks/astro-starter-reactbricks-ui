import { Repeater, types } from 'react-bricks/astro'
import type { LayoutProps } from '../LayoutSideProps'
import {
  containerWidthSideGroup,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../LayoutSideProps'
import blockNames from '../blockNames'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'
import type { FaqQuestionProps } from './FaqItem'

export interface FaqProps extends LayoutProps {
  faqs: types.RepeaterItems<FaqQuestionProps>
}

const Faq: types.Brick<FaqProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  faqs,
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
        className="flex flex-col space-y-12"
      >
        <Repeater propName="faqs" items={faqs} />
      </Container>
    </Section>
  )
}

Faq.schema = {
  name: blockNames.Faqs,
  label: 'Faq',
  category: 'faq',
  tags: ['frequently asked questions', 'faq'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq/Faq.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.Faqs}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    borderTop: 'full',
    width: 'small',
    faqs: [
      {
        question: 'Why you should change your CMS today?',
        answer:
          'Because you care about your content creators and you are looking for a top developer experience, with a future-proof solution.',
      },
      {
        question: 'asdad',
        id: 'asd',
        answer: 'asdasd',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'faqs',
      itemType: blockNames.Faq,
      itemLabel: 'Question',
    },
  ],
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default Faq
