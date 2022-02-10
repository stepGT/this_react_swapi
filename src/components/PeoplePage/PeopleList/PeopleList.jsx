import styles from './PeopleList.module.css';
import PropTypes from 'prop-types';

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, imgSrc }) => (
        <li className={styles.list__item} key={id}>
          <a href="#">
            <img
              className={styles.list__person_photo}
              alt={name}
              src={imgSrc}
            />
            <p>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
