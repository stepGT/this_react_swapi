import UIVideo from '@ui/UIVideo';
import video from '@static/han-solo.mp4';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything
      </p>
      <UIVideo src={video} classes={styles.video} playbackRate={1.0} />
    </>
  );
};

export default ErrorMessage;
