const dotenv = require('dotenv')
const express = require('express')
const app = express()
const cors = require('cors')
dotenv.config()

const Pool = require('pg').Pool
const port = process.env.PORT || 5000
const client = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.route('/complaints')
  .get(async (req, res)=>{
    try {
      const data = await client.query(`SELECT * FROM complaints WHERE complete=false`)
      res.status(200).json(data.rows)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })

  .post(async (req, res)=>{
    try {
      let {body} = req
      await client.query(`INSERT INTO complaints (name, room, description, contact, complete) VALUES ('${body.name}', '${body.room}', '${body.description}', '${body.contact}', false)`)
      const data = await client.query('SELECT * FROM complaints')
      res.status(200).json({validation: true, data: data.rows})     
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })

  app.route('/completed')
    .get(async (req, res)=>{
      try {
        const data = await client.query('SELECT * FROM complaints WHERE complete = true')
        res.status(200).json(data.rows)
      } catch (error) {
        res.status(500).json({message: error.message})
      }
    })


  app.route('/complaints/:id')
    .delete(async(req,res)=>{
      try {
        let {id} = req.params
        const deleted = await client.query(`DELETE FROM complaints WHERE id = ${id} returning *`)
        res.status(200).json(deleted.rows)
      } catch (error) {
        res.status(500).json({message: error.message})
      }
    }) 
    .patch(async(req,res)=>{
      try {
        let {id} = req.params
        const updated = await client.query(`UPDATE complaints SET complete=true WHERE id=${id} returning *`)
        res.status(200).json(updated.rows)
      } catch (error) {
        res.status(500).json({message: error.message})
      }
    })

  app.listen(5001)