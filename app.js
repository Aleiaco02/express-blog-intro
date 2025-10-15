import express from 'express';
const app = express()
const port = 3000


app.use(express.static('public'))

// dichiaro l'array di oggetti che contengono le informazioni
const posts = [
    {
        title: 'Ciambellone della nonna',
        content: 'Un dolce soffice e profumato, perfetto per la colazione o la merenda. Scopri come prepararlo con pochi ingredienti!',
        image: '/images/ciambellone.jpeg',
        tags: ['dolci', 'colazione', 'tradizione']
    },
    {
        title: 'Cracker alla barbabietola',
        content: 'Croccanti, colorati e genuini: questi cracker alla barbabietola sono perfetti come snack o antipasto salutare.',
        image: '/images/cracker_barbabietola.jpeg',
        tags: ['salato', 'barbabietola', 'snack']
    },
    {
        title: 'Pane fritto dolce',
        content: 'Un dessert semplice e goloso che trasforma il pane raffermo in una delizia irresistibile.',
        image: '/images/pane_fritto_dolce.jpeg',
        tags: ['dolci', 'riciclo', 'frittura']
    },
    {
        title: 'Pasta alla barbabietola',
        content: 'Un piatto dal colore vivace e dal sapore unico: la pasta alla barbabietola unisce gusto e originalità.',
        image: '/images/pasta_barbabietola.jpeg',
        tags: ['primo', 'barbabietola', 'pasta']
    },
    {
        title: 'Torta paesana',
        content: 'Un classico della tradizione lombarda, la torta paesana è un dolce rustico a base di pane, cacao e latte.',
        image: '/images/torta_paesana.jpeg',
        tags: ['dolci', 'tradizione', 'pane']
    }
];

// imposto la rotta principale
app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog</h1>');
})

// imposto la rotta secondaria
app.get('/bacheca', (req, res) => {
    res.json(posts);
})

app.listen(port, () => {
    console.log(`sto ascoltando la porta ${port}`)
})

