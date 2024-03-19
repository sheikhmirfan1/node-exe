import http from "http";
import "dotenv/config";
import fs from "fs";
import axios from "axios";

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// });

// server.listen(3000, 'localhost', () => {
//     console.log('Server is running on port 3000');
// })
const host = process.env.HOST;
const port = process.env.PORT;

const apiCall = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response);
    fs.writeFile("users.json",JSON.stringify (response.data), "utf-8", (err) => {
      if (err) throw err;
      console.log("Data has been written to the file");
    });
  } catch (err) {
    console.error(err);
  }
};

apiCall();

const server = http.createServer((request, response) => {
  response.end("Hello World");
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
