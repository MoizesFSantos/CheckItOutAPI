const app = require('./app');
const Port = 3333;


app.get('/',(req,res) =>{
    res.status(200)
    .send({message: 'works'})
})
app.listen(Port,() => console.log(`Server running at port ${Port}`))