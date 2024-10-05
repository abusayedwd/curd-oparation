 
const app = require("./app") 
 
const port = process.env.PORT || 3001;
 
 

app.listen(port, (req, res) => {
    console.log(`server is running on : http://localhost:${port}`);
    
})