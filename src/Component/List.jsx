import styles from "./List.module.css";

const List = ({ Veglist, bought, clickButton }) => {
  return (
    <li
      className={`list-group-item ${bought && "active"} ${styles["Va-item"]}`}
    >
      <span className={styles["Veg-item"]}>{Veglist}</span>
      <button className={styles.button} onClick={clickButton}>
        Buy
      </button>
    </li>
  );
};

export default List;
