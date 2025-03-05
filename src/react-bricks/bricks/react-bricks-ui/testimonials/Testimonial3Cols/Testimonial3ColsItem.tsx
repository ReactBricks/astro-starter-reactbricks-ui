import { Image, Plain, Text, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import { avatars } from '../../shared/defaultImages'

export interface TestimonialProps {
  quote: types.TextValue
  authorName: types.TextValue
  authorJobTitle: types.TextValue
  avatarImage: types.IImageSource
  logoImage: types.IImageSource
}

const Testimonial3ColsItem: types.Brick<TestimonialProps> = ({
  quote,
  authorName,
  authorJobTitle,
  avatarImage,
  logoImage,
}) => {
  return (
    <div>
      <Text
        propName="quote"
        value={quote}
        renderBlock={(props) => (
          <blockquote className={`leading-7 mb-5 ${textColors.GRAY_700}`}>
            {props.children}
          </blockquote>
        )}
        placeholder="Quote..."
        renderPlaceholder={(props) => {
          return <span>{props.children}</span>
        }}
      />
      <cite className="flex items-center not-italic">
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
              <div className={`text-sm font-extrabold ${textColors.GRAY_800}`}>
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
      </cite>
    </div>
  )
}

Testimonial3ColsItem.schema = {
  name: blockNames.Testimonial3ColsItem,
  label: 'Single Testimonial',
  category: 'testimonials',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    quote: "I'm smart enough to know that I'm dumb.",
    authorName: 'Richard Feynman',
    authorJobTitle: 'Theoretical physicist',
    avatarImage: avatars.PLACEHOLDER1,
  }),
}

export default Testimonial3ColsItem
