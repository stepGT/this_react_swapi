import cn from 'classnames';
import styles from './App.module.css';

const App = () => {
  return <div className={cn(styles.text, styles.header)}>App</div>;
};

export default App;
