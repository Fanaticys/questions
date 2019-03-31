import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  title: {
    fontSize: 16,
  }
});

class QuestionTitle extends Component {
  render() {
    const { classes, title } = this.props;
    return (
      <Typography variant='display3' className={classes.title}>
        {title}
      </Typography>
    )
  }
}

export default withStyles(styles)(QuestionTitle);