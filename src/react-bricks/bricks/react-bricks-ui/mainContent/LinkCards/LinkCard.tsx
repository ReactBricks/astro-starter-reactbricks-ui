import classNames from 'classnames'
import { Image, Link, Text, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import { icons } from '../../shared/defaultImages'

interface LinkCardProps {
  withIcon: boolean
  withTitle: boolean
  withLink: boolean
  linkPath: string
  icon: types.IImageSource
  title: types.TextValue
  text: types.TextValue
}

const LinkCard: types.Brick<LinkCardProps> = ({
  withIcon,
  withTitle,
  linkPath,
  icon,
  title,
  text,
}) => {
  return (
    <div>
      <Link
        href={linkPath}
        className={classNames(
          'flex items-center border border-black/10 dark:border-white/10 bg-white dark:bg-white/10 p-5 rounded-sm group hover:-translate-y-[3px] hover:border-sky-500/50 hover:shadow-lg hover:text-sky-600 transition-all ease-out duration-150',
          textColors.GRAY_800
        )}
      >
        {withIcon && (
          <Image
            propName="icon"
            source={icon}
            alt="logo"
            imageClassName={`w-10 h-10 object-contain ml-0.5 mr-4`}
          />
        )}

        <div className="w-full">
          {withTitle && (
            <Text
              propName="title"
              value={title}
              renderBlock={(props) => (
                <div className="font-bold">{props.children}</div>
              )}
              placeholder="Title..."
            />
          )}

          <Text
            propName="text"
            value={text}
            renderBlock={(props) => <div>{props.children}</div>}
            placeholder="Text..."
          />
        </div>
      </Link>
    </div>
  )
}

LinkCard.schema = {
  name: blockNames.LinkCard,
  label: 'Card',
  category: 'main content',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    withIcon: true,
    withTitle: true,
    icon: icons.PHOTO_STACK,
    title: 'Visual editing',
    text: 'The best UX on the market, no training required.',
    linkPath: '/',
  }),
  sideEditProps: [
    {
      name: 'withIcon',
      label: 'With Icon',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'withTitle',
      label: 'With Title',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkPath',
      label: 'Link to',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default LinkCard
