const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://sojanonelson54:YbBMfoaXfV40ewch@cluster0.vvjc2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const visitSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});
const Visit = mongoose.model('Visit', visitSchema);

// Increment visit count
app.post('/increment', async (req, res) => {
  console.log("Increment")
  let visit = await Visit.findOne();
  if (!visit) visit = await Visit.create({ count: 1 });
  else {
    visit.count += 1;
    await visit.save();
  }
  res.json({ count: visit.count });
});

// Fetch visit count
app.get('/count', async (req, res) => {
  let visit = await Visit.findOne();
  if (!visit) visit = await Visit.create({ count: 0 });
  res.json({ count: visit.count });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
