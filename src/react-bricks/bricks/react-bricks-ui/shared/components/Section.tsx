import classNames from 'classnames'
import React from 'react'
import { Image, types } from 'react-bricks/astro'
import { bgColors } from '../../colors'
import Container from './Container'

export type Border = 'full' | 'boxed' | 'none'

interface SectionProps {
  backgroundColor?: { color: string; className: string }
  backgroundImage?: types.IImageSource
  borderTop?: Border
  borderBottom?: Border
  className?: string
  children?: React.ReactNode
  noOverflowX?: boolean
}

const Section: React.FC<SectionProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  borderTop = 'none',
  borderBottom = 'none',
  className = '',
  noOverflowX = false,
  children,
}) => {
  const bgColor = backgroundColor.className

  return (
    <>
      <section
        className={classNames(bgColor, className, 'relative', {
          'overflow-x-hidden': noOverflowX,
        })}
      >
        <div className="absolute inset-0">
          <Image
            readonly
            source={backgroundImage!}
            alt="bg"
            imageClassName="w-full h-full object-cover"
          />
        </div>
        {backgroundImage && (
          <div className="absolute inset-0 dark:bg-black/70"></div>
        )}
        {borderTop !== 'none' && (
          <Container
            size={borderTop === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10 dark:border-white/20 relative" />
          </Container>
        )}
        <div className="relative">{children}</div>
        {borderBottom !== 'none' && (
          <Container
            size={borderBottom === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10 dark:border-white/20 relative" />
          </Container>
        )}
      </section>
    </>
  )
}

export default Section
