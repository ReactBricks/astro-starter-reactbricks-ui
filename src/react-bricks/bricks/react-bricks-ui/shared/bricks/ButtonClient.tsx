import classNames from 'classnames'
import * as React from 'react'
import { Link, Text, isAdmin, types } from 'react-bricks/astro'

export interface ButtonProps {
  type: 'button' | 'link'
  text: types.TextValue
  href: string
  isTargetBlank: boolean
  buttonType: 'submit' | 'button' | 'reset'
  buttonColor: {
    color: string
    classNameSolid: string
    classNameOutline: string
  }
  variant: 'solid' | 'outline' | 'ghost'
  padding: 'normal' | 'small'
  className?: string
  simpleAnchorLink: boolean
}

const Button: React.FC<ButtonProps> = ({
  type,
  href,
  isTargetBlank,
  buttonType,
  buttonColor,
  variant,
  padding,
  className,
  simpleAnchorLink = false,
  text,
}) => {
  const target = isTargetBlank
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  // Button
  if (type === 'link') {
    return (
      <Link
        href={href}
        {...target}
        className={classNames(
          'inline-block whitespace-nowrap text-center rounded-full font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5',
          padding === 'small'
            ? 'py-2 px-4 text-sm min-w-[75px]'
            : 'py-3 px-5 min-w-[120px]',
          {
            [buttonColor?.classNameSolid]: variant === 'solid',
          },
          {
            [buttonColor?.classNameOutline]: variant === 'outline',
          },
          className
        )}
        simpleAnchor={simpleAnchorLink}
      >
        <Text
          propName="text"
          value={text}
          placeholder="Action"
          renderBlock={({ children }) => <span>{children}</span>}
        />
      </Link>
    )
  }

  return (
    <button
      // type={isAdmin && !previewMode ? 'button' : buttonType}
      type={isAdmin() ? 'button' : buttonType}
      //disabled={isAdmin && !previewMode}
      className={classNames(
        'inline-block whitespace-nowrap text-center rounded-full font-bold leading-none hover:shadow-lg transition-all ease-out duration-150 hover:-translate-y-0.5',
        padding === 'small'
          ? 'py-2 px-4 text-sm min-w-[75px]'
          : 'py-3 px-5 min-w-[120px]',
        {
          [buttonColor?.classNameSolid]: variant === 'solid',
        },
        {
          [buttonColor?.classNameOutline]: variant === 'outline',
        },
        className
      )}
    >
      <Text
        propName="text"
        value={text}
        placeholder="Action"
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </button>
  )
}

export default Button
