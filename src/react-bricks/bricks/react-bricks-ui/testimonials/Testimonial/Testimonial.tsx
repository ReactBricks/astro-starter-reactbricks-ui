import { Image, Plain, Text, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { avatars, iconLogos } from '../../shared/defaultImages'

export interface TestimonialProps extends LayoutProps {
  quote: types.TextValue
  authorName: types.TextValue
  authorJobTitle: types.TextValue
  avatarImage: types.IImageSource
  logoImage: types.IImageSource
}

const Testimonial: types.Brick<TestimonialProps> = ({
  quote,
  authorName,
  authorJobTitle,
  avatarImage,
  logoImage,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="small"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="flex flex-col justify-center items-center"
      >
        <Text
          propName="quote"
          value={quote}
          renderBlock={(props) => (
            <blockquote
              className={`text-xl leading-8 text-center mb-6 max-w-[480px] ${textColors.GRAY_700}`}
            >
              {props.children}
            </blockquote>
          )}
          placeholder="Quote..."
          renderPlaceholder={(props) => {
            return <span>{props.children}</span>
          }}
        />
        <cite className="flex items-center justify-center not-italic">
          <Image
            propName="avatarImage"
            source={avatarImage}
            alt={
              typeof authorName === 'string'
                ? authorName
                : Plain.serialize(authorName)
            }
            aspectRatio={1}
            imageClassName="rounded-full w-10 h-10 object-contain"
          />

          <div className="ml-3 dark:text-gray-200 min-w-[90px]">
            <Text
              propName="authorName"
              value={authorName}
              renderBlock={(props) => (
                <div
                  className={`text-sm font-extrabold ${textColors.GRAY_800}`}
                >
                  {props.children}
                </div>
              )}
              placeholder="Name..."
            />
            <Text
              propName="authorJobTitle"
              value={authorJobTitle}
              renderBlock={(props) => (
                <div className={`text-xs ${textColors.GRAY_600}`}>
                  {props.children}
                </div>
              )}
              placeholder="Job title..."
            />
          </div>

          <Image
            propName="logoImage"
            source={logoImage}
            alt={
              typeof authorJobTitle === 'string'
                ? authorJobTitle
                : Plain.serialize(authorJobTitle)
            }
            imageClassName="w-20 h-10 object-contain object-left"
            renderWrapper={({ children }) => (
              <div className="ml-5 pl-5 border-l border-gray-300">
                {children}
              </div>
            )}
          />
        </cite>
      </Container>
    </Section>
  )
}

Testimonial.schema = {
  name: blockNames.Testimonial,
  label: 'Testimonial',
  category: 'testimonials',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Testimonial/Testimonial.tsx',
  previewImageUrl: `/bricks-preview-images/${blockNames.Testimonial}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    borderTop: 'boxed',
    paddingBottom: '20',
    quote:
      'React Bricks allowed us to quickly create a beautiful website that drives business goals and is easy to maintain. No one from the marketing team would ever go back!',
    authorName: 'Matteo Frana',
    authorJobTitle: 'Founder @ React Bricks',
    avatarImage: avatars.MATTEO_FRANA,
    logoImage: iconLogos.REACT_BRICKS,
  }),
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Testimonial
