import { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const getResource = async (url) => {
    const res = await getApiResource(url);
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
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <>
      <ul>
        {people &&
          people.map(({ id, name, imgSrc }) => {
            return (
              <li key={id}>
                <img alt={name} src={imgSrc} />
                <p>{name}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default PeoplePage;
