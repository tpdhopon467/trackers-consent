import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useTranslation } from 'react-i18next';
import CheckboxGroup from './CheckboxGroup';

const useStyles = makeStyles((theme) => ({
  content: {
    fontSize: 16,
  },
  checkbox: {
    marginLeft: theme.spacing(3.5),
    marginTop: theme.spacing(-1),
  },
  link: {
    marginLeft: theme.spacing(1),
  },
  '@global': {
    '.MuiDialog-paper': {
      height: (props) => props.height,
    },
  },
}));

export default function BottomDialog(props) {
  const classes = useStyles(props);
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [selectedState, setSelectedState] = useState(null);
  const fullWidth = true;
  const maxWidth = 'xl';
  const url = 'https://www.pantone.com/';
  const {
    settingCookies, leftButton, rightButton, centerButton, initial, handleCookie,
    handleOnlyNecessary, trackers,
  } = props;

  const handleClose = () => {
    handleCookie();
    setOpen(false);
  };

  const handleSetting = () => {
    settingCookies(selectedState);
    if (!initial) {
      setOpen(false);
    }
  };

  const handleCheckbox = (state) => {
    setSelectedState(state);
  };

  return (
    <div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent className={classes.content}>
          {t('cookies_description')}
          <br />
          {t('cookies_moreinfo')}
          <a href={url} className={classes.link}>{t('privacy_policy')}</a>
          <br />
          <br />
          {t('by_continue')}
          <a href={url} className={classes.link}>{t('terms_use')}</a>
          {!initial && <CheckboxGroup handleCheckbox={handleCheckbox} trackers={trackers} />}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSetting}>{leftButton}</Button>
          <Button variant="contained" onClick={handleOnlyNecessary}>{centerButton}</Button>
          <Button variant="contained" onClick={handleClose}>{rightButton}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

BottomDialog.defaultProps = {
  leftButton: '',
  rightButton: '',
  centerButton: '',
  initial: false,
  trackers: {
    personalization: true,
    analytical: true,
    marketing: true,
    socialMedia: true,
  },
};

BottomDialog.propTypes = {
  settingCookies: PropTypes.func.isRequired,
  handleCookie: PropTypes.func.isRequired,
  handleOnlyNecessary: PropTypes.func.isRequired,
  leftButton: PropTypes.string,
  rightButton: PropTypes.string,
  centerButton: PropTypes.string,
  initial: PropTypes.bool,
  trackers: PropTypes.shape({
    personalization: PropTypes.bool,
    analytical: PropTypes.bool,
    marketing: PropTypes.bool,
    socialMedia: PropTypes.bool,
  }),
};
