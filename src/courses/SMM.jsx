import "./SMM.css";
import styles from "./SMM.module.css";

const SMM = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>
          <span>SMM</span> sohasini «Algoritm Ta'lim»da mutaxassislardan
          o'rganing
        </h1>
        <p>Qisqa muddatda kasb o'rganib, daromadga chiqing!</p>
        <button className={styles.btn}>Ro'yxatdan o'tish</button>
        <div className={styles.arrowDown}>&#8595;</div>
      </div>
    </section>
  );
};

export default SMM;
