import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PersonPhoto.module.css';
import {
  deletePersonToFavorite,
  addPersonToFavorite,
} from '@store/actions';

const PersonPhoto = ({ personID, personPhoto, personName }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(
      addPersonToFavorite({
        [personID]: {
          name: personName,
          photo: personPhoto,
        },
      })
    );
  };
  const handleDelete = () => {
    dispatch(deletePersonToFavorite());
  }
  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
      <button onClick={handleAdd}>ADD</button>
      <br />
      <button onClick={handleDelete}>DELETE</button>
    </>
  );
};

PersonPhoto.propTypes = {
  personID: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
};

export default PersonPhoto;
