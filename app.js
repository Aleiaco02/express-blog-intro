import express from 'express';
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("hello word")
})

app.listen(port, () => {
    console.log(`sto ascoltando la porta ${port}`)

})

