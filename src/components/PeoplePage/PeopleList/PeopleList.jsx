const PeopleList = ({ people }) => {
  return people.map(({ id, name, imgSrc }) => {
    return (
      <li key={id}>
        <img alt={name} src={imgSrc} />
        <p>{name}</p>
      </li>
    );
  });
};

export default PeopleList;
