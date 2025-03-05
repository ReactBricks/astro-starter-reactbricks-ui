import classNames from 'classnames'
import { Image, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import { logos } from '../../shared/defaultImages'

export interface CustomerProps {
  grayscale?: boolean
  image: types.IImageSource
}

const Customer: types.Brick<CustomerProps> = ({ grayscale = true, image }) => {
  return (
    <div className="inline-flex items-center px-4 py-4 md:px-5">
      <Image
        propName="image"
        source={image}
        alt="customer"
        imageClassName={classNames(
          'block object-contain w-[80px] h-[20px] md:w-[96px] md:h-[24px] lg:w-[116px] lg:h-[29px]',
          {
            'opacity-50 grayscale dark:invert': grayscale,
          }
        )}
      />
    </div>
  )
}

Customer.schema = {
  name: blockNames.Customer,
  label: 'Customer',
  category: 'logos',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/CustomerItem.tsx',

  getDefaultProps: () => ({
    image: logos.REACT_BRICKS,
  }),
}

export default Customer
