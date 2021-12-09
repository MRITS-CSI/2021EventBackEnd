const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE_URL.replace(
	'<password>',
	process.env.DATABASE_PASS
);

mongoose.connect(DB).then(() => {
	console.log('Database Connection Successful');
});

app.listen(process.env.PORT, () => {
	console.log(`App listening on PORT ${process.env.PORT}`);
});
