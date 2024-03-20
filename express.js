import express, { request } from "express";
import 'dotenv/config'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";


const cars = [
  { id: 1, brand: "Toyota", model: "Corolla" },
  { id: 2, brand: "Toyota", model: "Camry" },
  { id: 3, brand: "Toyota", model: "Rav4" },
  { id: 4, brand: "Toyota", model: "Highlander" },
  { id: 5, brand: "Toyota", model: "4Runner" },
  { id: 6, brand: "Toyota", model: "Tacoma" },
  { id: 7, brand: "Toyota", model: "Tundra" },
  { id: 8, brand: "Toyota", model: "Sienna" },
  { id: 9, brand: "Toyota", model: "Sequoia" },
  { id: 10, brand: "Toyota", model: "Land Cruiser" },
  { id: 11, brand: "Toyota", model: "Supra" },
  { id: 12, brand: "Toyota", model: "86" },
  { id: 13, brand: "Toyota", model: "Yaris" },
  { id: 14, brand: "Toyota", model: "Avalon" },
  { id: 15, brand: "Toyota", model: "Prius" },
  { id: 16, brand: "Toyota", model: "Mirai" },
  { id: 17, brand: "Toyota", model: "C-HR" },
  { id: 18, brand: "Toyota", model: "RAV4 Prime" },
  { id: 19, brand: "Toyota", model: "Corolla Hatchback" },
  { id: 20, brand: "Toyota", model: "Corolla Hybrid" },
  { id: 21, brand: "Toyota", model: "Camry Hybrid" },
  { id: 22, brand: "Toyota", model: "Avalon Hybrid" },
  { id: 23, brand: "Toyota", model: "Sienna Hybrid" },
  { id: 24, brand: "Toyota", model: "Highlander Hybrid" },
  { id: 25, brand: "Toyota", model: "4Runner" },
  { id: 26, brand: "Toyota", model: "Tacoma" },
  { id: 27, brand: "Toyota", model: "Tundra" },
  { id: 28, brand: "Toyota", model: "Sequoia" },
  { id: 29, brand: "Toyota", model: "Land Cruiser" },
  { id: 30, brand: "Toyota", model: "Supra" },
];
app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/cars", (request, response) => {
  response.json(cars);
  
});


app.get("/cars/:carsID", (request, response) => {
  const carId = request.params.carsID;
  const car = cars.find((car) => car.id === parseInt(carId));

  response.json(car);
});

app.post("/cars", (request, response) => {
  console.log(request.body);
  const newCar = {
    id: cars.length + 1,
    brand: request.body.brand,
    model: request.body.model,
  };

  cars.push(newCar);
  response.json(newCar);
}
);

app.listen(port,host, () => {
  console.log("Server is running on port 3000");
});


