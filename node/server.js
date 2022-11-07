
const http = require('http');   
const port = 7777;
  
// Creating Basic http Server
const server = http.createServer((req, res) => {    
  const url = req.url;  // requested url
  const method = req.method;  // requested path
  if(url === "/")  
  {
      res.end("WELCOME TO NODE ROOT PATH!!!!123");
  }else  {
      res.end("Path not found");
  }
  console.log("Url entered "+url);
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});