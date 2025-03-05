import classNames from 'classnames'
import * as React from 'react'
import { Image, Link, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import { logos } from '../../shared/defaultImages'

export interface LogoGridItemProps {
  link: string
  targetBlank: boolean
  image: types.IImageSource
}

interface ContentProps {
  image: types.IImageSource
}

const Content: React.FC<ContentProps> = ({ image }) => (
  <div className="content-none pb-[100%] relative">
    <Image
      propName="image"
      source={image}
      alt="customer"
      imageClassName="absolute top-0 left-0 w-full h-full object-contain"
    />
  </div>
)

const LogoGridItem: types.Brick<LogoGridItemProps> = ({
  link,
  targetBlank,
  image,
}) => {
  return (
    <Link
      href={link}
      target={targetBlank ? '_blank' : '_self'}
      className={classNames('bg-white border border-black/10 rounded-md p-4', {
        'hover:border-sky-500/50 transition-all duration-150 hover:shadow-lg hover:-translate-y-[3px]':
          link,
      })}
    >
      <Content image={image} />
    </Link>
  )
}

LogoGridItem.schema = {
  name: blockNames.LogoGridItem,
  label: 'Logo',
  category: 'logos',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/CustomerItem.tsx',

  getDefaultProps: () => ({
    image: logos.REACT_BRICKS,
    link: 'https://reactbricks.com',
  }),
  sideEditProps: [
    {
      name: 'link',
      label: 'Link (external or path)',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default LogoGridItem
