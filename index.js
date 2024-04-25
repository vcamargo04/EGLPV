const express = require('express')
const app = express()

const port = process.env.PORT || 3030;

app.get('/', (req, res) => res.send('Implantação efetuada com sucesso'))

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`App listening on port ${port}`);
  });