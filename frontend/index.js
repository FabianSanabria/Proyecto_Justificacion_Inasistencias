const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const registerRoute = require('./routes/auth/register');
const meRoute = require('./routes/auth/me');
const loginRoute = require('./routes/auth/login');
const logoutRoute = require('./routes/auth/logout');
const verifyRoute = require('./routes/auth/verify');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(registerRoute);
app.use(meRoute);
app.use(loginRoute);
app.use(logoutRoute);
app.use(verifyRoute);




app.use(express.static('client/build'));
app.get('*', (req,res) => {
    const mypath = path.resolve(__dirname,'client','build','index.html');
    return res.sendFile(mypath);
    
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

