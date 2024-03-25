import express, { request } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const cars = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2021,
URL: "https://www.toyota.com/corolla/"},
  { id: 2, brand: "Toyota", model: "Camry", year: 2022, 
  URL: "https://www.toyota.com/camry/"},
  { id: 3, brand: "Toyota", model: "Rav4", year: 2022, 
  URL: "https://www.toyota.com/rav4/"},
  { id: 4, brand: "Toyota", model: "Highlander", year: 2022,
  URL: "https://www.toyota.com/highlander/",
Image: "https://www.toyota.com/highlander/"},
  { id: 5, brand: "Toyota", model: "4Runner", year: 2023,
  URL: "https://www.toyota.com/4runner/"},
  { id: 6, brand: "Toyota", model: "Tacoma", year: 2023,
  URL: "https://www.toyota.com/tacoma/"},
  { id: 7, brand: "Toyota", model: "Tundra", year: 2023 ,
  URL: "https://www.toyota.com/tundra/"},
  { id: 8, brand: "Toyota", model: "Sienna", year: 2023 ,
  URL: "https://www.toyota.com/sienna/"},
  { id: 9, brand: "Toyota", model: "Sequoia", year: 2023 },
  { id: 10, brand: "Toyota", model: "Land Cruiser", year: 2024 },
  { id: 11, brand: "Toyota", model: "Supra", year: 2024 },
  { id: 12, brand: "Toyota", model: "86", year: 2024 },
  { id: 13, brand: "Toyota", model: "Yaris", year: 2024 },
  { id: 14, brand: "Toyota", model: "Avalon", year: 2024 },
  { id: 15, brand: "Toyota", model: "Prius", year: 2024 },
  { id: 16, brand: "Toyota", model: "Mirai", year: 2020 },
  { id: 17, brand: "Toyota", model: "C-HR", year: 2024 },
  { id: 18, brand: "Toyota", model: "RAV4 Prime", year: 2024 },
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
    year: request.body.year,
  };



  cars.push(newCar);
  response.json(newCar);
});

app.put("/cars/:carsID", (request, response) => {
  const carId = request.params.carsID;
  const car = cars.find((car) => car.id === parseInt(carId));
  car.brand = request.body.brand;
  car.model = request.body.model;
  car.year = request.body.year;

  response.json(car);
});

app.listen(port, host, () => {
  console.log("Server is running on port 3000");
});
