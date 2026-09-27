import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const host = '0.0.0.0';

// Serve static assets from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for any route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, host, () => {
  console.log(`AgriTrails server running at http://${host}:${port}/`);
});
