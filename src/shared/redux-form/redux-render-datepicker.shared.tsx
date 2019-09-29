import React, { Component } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

interface Props { 
  input: any;
  label: string;
  className: string;
  onKeyUp: Function;
  disabled: string;
  meta: any;
  startDate: Date;
  dateFormat: string;
  timeFormat: string;
  timeIntervals: number;
}

interface State { 
  startDate: Date;
}

class renderDatePicker extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      startDate: this.props.startDate
    }

    registerLocale('es', es);
  }

  handleChange(date: any, input: any) {
    this.setState({
      startDate: date
    });

    input.value = date;
  };

  render () {
    const {
      input,
      label,
      className,
      onKeyUp,
      disabled,
      dateFormat,
      timeFormat,
      timeIntervals,
      meta: {
        error,
        warning,
        touched
      }
    } = this.props;

    const errorClass = touched && error ? 'error' : '';

    return (
      <div className="mb-3">
      <label>
        <b>
          { label }
        </b>
      </label>
      <div>
        <DatePicker
          locale={ es }
          className={ `${className} ${errorClass}` }
          { ...input }
          selected={ this.state.startDate }
          onChange={ (evt) => this.handleChange(evt, input) }
          onKeyUp={ onKeyUp }
          disabled={ disabled }
          dateFormat={ dateFormat }
          timeFormat={ timeFormat }
          timeIntervals={ timeIntervals }
        />
        {
          touched &&
            ((error && <div className="text-danger">{ error }</div>) ||
            (warning && <div>{ warning }</div>))
        }
      </div>
    </div>
    )
  }
}

export default renderDatePicker;