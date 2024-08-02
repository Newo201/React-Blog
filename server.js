import express from "express"
import bodyParser from "body-parser";
import pg from "pg"
import env from "dotenv";

const app = express()
const port = 5000

env.config()

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
})

db.connect();

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Get Requests
app.get('/blogs/featured', async (req, res) => {
  const result = await db.query("SELECT * FROM blog_list JOIN categories ON blog_list.cat_id = categories.cat_id LIMIT 3")
  res.json(result.rows);
});

app.get('/blogs/all', async (req, res) => {
  const result = await db.query("SELECT * FROM blog_list JOIN categories ON blog_list.cat_id = categories.cat_id")
  res.json(result.rows);
});

app.get('/blogs/:id', async (req, res) => {
  const id = req.params.id
  const result = await db.query("SELECT * FROM blog_list JOIN categories ON blog_list.cat_id = categories.cat_id WHERE blog_list.id = $1", [id])
  res.json(result.rows[0])
})

// Update Blog
app.put('/blogs/:id', async (req, res) => {
  console.log(req.body)
  const id = req.params.id
  const result = await db.query("UPDATE blog_list SET title = $1, cat_id = $2, description = $3, article = $4, image = $5 WHERE id = $6", 
  [req.body.title, req.body.cat_id, req.body.description, req.body.article, req.body.image, id])
  res.json(result.rows[0])
})

app.delete('/blogs/:id', async (req, res) => {
  const id = req.params.id
  await db.query("DELETE FROM blog_list WHERE id = ($1)", [id])
  res.sendStatus(200)
})

app.post('/blogs/new', async (req, res) => {

    try {
      const result = await db.query("SELECT cat_id FROM categories WHERE category = ($1)", [req.body.category])
      const category_id = (result.rows[0].cat_id)
      await db.query("INSERT INTO blog_list (cat_id, title, description, article, image) VALUES ($1, $2, $3, $4, $5)",
      [category_id, req.body.title, req.body.description, req.body.article, req.body.image])
      res.sendStatus(200)
    }
    catch(err) {
      console.log(err)
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})