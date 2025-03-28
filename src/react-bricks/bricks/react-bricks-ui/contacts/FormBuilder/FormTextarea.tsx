import classNames from 'classnames'
import { Plain, Text, types, useAdminContext } from 'react-bricks/astro'
import type { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'

export interface FormTextareaProps {
  register: UseFormRegister<any>
  isRequired: boolean
  fieldName?: string
  errors: FieldErrorsImpl<{
    [x: string]: any
  }>
  requiredError?: string
  columns: '1' | '2'
  label: types.TextValue
}

const FormTextarea: types.Brick<FormTextareaProps> = ({
  fieldName = 'text area',
  isRequired = true,
  label,
  register,
  errors,
  requiredError,
  columns,
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
    <div
      className={classNames(
        'py-1 group block col-span-2',
        columns === '1' && 'sm:col-span-1'
      )}
    >
      <label
        htmlFor={isAdmin ? '' : fieldName}
        className={classNames(
          isRequired
            ? labelTextContent === ''
              ? 'block w-full'
              : 'flex items-center space-x-1'
            : 'block w-full'
        )}
      >
        <Text
          propName="label"
          placeholder="label..."
          value={label}
          renderBlock={(props) => (
            <span
              className={classNames(textColors.GRAY_600, 'mb-1 text-sm')}
              {...props.attributes}
            >
              {props.children}
            </span>
          )}
        />

        {isRequired &&
          (labelTextContent === '' ? null : (
            <span className="text-red-600">*</span>
          ))}
      </label>

      <textarea
        id={fieldName}
        className={classNames(
          'w-full px-[15px] py-[10px] bg-white dark:bg-gray-900 dark:text-white border rounded-sm outline-hidden focus:ring-3 focus:ring-opacity-50',
          errors[fieldName]
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-300 dark:border-gray-500 focus:border-sky-500 dark:focus:border-white focus:ring-sky-200 dark:focus:ring-white/20'
        )}
        {...registerAttributes}
      />

      {errors[fieldName] && (
        <span className="block mt-1 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === 'required' && requiredError}
          {errors[fieldName]?.message &&
            `This field ${errors[fieldName]?.message}`}
        </span>
      )}
    </div>
  )
}

FormTextarea.schema = {
  name: blockNames.FormTextArea,
  label: 'Textarea',
  category: 'contact',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    columns: '2',
    fieldName: 'message',
    label: 'Message',
    isRequired: false,
    requiredError: '',
  }),

  sideEditProps: [
    {
      name: 'columns',
      label: 'Columns',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: '1', label: 'One' },
          { value: '2', label: 'Two' },
        ],
      },
    },
    {
      name: 'fieldName',
      type: types.SideEditPropType.Text,
      label: 'Field Name',
    },

    {
      name: 'isRequired',
      type: types.SideEditPropType.Boolean,
      label: 'Field required',
    },
    {
      name: 'requiredError',
      type: types.SideEditPropType.Text,
      label: 'Required error message',
    },
  ],
}

export default FormTextarea
