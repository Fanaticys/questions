import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import QuestionRadios from './QuestionRadios';
import QuestionTitle from './QuestionTitle';

const styles = theme => ({
  container: {
    marginTop: 20,
  },
  divider: {
    marginTop: 10,
  }
});

class Question extends Component {
  render() {
    const { classes, index, data, input: { onChange, value } } = this.props;    
    const title = `${index}. ${data.value}`;

    return (
      <div className={classes.container}>
        <QuestionTitle title={title} />
        <QuestionRadios
          onChange={onChange}
          value={value}
        />
        <Divider className={classes.divider} />
      </div>
    )
  }
}

export default withStyles(styles)(Question);