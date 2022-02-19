import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import loaderBlack from '../../../static/loader-black.svg';
import loaderWhite from '../../../static/loader-white.svg';
import loaderBlue from '../../../static/loader-blue.svg';

import styles from './UILoading.module.css';

const UILoading = ({ theme = 'white', isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case 'black':
        setLoaderIcon(loaderBlack);
        break;
      case 'white':
        setLoaderIcon(loaderWhite);
        break;
      case 'blue':
        setLoaderIcon(loaderBlue);
        break;
      default:
        setLoaderIcon(loaderBlack);
    }
  }, []);

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="Loader"
    />
  );
};

UILoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};

export default UILoading;
