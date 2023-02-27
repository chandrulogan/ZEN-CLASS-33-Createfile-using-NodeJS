const express = require('express');
const fs = require('fs');
const app = express();

app.get('/createFile', (req, res) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const formattedTime = currentDate.toISOString().slice(11, 19);

  const content = `This is the content of the file created at ${formattedTime}`;

  fs.writeFile(`${formattedDate}.txt`, content, err => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating file');
    }
    console.log('File created!');
    return res.send('File created successfully');
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
