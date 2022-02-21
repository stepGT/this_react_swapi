import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';
import {
  deletePersonToFavorite,
  addPersonToFavorite,
} from '@store/actions';

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
      </div>
      {
        <button onClick={handleFavoritePeople}>
          {personFavorite ? 'Delete' : 'Add'}
        </button>
      }
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
