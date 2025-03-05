import { Repeater, types } from 'react-bricks/astro'
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

export interface FormSectionProps extends LayoutProps {
  form: types.RepeaterItems
}

const FormSection: types.Brick<FormSectionProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  form,
}) => {
  return (
    <div>
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
          <Repeater propName="form" items={form} />
        </Container>
      </Section>
    </div>
  )
}

FormSection.schema = {
  name: blockNames.FormSection,
  label: 'Form',
  category: 'contact',
  previewImageUrl: `/bricks-preview-images/${blockNames.FormSection}.png`,

  repeaterItems: [
    {
      name: 'form',
      itemType: blockNames.FormBuilder,
      itemLabel: 'form',
      min: 1,
      max: 1,
    },
  ],

  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],

  getDefaultProps: () => ({
    ...sectionDefaults,
  }),

  astroInteractivity: 'idle',
}

export default FormSection
