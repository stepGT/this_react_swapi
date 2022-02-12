import { useLocation } from 'react-router-dom';
import notFoundJpg from '../../static/not-found.jpg';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img className={styles.img} src={notFoundJpg} alt="Not Found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
