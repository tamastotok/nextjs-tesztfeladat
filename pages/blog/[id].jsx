import styles from '../../styles/Container.module.css';

export default function BlogId({ id }) {
  return (
    <div className={styles.container}>
      <p>Id: {id}</p>
      <p>Id négyzete: {id * id}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = await context.params.id;

  return {
    props: {
      id,
    },
  };
}
