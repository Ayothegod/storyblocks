import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv';
const app = express();

dotenv.config()
port = process.env.PORT || 3006

app.get('/',(req,res) => {
    res.send("STORYBLOCKS")
})

app.listen(port, () => console.log(`server is running on localhost${port}`))
