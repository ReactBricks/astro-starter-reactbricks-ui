import classNames from 'classnames'
import { Plain, Text, types, useAdminContext } from 'react-bricks/astro'
import type { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'

export interface FormSingleRadioProps {
  register: UseFormRegister<any>
  fieldName: string
  label: types.TextValue
  value: string

  isRequired: boolean
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
}

const FormSingleRadio: types.Brick<FormSingleRadioProps> = ({
  register,
  fieldName,
  label,
  value,

  isRequired,
  errors,
}) => {
  const labelTextContent =
    typeof label === 'string' ? label : Plain.serialize(label)
  const { isAdmin } = useAdminContext()
  const registerAttributes = fieldName
    ? register(
        fieldName?.replace(/\s/g, '').toLowerCase(),
        //@ts-ignore
        {
          required: isRequired,
        }
      )
    : {}

  return (
    <div className="flex items-center">
      <input
        id={value}
        className={classNames(
          'border-gray-300 focus:border-sky-300 focus:ring-3 focus:ring-opacity-50 text-sm rounded-full text-sky-500 focus:ring-offset-0',
          errors[fieldName]
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-300 dark:border-gray-500 focus:border-sky-500 dark:focus:border-white focus:ring-sky-200 dark:focus:ring-white/20'
        )}
        {...registerAttributes}
        type="radio"
        value={value}
      />
      <label
        htmlFor={isAdmin ? '' : value}
        className={classNames('ml-2 block w-full min-w-[70px]')}
      >
        <Text
          propName="label"
          placeholder="label..."
          value={label}
          renderBlock={(props) => (
            <span
              className={classNames(textColors.GRAY_900)}
              {...props.attributes}
            >
              {props.children}
            </span>
          )}
        />
      </label>
    </div>
  )
}

FormSingleRadio.schema = {
  name: blockNames.FormSingleRadio,
  label: 'Radio option',
  category: 'contact',
  hideFromAddMenu: true,
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    label: 'New option',
    value: 'new-option',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    { name: 'value', type: types.SideEditPropType.Text, label: 'Value' },
  ],
}

export default FormSingleRadio
