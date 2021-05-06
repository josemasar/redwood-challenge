import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  DatetimeLocalField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PlanForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.plan?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="ideaId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Idea id
        </Label>
        <NumberField
          name="ideaId"
          defaultValue={props.plan?.ideaId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ideaId" className="rw-field-error" />

        <Label
          name="owner"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Owner
        </Label>
        <TextField
          name="owner"
          defaultValue={props.plan?.owner}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="owner" className="rw-field-error" />

        <Label
          name="plannedStart"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Planned start
        </Label>
        <DatetimeLocalField
          name="plannedStart"
          defaultValue={formatDatetime(props.plan?.plannedStart)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="plannedStart" className="rw-field-error" />

        <Label
          name="plannedEnd"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Planned end
        </Label>
        <DatetimeLocalField
          name="plannedEnd"
          defaultValue={formatDatetime(props.plan?.plannedEnd)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="plannedEnd" className="rw-field-error" />

        <Label
          name="finish"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Finish
        </Label>
        <CheckboxField
          name="finish"
          defaultChecked={props.plan?.finish}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="finish" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlanForm
