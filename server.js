const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const dist = path.join(__dirname, 'dist');

app.use(express.static(dist));

app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    next();
    return;
  }
  res.sendFile(path.join(dist, 'index.html'), (err) => {
    if (err) next(err);
  });
});

app.listen(port, () => {
  console.log(`Français A2.1 disponible sur le port ${port}`);
});
