const express = require('express');     //syntax known as common js to import modules

const app = express();      //initialise express in a variable app

app.use(express.json());

//mount route file
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
