import { Image, types, useAdminContext } from 'react-bricks/astro'
import blockNames from '../../blockNames'

interface Props {
  adaptAspectRatio: boolean
  slidesToShow: number
  image: types.IImageSource
}

const ImageCarouselItem: types.Brick<Props> = ({
  adaptAspectRatio,
  slidesToShow,
  image,
}) => {
  let aspectRatioProp = {}

  if (adaptAspectRatio) {
    if (slidesToShow === 1) {
      aspectRatioProp = { aspectRatio: 4 }
    }
    if (slidesToShow === 2) {
      aspectRatioProp = { aspectRatio: 2 }
    }
    if (slidesToShow > 2) {
      aspectRatioProp = { aspectRatio: 1 }
    }
  }

  const { isAdmin } = useAdminContext()

  return (
    <div className={`${isAdmin && 'p-6 m-2 hover:bg-gray-100'}`}>
      <Image
        propName="image"
        alt="altText"
        source={image}
        maxWidth={1200}
        imageClassName={`w-full h-32 sm:h-48 md:h-72 object-cover object-center transition-all duration-300`}
        {...aspectRatioProp}
      />
    </div>
  )
}

ImageCarouselItem.schema = {
  name: blockNames.ImageCarouselItem,
  label: 'ImageCarouselItem',
  category: 'hero sections',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    image: {
      src: 'https://images.reactbricks.com/original/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-2400.jpg 2400w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-1800.jpg 1800w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-1200.jpg 1200w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-600.jpg 600w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-300.jpg 300w',
      width: 3385,
      height: 1693,
      alt: 'altText',
      seoName: '',
    },
  }),
}

export default ImageCarouselItem
