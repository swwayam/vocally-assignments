require('./config/database').connect();

const express = require('express')
const UserDetail = require('./models/userDetail')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const PORT = process.env.PORT || 4000;

app.post('/userData', async (req,res) => {
    const {name, email} = await req.body;

    

    const existingEmail = await UserDetail.findOne({email});

    if (existingEmail) {
        res.status(401).send("User Already Exists");
        return 0;
    }

    await UserDetail.create({
       name,
       email,
    })

    res.status(200).send('Response was recorded')
})


app.listen(PORT, console.log(`Server is running at port ${PORT}`))