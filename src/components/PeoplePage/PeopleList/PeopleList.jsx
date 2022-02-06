const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, imgSrc }) => (
        <li className={styles.list__item} key={id}>
          <img alt={name} src={imgSrc} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
