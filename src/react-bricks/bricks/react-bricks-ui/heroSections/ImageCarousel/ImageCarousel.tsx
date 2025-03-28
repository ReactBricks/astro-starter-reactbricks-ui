import { useEffect, useState } from 'react'
import { Repeater, types } from 'react-bricks/astro'
import Slider from 'react-slick'

import blockNames from '../../blockNames'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  containerWidthSideGroup,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { photos } from '../../shared/defaultImages'
import CarouselStyles from './CarouselStyles'

// @ts-ignore
const SliderComponent = !!Slider.default ? Slider.default : Slider

interface ImageCarouselProps extends LayoutProps {
  slidesToShow: string
  slidesToScroll: string
  adaptAspectRatio: boolean
  autoplay: boolean
  speed: string
  className: string
  gap: string
  images: {
    image: types.IImageSource
  }[]
  slides: types.RepeaterItems
}

const CarouselBrick: types.Brick<ImageCarouselProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  slidesToShow,
  slidesToScroll,
  adaptAspectRatio,
  autoplay,
  speed,
  gap,
  images,
  slides,
}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    draggable: true,
    autoplay: !!autoplay,
    autoplaySpeed: speed ? parseInt(speed) * 1000 : 3000,
    touchThreshold: 1000,
    slidesToShow: slidesToShow ? parseInt(slidesToShow) : 1,
    slidesToScroll: slidesToScroll ? parseInt(slidesToScroll) : 1,
    accessibility: true,
  }

  const repeaterElement = Repeater({
    propName: 'images',
    items: images,
    itemProps: {
      adaptAspectRatio,
      slidesToShow: slidesToShow ? parseInt(slidesToShow) : 1,
    },
  })

  const [hasMount, setHasMount] = useState(false)
  useEffect(() => {
    setHasMount(true)
  }, [])

  if (!hasMount) {
    // Client only
    return null
  }

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
        <CarouselStyles />
        <style>{`
       
        .slick-track {
          display:flex;
          gap:${gap};
        }
    `}</style>

        <SliderComponent {...settings}>
          {/*@ts-ignore*/}
          {repeaterElement?.props?.children?.map((child, index) => {
            return (
              <div key={index} className="p-0 overflow-hidden">
                {child}
              </div>
            )
          })}
        </SliderComponent>
      </Container>
    </Section>
  )
}

CarouselBrick.schema = {
  name: blockNames.ImageCarousel,
  label: 'Image Carousel',
  category: 'hero sections',
  tags: ['carousel', 'image carousel', 'slider', 'photo slider'],
  repeaterItems: [
    {
      name: 'images',
      itemType: blockNames.ImageCarouselItem,
      itemLabel: 'Image',
      min: 1,
      max: 5,
    },
  ],
  previewImageUrl: `/bricks-preview-images/${blockNames.ImageCarousel}.png`,
  sideEditProps: [
    {
      groupName: 'Carousel',
      defaultOpen: true,
      props: [
        {
          name: 'slidesToShow',
          label: 'Slides to show',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
            ],
          },
        },
        {
          name: 'slidesToScroll',
          label: 'Slides to scroll',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
            ],
          },
          validate: (slidesToScroll, props) =>
            slidesToScroll <= (props?.slidesToShow || 0) ||
            'You cannot scroll more slides than you see',
        },
        {
          name: 'adaptAspectRatio',
          label: 'Adapt aspect ratio',
          type: types.SideEditPropType.Boolean,
          helperText:
            'Adapt aspect ratio to the number of slides to show (4:1 for 1 image, 2:1 for 2 images, square for more)',
        },
        {
          name: 'autoplay',
          label: 'Autoplay',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'speed',
          label: 'Autoplay wait',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: '1 s' },
              { value: 2, label: '2 s' },
              { value: 3, label: '3 s' },
              { value: 4, label: '4 s' },
              { value: 5, label: '5 s' },
            ],
          },
          show: (props) => !!props.autoplay,
        },
        {
          name: 'gap',
          label: 'Gap',
          show: (props) => props.slidesToShow != '1',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '0px', label: 'none' },
              { value: '15px', label: 'small' },
              { value: '30px', label: 'medium' },
              { value: '50px', label: 'large' },
            ],
          },
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
  getDefaultProps: () => ({
    ...sectionDefaults,
    slidesToShow: '1',
    slidesToScroll: '1',
    adaptAspectRatio: true,
    autoplay: true,
    speed: '3',
    gap: '30px',
    images: [
      {
        image: photos.CAROUSEL_MOUNTAINS_1,
      },
      {
        image: photos.CAROUSEL_MOUNTAINS_2,
      },
    ],
  }),
  stories: [
    {
      id: '4-slides',
      name: '4 slides',
      previewImageUrl: `/bricks-preview-images/4-slides.png`,
      showAsBrick: true,
      props: {
        slidesToShow: '4',
        slidesToScroll: '1',
        adaptAspectRatio: true,
        autoplay: true,
        speed: '3',
        gap: '30px',
        width: 'medium',
        images: [
          {
            image: photos.CAROUSEL_SEA_1,
          },
          {
            image: photos.CAROUSEL_SEA_2,
          },
          {
            image: photos.CAROUSEL_SEA_3,
          },
          {
            image: photos.CAROUSEL_SEA_4,
          },
        ],
      },
    },
  ],
  astroInteractivity: 'idle',
}

export default CarouselBrick
