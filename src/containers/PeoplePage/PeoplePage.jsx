import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getApiResource } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageID } from '@services/getPeopleData';
import PeopleList from '@components/PeoplePage/PeopleList'
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { withErrorAPI } from '@hoc/withErrorAPI';
import { useQueryParams } from '@hooks/useQueryParams';

const PeoplePage = ({ setErrorAPI }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  const queryPage = useQueryParams().get('page');
  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const photo = getPeopleImage(id);
        return {
          id,
          name,
          photo,
        };
      });
      setPeople(peopleList);
      setPrevPage(res.previous);
      setNextPage(res.next);
      setCounterPage(getPeoplePageID(url));
      setErrorAPI(false);
    } else {
      setErrorAPI(true);
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorAPI: PropTypes.func,
};

export default withErrorAPI(PeoplePage);
