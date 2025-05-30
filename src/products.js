// importa las imágenes desde src/assets
import prod1 from "./assets/producto.jpg";
import prod2 from "./assets/producto2.png";
import prod3 from "./assets/producto3.webp";
import prod4 from "./assets/producto4.jpg";
import prod5 from "./assets/producto5.jpg";
import prod6 from "./assets/producto6.jpg";

const products = [
  {
    id: "1",
    name: "Botella Inteligente",
    price: 79.99,
    category: "inteligentes",
    description: "Te muestra la temperatura y te recuerda hidratarte.",
    image: prod1,
  },
  {
    id: "2",
    name: "Botella Verde",
    price: 74.99,
    category: "clasicas",
    description: "Acero verde oliva, sensor digital y tapa hermética.",
    image: prod2,
  },
  {
    id: "3",
    name: "Termo Stanley",
    price: 69.99,
    category: "termica",
    description: "Clásico termo Stanley de gran capacidad.",
    image: prod3,
  },
  {
    id: "4",
    name: "Botella Roja",
    price: 79.99,
    category: "clasicas",
    description: "Rojo brillante con pantalla LED táctil.",
    image: prod4,
  },
  {
    id: "5",
    name: "Botella Azul",
    price: 79.99,
    category: "inteligentes",
    description: "Azul mate, resistente a golpes y con Bluetooth.",
    image: prod5,
  },
  {
    id: "6",
    name: "Botella Gris",
    price: 89.99,
    category: "termica",
    description: "Gris titanio, edición premium.",
    image: prod6,
  },
];

export const getProducts = () =>
  new Promise(res => setTimeout(() => res(products), 800));

export const getProductById = id =>
  new Promise(res => setTimeout(() => res(products.find(p => p.id === id)), 800));

export const getProductsByCategory = cat =>
  new Promise(res => setTimeout(() => res(products.filter(p => p.category === cat)), 800));
