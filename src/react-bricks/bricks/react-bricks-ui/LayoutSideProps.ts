import { types } from 'react-bricks/astro'
import type { PricingColorValue } from './colors'
import {
  bgColors,
  buttonColors,
  gradients,
  highlightBgColors,
  highlightTextColors,
  pricingColors,
} from './colors'
import type { Padding, Size } from './shared/components/Container'
import type { Border } from './shared/components/Section'

type RBUIColor = types.IColor & { className: string }
export interface LayoutProps {
  backgroundColor: RBUIColor
  backgroundImage: types.IImageSource
  borderTop: Border
  borderBottom: Border
  width: Size
  paddingTop: Padding
  paddingBottom: Padding
}

export const backgroundColorsEditProps: types.ISideEditProp<{
  backgroundColor: RBUIColor
}> = {
  name: 'backgroundColor',
  label: 'Background',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bgColors.WHITE,
      bgColors.LIGHT_GRAY,
      bgColors.GRAY,
      bgColors.ROSE,
      bgColors.ORANGE,
      bgColors.AMBER,
      bgColors.YELLOW,
      bgColors.LIME,
      bgColors.GREEN,
      bgColors.EMERALD,
      bgColors.TEAL,
      bgColors.CYAN,
      bgColors.SKY,
      bgColors.BLUE,
      bgColors.INDIGO,
      bgColors.VIOLET,
      bgColors.PURPLE,
      bgColors.FUCHSIA,
      bgColors.DARK_GRAY,
    ],
  },
}

export const neutralBackgroundColorsEditProps: types.ISideEditProp<{
  backgroundColor: RBUIColor
}> = {
  name: 'backgroundColor',
  label: 'Background',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bgColors.WHITE,
      bgColors.LIGHT_GRAY,
      bgColors.GRAY,
      bgColors.DARK_GRAY,
    ],
  },
}

export const backgroundImageEditProps: types.ISideEditProp<{
  backgroundImage: types.IImageSource
}>[] = [
  {
    name: 'backgroundImage',
    label: 'Background Image',
    type: types.SideEditPropType.Image,
    imageOptions: {
      aspectRatio: 2,
    },
  },
]

export const sectionPaddingsEditProps: types.ISideEditProp<{
  paddingTop: Padding
  paddingBottom: Padding
}>[] = [
  {
    name: 'paddingTop',
    label: 'Padding Top',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: '20', label: '20' },
        { value: '16', label: '16' },
        { value: '12', label: '12' },
        { value: '10', label: '10' },
        { value: '8', label: '8' },
        { value: '6', label: '6' },
        { value: '0', label: 'None' },
      ],
    },
  },
  {
    name: 'paddingBottom',
    label: 'Padding Bottom',
    type: types.SideEditPropType.Select,
    selectOptions: {
      display: types.OptionsDisplay.Select,
      options: [
        { value: '20', label: '20' },
        { value: '16', label: '16' },
        { value: '12', label: '12' },
        { value: '10', label: '10' },
        { value: '8', label: '8' },
        { value: '6', label: '6' },
        { value: '0', label: 'None' },
      ],
    },
  },
]

export const borderTopEditProp: types.ISideEditProp<{
  borderTop: Border
}> = {
  name: 'borderTop',
  label: 'Border Top',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'none', label: 'None' },
      { value: 'full', label: 'Full-width' },
      { value: 'boxed', label: 'Boxed' },
    ],
  },
}

export const borderBottomEditProp: types.ISideEditProp<{
  borderBottom: Border
}> = {
  name: 'borderBottom',
  label: 'Border Bottom',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'none', label: 'None' },
      { value: 'full', label: 'Full-width' },
      { value: 'boxed', label: 'Boxed' },
    ],
  },
}

export const sectionBordersEditProps: types.ISideEditProp<{
  borderTop: Border
  borderBottom: Border
}>[] = [borderTopEditProp, borderBottomEditProp]

interface SectionDefaults {
  backgroundColor: RBUIColor
  paddingTop: Padding
  paddingBottom: Padding
  borderTop: Border
  borderBottom: Border
}

export const sectionDefaults: SectionDefaults = {
  backgroundColor: bgColors.WHITE.value,
  paddingTop: '16',
  paddingBottom: '16',
  borderTop: 'none',
  borderBottom: 'none',
}

export const containerSizeEditProps: types.ISideEditProp<{
  width: 'medium' | 'small' | 'full'
}> = {
  name: 'width',
  label: 'Width',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'medium', label: 'Medium' },
      { value: 'small', label: 'Small' },
      { value: 'full', label: 'Full-width' },
    ],
  },
}

export const badgeColorsEditProps: types.ISideEditProp<{
  badgeColor: RBUIColor
}> = {
  name: 'badgeColor',
  label: 'Badge Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      highlightTextColors.GRAY,
      highlightTextColors.RED,
      highlightTextColors.ORANGE,
      highlightTextColors.AMBER,
      highlightTextColors.YELLOW,
      highlightTextColors.LIME,
      highlightTextColors.GREEN,
      highlightTextColors.EMERALD,
      highlightTextColors.TEAL,
      highlightTextColors.CYAN,
      highlightTextColors.SKY,
      highlightTextColors.BLUE,
      highlightTextColors.INDIGO,
      highlightTextColors.VIOLET,
      highlightTextColors.PURPLE,
      highlightTextColors.FUCHSIA,
      highlightTextColors.PINK,
      highlightTextColors.ROSE,
    ],
  },
}

