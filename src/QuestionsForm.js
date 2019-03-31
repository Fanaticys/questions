import React, { Component } from 'react';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { submitQuestionsForm } from './actions/forms';

import Questions from './Questions';
import data from './questions.json';
import { reduxForm } from 'redux-form';

const styles = theme => ({
  margin: {
    justifyContent: 'center',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    marginTop: 10,
    maxWidth: 800,
  },
  button: {
    margin: '0 auto',
    marginTop: 20,
  }
});

class QuestionsForm extends Component {
  render() {
    const { handleSubmit, classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <Questions data={data} />
            <Grid container justify='space-between'>
              <Button
                variant="contained"
                className={classes.button}
                type='submit'
              >
                отправить
              </Button>
            </Grid>
          </form>
        </Paper>
      </div>
    )
  }
}

export default compose(
  connect(null, { onSubmit: submitQuestionsForm }),
  reduxForm({
    form: 'questions',
  }),
  withStyles(styles),
)(QuestionsForm);