const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log(`servidor iniciado em http://localhost:${port}`);
});