export const bulletColorsEditProps: types.ISideEditProp<{
  bulletColor: RBUIColor
}> = {
  name: 'bulletColor',
  label: 'Bullet Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      highlightBgColors.GRAY,
      highlightBgColors.RED,
      highlightBgColors.ORANGE,
      highlightBgColors.AMBER,
      highlightBgColors.YELLOW,
      highlightBgColors.LIME,
      highlightBgColors.GREEN,
      highlightBgColors.EMERALD,
      highlightBgColors.TEAL,
      highlightBgColors.CYAN,
      highlightBgColors.SKY,
      highlightBgColors.BLUE,
      highlightBgColors.INDIGO,
      highlightBgColors.VIOLET,
      highlightBgColors.PURPLE,
      highlightBgColors.FUCHSIA,
      highlightBgColors.PINK,
      highlightBgColors.ROSE,
    ],
  },
}

export const buttonColorsEditProps: types.ISideEditProp<{
  buttonColor: {
    color: string
    classNameSolid: string
    classNameOutline: string
  }
}> = {
  name: 'buttonColor',
  label: 'Button Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      buttonColors.GRAY,
      buttonColors.RED,
      buttonColors.ORANGE,
      buttonColors.AMBER,
      buttonColors.YELLOW,
      buttonColors.LIME,
      buttonColors.GREEN,
      buttonColors.EMERALD,
      buttonColors.TEAL,
      buttonColors.CYAN,
      buttonColors.SKY,
      buttonColors.BLUE,
      buttonColors.INDIGO,
      buttonColors.VIOLET,
      buttonColors.PURPLE,
      buttonColors.FUCHSIA,
      buttonColors.PINK,
      buttonColors.ROSE,
    ],
  },
}

export const highlightTextEditProps: types.ISideEditProp<{
  highlightTextColor: RBUIColor
}> = {
  name: 'highlightTextColor',
  label: 'Highlight Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      highlightTextColors.GRAY,
      highlightTextColors.RED,
      highlightTextColors.ORANGE,
      highlightTextColors.AMBER,
      highlightTextColors.YELLOW,
      highlightTextColors.LIME,
      highlightTextColors.GREEN,
      highlightTextColors.EMERALD,
      highlightTextColors.TEAL,
      highlightTextColors.CYAN,
      highlightTextColors.SKY,
      highlightTextColors.BLUE,
      highlightTextColors.INDIGO,
      highlightTextColors.VIOLET,
      highlightTextColors.PURPLE,
      highlightTextColors.FUCHSIA,
      highlightTextColors.PINK,
      highlightTextColors.ROSE,
    ],
  },
}

export const textGradientEditProps: types.ISideEditProp<{
  textGradient: keyof typeof gradients
}> = {
  name: 'textGradient',
  label: 'Text gradient',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      gradients.NONE,
      gradients.CARIBBEAN_BLUE,
      gradients.PURPLE_PINK,
      gradients.SUN,
      gradients.DAWN,
      gradients.EVENING,
      gradients.FRESH_LIME,
      gradients.MUSIC,
      gradients.MORNING_LIGHT,
      gradients.OCEAN,
      gradients.MANGO,
      gradients.MINT_GREEN,
      gradients.FLASH_NEON,
      gradients.LIGHTHOUSE,
    ],
  },
}

export const pricingColorsEditProps: types.ISideEditProp<{
  pricingColor: PricingColorValue
}> = {
  name: 'pricingColor',
  label: 'Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      pricingColors.GRAY,
      pricingColors.RED,
      pricingColors.ORANGE,
      pricingColors.AMBER,
      pricingColors.YELLOW,
      pricingColors.LIME,
      pricingColors.GREEN,
      pricingColors.EMERALD,
      pricingColors.TEAL,
      pricingColors.CYAN,
      pricingColors.SKY,
      pricingColors.BLUE,
      pricingColors.INDIGO,
      pricingColors.VIOLET,
      pricingColors.PURPLE,
      pricingColors.FUCHSIA,
      pricingColors.PINK,
      pricingColors.ROSE,
    ],
  },
}

export const neutralBackgroundSideGroup: types.ISideGroup<{
  backgroundColor: RBUIColor
}> = {
  groupName: 'Background',
  props: [neutralBackgroundColorsEditProps],
}

export const backgroundSideGroup: types.ISideGroup<{
  backgroundColor: RBUIColor
}> = {
  groupName: 'Background',
  props: [backgroundColorsEditProps],
}

export const backgroundWithImageBgSideGroup: types.ISideGroup<{
  backgroundColor: RBUIColor
  backgroundImage: types.IImageSource
}> = {
  groupName: 'Background',
  props: [backgroundColorsEditProps, ...backgroundImageEditProps],
}

export const paddingBordersSideGroup: types.ISideGroup<{
  paddingTop: Padding
  paddingBottom: Padding
  borderTop: Border
  borderBottom: Border
}> = {
  groupName: 'Padding & Borders',
  defaultOpen: false,
  props: [...sectionPaddingsEditProps, ...sectionBordersEditProps],
}

export const containerWidthSideGroup: types.ISideGroup<{
  width: Size
}> = {
  groupName: 'Container width',
  defaultOpen: false,
  props: [containerSizeEditProps],
}
