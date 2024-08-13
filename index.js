const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const reminders = [];

app.post('/addReminder', (req, res) => {
  const reminder = req.body;
  reminders.push(reminder);
  res.status(201).send(reminder);
});

app.get('/getReminders', (req, res) => {
  res.status(200).send(reminders);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
