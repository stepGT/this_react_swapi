import styles from './PeopleList.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, photo }) => (
        <li className={styles.list__item} key={id}>
          <Link to={`/people/${id}`}>
            <img
              className={styles.list__person_photo}
              alt={name}
              src={photo}
            />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
