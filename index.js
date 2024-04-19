import express, { request } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(express.static("public"));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    URL: "https://www.toyota.com/corolla/",
    Image: "asset/corolla.png",
    price: "10000€",
    kilometers: "1000km",
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    URL: "https://www.toyota.com/camry/",
    Image: "asset/camery.png",
    price: "20000€",
    kilometers: "2000km",
  },
  {
    id: 3,
    brand: "Toyota",
    model: "Rav4",
    year: 2022,
    URL: "https://www.toyota.com/rav4/",
    Image: "asset/rav4.png",
    price: "30000€",
    kilometers: "1000km",
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Highlander",
    year: 2022,
    URL: "https://www.toyota.com/highlander/",
    Image: "asset/highlander.png",
    price: "40000€",
    kilometers: "100km",
  },
  {
    id: 5,
    brand: "Toyota",
    model: "bZ4X",
    year: 2023,
    URL: "https://www.toyota.com/bZ4X/",
    Image: "asset/bZ4X.png",
    price: "45000€",
    kilometers: "200km",
  },
  {
    id: 6,
    brand: "Toyota",
    model: "Crown",
    year: 2023,
    URL: "https://www.toyota.com/ToyotaCrown/",
    Image: "asset/crwon.png",
    price: "50000€",
    kilometers: "30km",
  },
  {
    id: 7,
    brand: "Toyota",
    model: "Tundra",
    year: 2023,
    URL: "https://www.toyota.com/tundra/",
    Image: "asset/tundra.png",
    price: "45000€",
    kilometers: "40km",
  },
  {
    id: 8,
    brand: "Toyota",
    model: "Sienna",
    year: 2023,
    URL: "https://www.toyota.com/sienna/",
    Image: "asset/siena.png",
    price: "40000€",
    kilometers: "50km",
  },
  {
    id: 9,
    brand: "Toyota",
    model: "Sequoia",
    year: 2023,
    URL: "https://www.toyota.com/sequoia/",
    Image: "asset/seqa.png",
    price: "70000€",
    kilometers: "60km",
  },
  {
    id: 10,
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2024,
    URL: "https://www.toyota.com/landcruiser/",
    Image: "asset/lanc.png",
    price: "80000€",
    kilometers: "70km",

  },
  {
    id: 11,
    brand: "Toyota",
    model: "Supra",
    year: 2024,
    URL: "https://www.toyota.com/supra/",
    Image: "asset/supra.png",
    price: "60000€",
    kilometers: "80km",

  },
  {
    id: 12,
    brand: "Toyota",
    model: "86",
    year: 2024,
    URL: "https://www.toyota.com/86/",
    Image: "asset/86.png",
    price: "50000€",
    kilometers: "90km",
  },
  {
    id: 13,
    brand: "Toyota",
    model: "Yaris",
    year: 2024,
    URL: "https://www.toyota.com/venza/",
    Image: "asset/venza.png",
    price: "30000€",
    kilometers: "100km",
  },
  {
    id: 14,
    brand: "Toyota",
    model: "Avalon",
    year: 2024,
    URL: "https://www.toyota.com/avalon/",
    Image: "asset/AVA_MY19_0023_V002.jpeg",
    price: "45000€",
    kilometers: "100km",
  },
  {
    id: 15,
    brand: "Toyota",
    model: "Prius",
    year: 2024,
    URL: "https://www.toyota.com/prius/",
    Image: "asset/prius.png",
    price: "20000€",
    kilometers: "100km",
  },
  {
    id: 16,
    brand: "Toyota",
    model: "Mirai",
    year: 2020,
    URL: "https://www.toyota.com/mirai/",
    Image: "asset/mirai.png",
    price: "50000€",
    kilometers: "10km", 
  },
  {
    id: 17,
    brand: "Toyota",
    model: "C-HR",
    year: 2024,
    URL: "https://www.toyota.com/c-hr/",
    Image: "asset/2024-Toyota-C-HR-1.jpg",
    price: "38000€",
    kilometers: "100km",
  },
  {
    id: 18,
    brand: "Toyota",
    model: "RAV4 Prime",
    year: 2024,
    URL: "https://www.toyota.com/rav4-prime/",
    Image: "asset/rav4 prime.png",
    price: "45000€",
    kilometers: "100km",
  },
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
