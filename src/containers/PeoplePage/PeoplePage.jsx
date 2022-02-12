import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList'
import { withErrorAPI } from '@hoc/withErrorAPI';
import { useQueryParams } from '@hooks/useQueryParams';

const PeoplePage = ({ setErrorAPI }) => {
  const [people, setPeople] = useState(null);
  const queryPage = useQueryParams().get('page');
  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const imgSrc = getPeopleImage(id);
        return {
          id,
          name,
          imgSrc,
        };
      });
      setPeople(peopleList);
      setErrorAPI(false);
    } else {
      setErrorAPI(true);
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
    // eslint-disable-next-line
  }, []);
  return <>{people && <PeopleList people={people} />}</>;
};

PeoplePage.propTypes = {
  setErrorAPI: PropTypes.func,
};

export default withErrorAPI(PeoplePage);
