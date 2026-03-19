import styles from "./header.module.css";

const Header = ({ updateFunction }) => {
  return (
    <div>
      <div className={styles.header}>
      <h1 className={styles.h1}>Destination Sweden</h1>
      <p className={styles.para}>Sweden is a stunning Nordic destination offering a mix of vibrant, modern cities like Stockholm, Gotland and Mälmö of rich history, and unspoiled nature. </p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navhead}>
          <li onClick={() => updateFunction(null)}>Home</li>
          <li onClick={() => updateFunction("Stockholm")}>Stockholm</li>
          <li onClick={() => updateFunction("Gotland")}>Gotland</li>
          <li onClick={() => updateFunction("Malmö")}>Malmö</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;