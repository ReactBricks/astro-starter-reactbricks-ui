import classNames from 'classnames'
import { Link, Plain, Repeater, Text, types } from 'react-bricks/astro'
import { FcDepartment, FcPhone, FcVoicePresentation } from 'react-icons/fc'

import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import type { LayoutProps } from '../../LayoutSideProps'
import {
  backgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import TitleSubtitle from '../../shared/components/TitleSubtitle'

export interface ContactsFormProps extends LayoutProps {
  phoneNumber: types.TextValue
  email: types.TextValue
  address: types.TextValue
  form: types.RepeaterItems
  title: types.TextValue
  subtitle: types.TextValue
}

const ContactsForm: types.Brick<ContactsFormProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  address,
  phoneNumber,
  email,
  form,
  title,
  subtitle,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="pb-12 lg:pb-20 sm:text-left lg:pr-8 pr-5">
            <TitleSubtitle title={title} subtitle={subtitle} />
            <ul
              className={classNames(
                'mt-10 space-y-4 text-base leading-7 list-none',
                textColors.GRAY_600
              )}
            >
              <li className="flex gap-x-4">
                <FcDepartment size={'28px'} />
                <div>
                  <Text
                    propName="address"
                    value={address}
                    placeholder="address..."
                    multiline={true}
                    renderBlock={(props) => (
                      <span
                        className="block min-w-[70px]"
                        {...props.attributes}
                      >
                        {props.children}
                      </span>
                    )}
                  />
                </div>
              </li>
              <li>
                <Link
                  className="flex gap-x-4"
                  href={`tel:${
                    typeof phoneNumber === 'string'
                      ? phoneNumber.replace(' ', '')
                      : Plain.serialize(phoneNumber).replace(/ /g, '')
                  }`}
                >
                  <FcPhone size={'28px'} />
                  <Text
                    propName="phoneNumber"
                    value={phoneNumber}
                    placeholder="Phone number"
                    renderBlock={({ children }) => <span>{children}</span>}
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-x-4 text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
                  href={`mailto:${
                    typeof email === 'string' ? email : Plain.serialize(email)
                  }`}
                >
                  <FcVoicePresentation size={'28px'} />
                  <Text
                    propName="email"
                    value={email}
                    placeholder="Email"
                    renderBlock={({ children }) => <span>{children}</span>}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:-mt-7">
            <Repeater propName="form" items={form} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

ContactsForm.schema = {
  name: 'ContactsForm',
  label: 'Contacts with Form',
  category: 'contact',
  previewImageUrl: `/bricks-preview-images/contacts-with-form.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    address: '4556 Brendan Ferry\nLos Angeles, CA 90210',
    phoneNumber: '+1 (555) 423-5786',
    email: 'hello@example.com',
    title: 'Contact us',
    subtitle:
      'Do you have a project in mind? We are happy to talk with you to understand your needs, prepare a quote for you and make it happen!',
  }),
  sideEditProps: [backgroundSideGroup, paddingBordersSideGroup],
  repeaterItems: [
    {
      name: 'form',
      itemType: blockNames.FormBuilder,
      itemLabel: 'form',
      min: 0,
      max: 1,
    },
  ],
  astroInteractivity: 'idle',
}

export default ContactsForm
