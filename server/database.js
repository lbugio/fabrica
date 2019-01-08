const mongoose = require('mongoose');

const URI = 'mongodb://localhost/fabrica';

mongoose.connect(URI)
      .then(db => console.log('DB is connected'))
      .catch(err => console.error(err));

module.exports = mongoose;