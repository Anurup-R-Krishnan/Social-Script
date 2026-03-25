import express from 'express';
import cors from 'cors';
import { SCENARIOS } from './scenarios.ts';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/scenarios', (req, res) => {
  res.json(SCENARIOS);
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
