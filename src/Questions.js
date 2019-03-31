import React, { Component, Fragment } from 'react';
import { Field } from 'redux-form';
import Question from './Question';

class Questions extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <Fragment>
        {data.map((question, index) => (
          <Field
            key={question.id}
            index={++index}
            name={`id:${question.id}`}
            component={Question}
            data={question}
          />
        ))}
      </Fragment>
    );
  }
}

export default Questions;
