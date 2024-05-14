express = require("express");
app= express();

port=4000;

app.get('/',function(req,res){

    res.send("hello from express");
});

app.listen(port , function(){
    console.log(`server is running at ${port}`);
})