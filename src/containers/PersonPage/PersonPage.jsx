import PropTypes from 'prop-types';
import React, { useState, useEffect, Suspense } from 'react';

import { withErrorAPI } from '@hoc/withErrorAPI';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';

import UILoading from '@ui/UILoading';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() =>
  import('@components/PersonPage/PersonFilms')
);

const PersonPage = ({ match, setErrorAPI }) => {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        res.films.length && setPersonFilms(res.films);
        setErrorAPI(false);
      } else {
        setErrorAPI(true);
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto personPhoto={personPhoto} personName={personName} />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UILoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  match: PropTypes.object,
  setErrorApi: PropTypes.func,
};

export default withErrorAPI(PersonPage);
