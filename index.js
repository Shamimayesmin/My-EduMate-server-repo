const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')
const courses = require('./data/course.json')

app.get('/', (req, res) =>{
    res.send('course api is running')

})

app.get('/courses-categoris', (req,res) =>{
    res.send(categories)
})

app.get('/category/:id',(req,res) =>{
    const id = req.params.id;
    const category_course = courses.find(n => n.course_id === id)
    res.send(category_course)

    // if(id === '06'){
    //     res.send(courses);
    // }
    // else{
        
    // }
    
})

app.get('/course', (req,res) =>{
    res.send(courses)
})

app.get('/course/:id', (req,res)=> {
    const id = req.params.id
    const selectedCourse = courses.find(n => n._id === id)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('course server running on port', port)
})