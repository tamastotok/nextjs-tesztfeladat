import { useEffect } from 'react';
import { useRouter } from 'next/router';

const TOKEN = '1234a';

export default function AuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = async () => {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      const { auth } = await res.json();

      if (!auth) {
        router.push('/auth-failed');
      }
    };

    isAuth();
  }, [router]);

  return (
    <div>
      <h4>Hozzáférés engedélyezve</h4>
    </div>
  );
}
