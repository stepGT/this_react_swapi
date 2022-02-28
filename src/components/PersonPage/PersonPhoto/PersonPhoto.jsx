import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';
import {
  deletePersonToFavorite,
  addPersonToFavorite,
} from '@store/actions';

import iconFavorite from '@static/favorite.svg';
import iconFavoriteFill from '@static/favorite-fill.svg';

const PersonPhoto = ({ personID, personPhoto, personName, personFavorite, setPersonFavorite }) => {
  const dispatch = useDispatch();

  const handleFavoritePeople = () => {
    if (personFavorite) {
      dispatch(deletePersonToFavorite(personID));
      setPersonFavorite(false);
    } else {
      dispatch(
        addPersonToFavorite({
          [personID]: {
            name: personName,
            photo: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          onClick={handleFavoritePeople}
          className={styles.favorite}
          alt="Add to favorite"
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personID: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
