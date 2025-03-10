import { Repeater, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { avatars } from '../../shared/defaultImages'

export interface TestimonialProps extends LayoutProps {
  avatarImage: types.IImageSource
  logoImage: types.IImageSource
  testimonials: types.RepeaterItems
}

const Testimonial3Cols: types.Brick<TestimonialProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  testimonials,
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
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-10"
      >
        <Repeater propName="testimonials" items={testimonials} />
      </Container>
    </Section>
  )
}

Testimonial3Cols.schema = {
  name: blockNames.Testimonial3Cols,
  label: 'Testimonial 3 cols',
  category: 'testimonials',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Testimonial/Testimonial.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.Testimonial3Cols}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    borderTop: 'boxed',
    testimonials: [
      {
        quote:
          'React Bricks allowed us to quickly create a beautiful website that drives business goals and is easy to maintain.',
        authorName: 'Stefan Nagey',
        authorJobTitle: 'Senior Dir. Engineering @ Deel',
        avatarImage: avatars.STEFAN_NAGEY,
      },
      {
        quote:
          "I've wanted to see something like this for a long time. This is how web development was always supposed to be.",
        authorName: 'Laurie Voss',
        authorJobTitle: 'Data Analyst @ Netlify',
        avatarImage: avatars.LAURIE_VOSS,
      },
      {
        quote:
          'The developer experience is great and our editors are happy as well! React Bricks fits perfectly to our needs.',
        authorName: 'Maik Jablonski',
        authorJobTitle: 'Managing Director @ Neoskop',
        avatarImage: avatars.MAIK_JABLONSKI,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'testimonials',
      itemType: blockNames.Testimonial3ColsItem,
      itemLabel: 'Testimonial',
      min: 0,
      max: 3,
    },
  ],
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Testimonial3Cols
