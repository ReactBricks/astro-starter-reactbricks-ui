import * as React from 'react'
import classNames from 'classnames'
import { highlightTextColors } from '../../colors'
import { Text, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import { badgeColorsEditProps } from '../../LayoutSideProps'

export interface BadgeProps {
  badgeColor: { color: string; className: string }
  textAlign: 'left' | 'center'
  className?: string
  text: types.TextValue
}

const Badge: types.Brick<BadgeProps> = ({
  badgeColor,
  textAlign,
  className,
  text,
}) => {
  return (
    <div className="flex justify-center items-center">
      <Text
        propName="text"
        value={text}
        renderBlock={(props) => (
          <span
            className={classNames(
              'text-sm font-extrabold uppercase inline-block min-w-[120px]',
              textAlign === 'center' ? 'text-center' : 'text-left',
              badgeColor.className,
              className
            )}
            style={{ letterSpacing: '0.35em' }}
          >
            {props.children}
          </span>
        )}
        placeholder="Badge..."
      />
    </div>
  )
}

Badge.schema = {
  name: blockNames.Badge,
  label: 'Badge',
  category: 'shared',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Badge.tsx',
  getDefaultProps: () => ({
    text: 'Special',
    textAlign: 'center',
    badgeColor: highlightTextColors.SKY.value,
  }),
  sideEditProps: [badgeColorsEditProps],
}

export default Badge
