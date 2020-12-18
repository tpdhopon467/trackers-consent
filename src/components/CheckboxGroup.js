import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { checkBoxs } from '../constants/mockdata';

const useStyles = makeStyles((theme) => ({
  checkbox: {
    marginLeft: theme.spacing(3.5),
    marginTop: theme.spacing(-1),
  },
  hidden: {
    visibility: 'hidden',
  },
}));
export default function CheckboxGroup(props) {
  const classes = useStyles(props);
  const { t } = useTranslation();
  const [state, setState] = useState({
    personalization: false,
    analytical: false,
    marketing: false,
    socialMedia: false,
  });
  const [checkboxList, setCheckboxList] = useState(checkBoxs);
  const { handleCheckbox, trackers } = props;
  const {
    personalization, analytical, marketing, socialMedia,
  } = state;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    handleCheckbox(state);
  }, [state]);

  useEffect(() => {
    const filterArr = [checkBoxs[0]];
    for (let i = 0; i < Object.keys(trackers).length; i += 1) {
      let filter;
      if (Object.values(trackers)[i]) {
        filter = checkBoxs.filter((item) => item.name === Object.keys(trackers)[i]);
        filterArr.push(...filter);
      }
    }
    setCheckboxList(filterArr);
  }, []);

  return (
    <FormGroup>
      {checkboxList.map((item) => {
        const checked = item.name === 'necessary' ? true
          : item.name === 'personalization' ? personalization
            : item.name === 'analytical' ? analytical
              : item.name === 'marketing' ? marketing : socialMedia;
        return (
          <div key={item.name}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  name={item.name}
                  className={item.name === 'necessary' ? classes.hidden : ''}
                />
                  )}
              label={t(item.title)}
            />
            <div className={classes.checkbox}>
              {t(item.title_con)}
            </div>
          </div>
        );
      })}
    </FormGroup>
  );
}

CheckboxGroup.defaultProps = {
  trackers: {
    personalization: true,
    analytical: true,
    marketing: true,
    socialMedia: true,
  },
};

CheckboxGroup.propTypes = {
  handleCheckbox: PropTypes.func.isRequired,
  trackers: PropTypes.shape({
    personalization: PropTypes.bool,
    analytical: PropTypes.bool,
    marketing: PropTypes.bool,
    socialMedia: PropTypes.bool,
  }),
};
