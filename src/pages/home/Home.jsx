import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>400 dan ortiq bitiruvchilar safiga qo‘shiling!</h1>
        <p>Qisqa muddatda kasb o'rganib, daromadga chiqing!</p>
        <div className={styles.arrowDown}>&#8595;</div>
      </div>
    </section>
  );
};

export default Home;
