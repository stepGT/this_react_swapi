import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList'
import { withErrorAPI } from '../../hoc/withErrorAPI';

const PeoplePage = ({ setErrorAPI }) => {
  const [people, setPeople] = useState(null);
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
    getResource(API_PEOPLE);
  }, []);
  return <>{people && <PeopleList people={people} />}</>;
};

export default withErrorAPI(PeoplePage);
