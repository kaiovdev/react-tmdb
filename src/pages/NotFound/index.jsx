import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.not_found}>
      <h2>
        Erro 404!!!
        <br />
        Página não encontrada
      </h2>
    </div>
  );
}

export default NotFound;
