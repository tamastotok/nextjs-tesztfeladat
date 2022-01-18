import { useState } from 'react';
import styles from '../styles/Container.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function IsEven() {
  const [number, setNumber] = useState(0);
  const [messageFromApi, setMessageFromApi] = useState('');

  const sendNumber = async () => {
    const res = await fetch('/api/numcheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number }),
    });

    const { message } = await res.json();
    console.log(message);
    setMessageFromApi(message);
  };

  return (
    <>
      <div className={styles.container}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label className="mb-1 fw-bold">Írj be egy számot</Form.Label>
            <Form.Control
              type="number"
              autoComplete="off"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={sendNumber}>
            Küldés
          </Button>
        </Form>
      </div>
      <h4 style={{ textAlign: 'center' }}>{messageFromApi}</h4>
    </>
  );
}
