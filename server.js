const app = require('./app');
const Port = 3333;

app.listen(Port,() => console.log(`Server running at port ${Port}`))