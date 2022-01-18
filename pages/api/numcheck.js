export default function handler(req, res) {
  const number = Number(req.body.number);
  const message = `A szám ${number % 2 == 0 ? 'páros' : 'páratlan'}`;

  res.status(200).json({ message });
}
