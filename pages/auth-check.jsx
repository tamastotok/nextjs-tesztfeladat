import checkAuth from '../lib/check-auth';

export default function AuthCheck() {
  return (
    <div>
      <h4>Hozzáférés engedélyezve</h4>
    </div>
  );
}

export async function getServerSideProps() {
  const auth = await checkAuth();

  if (!auth) {
    return {
      redirect: {
        destination: '/auth-failed',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
