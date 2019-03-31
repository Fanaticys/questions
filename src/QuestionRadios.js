import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
  container: {
    marginTop: 10,
  },
  yes: { 
    '&$checked': {
      color: green[500],
    },
  },
  no: {
    '&$checked': {
      color: red[500],
    },
  },
  checked: {},
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: 14,
  }
};

class QuestionRadios extends React.Component {
  render() {
    const { classes, value, onChange } = this.props;

    return (
      <Grid container className={classes.container} justify='center'>
        <Grid container item xs={6}>
          <RadioGroup
            value={value}
            onChange={onChange}
            className={classes.radioGroup}
            row
          >
            <FormControlLabel
              value="yes"
              control={<Radio 
                classes={{
                  root: classes.yes,
                  checked: classes.checked,
                }}
              />}
              label="Да"
              labelPlacement="start"
              className={classes.label}
            />
            <FormControlLabel
              value="no"
              control={<Radio
                classes={{
                  root: classes.no,
                  checked: classes.checked,
                }}
              />}
              className={classes.middle}
              label="Нет"
              labelPlacement="start"
            />
            <FormControlLabel
              value="do not know"
              control={<Radio color="default" />}
              label="Не знаю"
              labelPlacement="start"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(QuestionRadios);