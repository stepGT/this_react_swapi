const PeopleList = ({ people }) => {
  return people.map(({ id, name, imgSrc }) => {
    return (
      <ul>
        <li key={id}>
          <img alt={name} src={imgSrc} />
          <p>{name}</p>
        </li>
      </ul>
    );
  });
};

export default PeopleList;
