import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const getResource = async (url) => {
    const res = await getApiResource(url);
    const peopleList = res.results.map(({ name, url }) => {
      return {
        name,
        url,
      };
    });
    setPeople(peopleList);
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <>
      <ul>
        {people &&
          people.map(({ name, url }) => {
            return (
              <li key={name}>
                <a href={url}>{name}</a>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default PeoplePage;
