import classNames from 'classnames'
// import { Text, Link, types, isAdmin } from 'react-bricks/astro'
import { Link, Text, types } from 'react-bricks/astro'
import blockNames from '../../blockNames'
import { buttonColors } from '../../colors'
import { buttonColorsEditProps } from '../../LayoutSideProps'
// import ButtonClient from './ButtonClient'

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

const Button: types.Brick<ButtonProps> = ({
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

  // if (!isAdmin()) {
  return (
    <button
      type={buttonType}
      // type={isAdmin() ? 'button' : buttonType}
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
  // }

  // return (
  //   <ButtonClient
  //     type={type}
  //     href={href}
  //     isTargetBlank={isTargetBlank}
  //     buttonType={buttonType}
  //     buttonColor={buttonColor}
  //     variant={variant}
  //     padding={padding}
  //     className={className}
  //     simpleAnchorLink={simpleAnchorLink}
  //     text={text}
  //   ></ButtonClient>
  // )
}

Button.schema = {
  name: blockNames.Button,
  label: 'Button',
  category: 'shared',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Button.tsx',

  getDefaultProps: () => ({
    type: 'link',
    text: 'Click me',
    href: '',
    isTargetBlank: false,
    buttonType: 'submit',
    buttonColor: buttonColors.SKY.value,
    variant: 'solid',
    padding: 'normal',
  }),
  sideEditProps: [
    {
      groupName: 'Button functionality',
      defaultOpen: true,
      props: [
        {
          name: 'type',
          label: 'Type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'link', label: 'Link' },
              { value: 'button', label: 'Form Button' },
            ],
          },
        },
        // {
        //   name: 'href',
        //   label: 'Link (external or path)',
        //   type: types.SideEditPropType.Text,
        //   show: (props) => props.type === 'link',
        // },
        {
          name: 'href',
          label: 'Link (external or path)',
          type: types.SideEditPropType.Text,
          show: (props) => props.type === 'link',
          validate: (value, props) =>
            props?.type !== 'link' ||
            value.startsWith('https') ||
            value.startsWith('/') ||
            'Invalid URL or Path',
        },
        {
          name: 'isTargetBlank',
          label: 'Open in new window',
          type: types.SideEditPropType.Boolean,
          show: (props) => props.type === 'link',
        },
        {
          name: 'simpleAnchorLink',
          label: 'Simple anchor (no SPA link)',
          type: types.SideEditPropType.Boolean,
          show: (props) => props.type === 'link',
        },
        {
          name: 'buttonType',
          label: 'Button type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'submit', label: 'Form submit' },
              { value: 'reset', label: 'Form reset' },
              { value: 'button', label: 'Button' },
            ],
          },
          show: (props) => props.type === 'button',
        },
      ],
    },
    {
      groupName: 'Visual',
      defaultOpen: true,
      props: [
        buttonColorsEditProps,
        {
          name: 'variant',
          label: 'Variant',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'solid', label: 'Solid' },
              { value: 'outline', label: 'Outline' },
              { value: 'ghost', label: 'Ghost' },
            ],
          },
        },
        {
          name: 'padding',
          label: 'Size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'normal', label: 'Normal' },
              { value: 'small', label: 'Small' },
            ],
          },
        },
      ],
    },
  ],
}

export default Button
