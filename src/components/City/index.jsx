import styles from "./city.module.css";

const City = ({ city, goBack }) => {
  return (
    <div className={styles.container}> 
      <h2>{city.name}</h2>
      <img src={city.image} alt={city.name} className={styles.image} />
      <p>{city.description}</p>
      <button onClick={goBack} className={styles.button}>Back</button>
    </div>
  );
};

export default City;