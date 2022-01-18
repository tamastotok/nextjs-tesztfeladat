export default function handler(req, res) {
  const token = req.headers.authorization;
  const lastChar = token.slice(-1);

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (!digits.includes(lastChar)) return res.status(200).json({ auth: false });

  return res.status(200).json({ auth: true });
}
