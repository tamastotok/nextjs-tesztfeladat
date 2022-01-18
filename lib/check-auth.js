export default async function checkAuth() {
  const TOKEN = '123456';
  const URL = 'http://localhost:3000';

  const res = await fetch(`${URL}/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const { auth } = await res.json();

  return auth;
}
