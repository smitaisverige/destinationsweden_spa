import styles from "./country.module.css";

const Country = ({ country }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${country.backgroundImage})` }} >
      <div className={styles.cards}>
        {country.cities.map((city) => ( 
          <div className={styles.card} key={city.name}>
            <img src={city.image} alt={city.name} className={styles.image} />
            <h3>{city.name}</h3>
          </div> ))}
      </div>
    </div>
  );
};

export default Country;