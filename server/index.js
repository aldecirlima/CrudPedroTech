const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')

const db = mysql.createPool({
    host: "localhost",
    user: 'aldecir',
    password: '123456',
    database: 'CRUDDataBase'
})

app.use(cors())
app.use(express.json())
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))

app.get('/api/get', (req, res)=> {
    
    
    const sqlSelect = "SELECT * FROM movie_reviews"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
})

app.post('/api/insert', (req, res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?)"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result)
    })
})



app.listen(3001, () => {
    console.log("Server running on port 3001")
})


// Video 3 no link abaixo

// https://www.youtube.com/watch?v=_S2GKnFpdtE

// const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inseption', 'good movie');"
// db.query(sqlInsert, (err, result) => {
    // res.send('Hello Aldecir')
// })