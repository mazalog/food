const meals = [
  {
    id: 323,
    url: './images/image-pepitos-4.png',
    name: "Pepito PIZZAIOLA (EL PROFESOR) 2.3M",
    series: 'PROFESOR',
    price: 65,
    information: [
      "Full Carne a la Parrilla", "Tomate", "Alfalfa", "Peperoni", "Champiñones", "Tocineta", "Maiz", "Queso", "Mozzarela",
      "Aceitunas Negras", "Full Salsa Napolitana",
    ],
    backgroundColor: "#4caf5066",
    textColor: "#5f3ac24d",
    categorie: 'pepitos'
  },
  {
    id: 3424,
    url: './images/image-pepitos-4.png',
    name: "Pepito PIZZAIOLA (EL PROFESOR) 1.20M",
    price: 35,
    series: 'PROFESOR',
    information: [
      "Full Carne a la Parrilla", "Tomate",
      "Alfalfa", "Peperoni", "Champiñones",
      "Tocineta", "Maiz", "Queso", "Mozzarela", "Aceitunas Negras",
      "Full Salsa Napolitana"
    ]
    ,
    backgroundColor: "#4caf5066",
    textColor: "#5f3ac24d",
    categorie: 'pepitos'
  },
  {
    id: 349924,
    url: './images/image-pepitos-4.png',
    name: "Pepito PIZZAIOLA (EL PROFESOR) 60CM",
    price: 20,
    series: 'PROFESOR',
    information: ["Full Carne a la Parrilla", "Tomate",
      "Alfalfa", "Peperoni", "Champiñones",
      "Tocineta", "Maiz", "Queso", "Mozzarela", "Aceitunas Negras",
      "Full Salsa Napolitana"],
    backgroundColor: "#4caf5066",
    textColor: "#5f3ac24d",
    categorie: 'pepitos'
  },
  {
    id: 0,
    url: './images/image-0.png',
    name: "Hamburguesa la mama de la mama",
    price: 12,
    information:
      ["Chuleta", "Carne a la parrilla", "Carne de hamburguesa", "Chorizo",
        "Milanesa", "Tocineta", "Queso amarillo", "Cebollas", "Repollo", "Papitas",
        "Lechuga", "Alfalfa", "Tomate", "Maiz", "Aguacate", "Pepinillo", "Queso facilista", "Bbq", "Chedar"],
    backgroundColor: "#4caf5066",
    textColor: "#5f3ac24d",
    categorie: 'hamburguesas'
  },
  {
    id: 1,
    url: './images/image-1.png',
    name: "Hamburguesa caracas city",
    price: 10,
    information:
      ["Doble carne de hamburguesa 300gr",
        "Doble racion de queso facilista", "Maiz",
        "Lechuga", "Extra de pepinillos", "Alfalfa",
        "Tomate", "Aguacate", "Cebolla caramelizada",
        "Bbq", "Cheddar", "Queso Amarrillo"],
    backgroundColor: "#f9eba8",
    textColor: "#E8C518",
    categorie: 'hamburguesas'
  },
  {
    id: 2,
    url: './images/image-2.png',
    name: "Hamburguesas Big monters",
    price: 10,
    information:
      ["Lomo de cerdo", "Full carne a la parrilla",
        "Milanesa", "Tocineta", "Queso de mano", "Maiz",
        "Aguacate", "Queso amarillo", "Cebolla", "Repollo",
        "Papitas", "Alfalfa", "Lechuga", "Tomate", "Bbq", "Cheddar"],
    backgroundColor: "#FCDFE7",
    textColor: "#EC819E",
    categorie: 'hamburguesas'
  },

  {
    id: 3,
    url: './images/image-4.png',
    name: "Hamburguesa la mama de caracas",
    price: 10,
    information:
      ["Chuleta", "Carne a la parrilla",
        "Carne de hamburguesa", "Chorizo",
        "Milanesa", "Tocineta", "Queso amarillo",
        "Cebolla", "Repollo", "Papitas", "Lechuga", "Alfalfa",
        "Tomate", "Maiz", "Aguacate", "Bbq"],
    backgroundColor: "#c59d0a8c",
    textColor: "#F4AD69",
    categorie: 'hamburguesas'
  },
  {
    id: 4,
    url: './images/image-3.png',
    name: "Hamburguesa la modelo de caracas",
    price: 10,
    information:
      ["Lechuga", "Tomate",
        "Carne con facilista",
        "Huevo", "Chistorra", "Carne a la parrilla",
        "Maiz", "Aguacate", "Salsa tartara",
        "Tocinetas", "Papas fritas", "Bbq", "Chedar"],
    backgroundColor: "#ff922c75",
    textColor: "#9BC604",
    categorie: 'hamburguesas'
  },

  {
    id: 5,
    url: './images/image-pepitos-3.png',
    name: "Pepito mundial (62cm)",
    price: 20,
    information: [
      "Salchica polaca",
      "Borde de queso y facilista",
      "Full Carne a la Parrilla",
      "Milanesa", "Chorizo", "Maiz",
      "aguacate", "Tocineta", "Queso amarillo",
      "Cebolla", "Repollo", "Papitas", "Tomate",
      "Lechuga", "Bbq", "Cheddar"],
    backgroundColor: "#a9a4bcb3",
    textColor: "#9BC604",
    categorie: 'pepitos'
  },
  {
    id: 6,
    url: './images/image-pepito-1.png',
    name: "Pepito Caracas Burger",
    price: 10,
    information: [
      "Full carne y chorizo a la parrilla",
      "Milanesa", "Carne extra", "Tocineta", "Queso amarillo",
      "Cebolla", "Repollo", "Papitas", "Maiz", "Lechuga", "Aguacate", "Bbq", "Cheddar"],
    backgroundColor: "#ff922c75",
    textColor: "#9BC604",
    categorie: 'pepitos'
  },
  {
    id: 7,
    url: './images/image-pepito-2.png',
    name: "Pepito de Pollo",
    price: 9,
    information: [
      "Milanesa de pollo", "Huevo", "Maiz", "Aguacate", "Tomate", "Cebolla", "Repollo", "Papitas", "Queso amarillo", "Bbq", "Cheddar"],
    backgroundColor: "#eace46c2",
    textColor: "#9BC604",
    categorie: 'pepitos'
  },
  {
    id: 8,
    url: './images/image-pepitos-4.png',
    name: "Pepito de Parrillero",
    price: 9,
    information: [
      "Full carne y chorizo a la parrilla",
      "Maiz", "Aguacate", "Queso amarillo", "Tomate", "Cebolla", "Repollo", "Lechuga", "Papitas", "Bbq", "Cheddar"],
    backgroundColor: "#bfda5eab",
    textColor: "#9BC604",
    categorie: 'pepitos'
  },
  {
    id: 9,
    url: './images/image-perros-2.png',
    name: "Perro parrillero",
    price: 6,
    information: [
      "Carne y chorizo a la parrilla",
      "Alfalfa", "Lechuga", "Tomate", "Aguacate", "Maiz",
      "Queso amarillo", "Cebolla", "Repollo", "Papitas"],
    backgroundColor: "#ff922c75",
    textColor: "#9BC604",
    categorie: 'perros'
  },
  {
    id: 10,
    url: './images/image-perros-3.png',
    name: "Perro polaco",
    price: 6,
    information: [
      "Salchica polaca", "Media canilla",
      "Maiz", "Aguacate", "Queso Amarillo", "Cebolla",
      "Repollo", "Papitas", "Lechuga", "Alfalfa", "Bbq", "Cheddar"],
    backgroundColor: "##f6740399",
    textColor: "#bb6133ab",
    categorie: 'perros'
  },
  {
    id: 11,
    url: './images/image-perros-1.png',
    name: "Jumbo",
    price: 5,
    information: [
      "Salchica de jumbo", "Media canilla", "Maiz", "Aguacate",
      "Queso amarillo", "Cebolla", "Repollo", "Papitas", "Lechuga", "Alfalfa", "Bbq", "Cheddar"],
    backgroundColor: "#ab92779e",
    textColor: "#9BC604",
    categorie: 'perros'
  },
  {
    id: 12,
    url: './images/image-perros-4.png',
    name: "Perro especial",
    price: 4,
    information: [
      "Aguacate", "Huevo", "Jamon",
      "Queso amarillo", "Salchicha grande plumrose",
      "Cebolla", "Repollo", "Papitas", "Bbq", "Cheddar"],
    backgroundColor: "#ff922c75",
    textColor: "#9BC604",
    categorie: 'perros'
  },

  {
    id: 13,
    url: './images/image-perros-5.png',
    name: "Perro normal",
    price: 3,
    information: ["Cebolla", "Repollo", "Salchicha grande Plumrose", "Queso amarillo, Cheddar"],
    backgroundColor: "#f49489b3",
    textColor: "#9BC604",
    categorie: 'perros'
  },
  {
    id: 14,
    url: './images/image-racion.jpg',
    name: "Ración de papas fritas",
    price: 3,
    information:
      [],
    backgroundColor: "#a0fff9ad",
    textColor: "#9BC604",
    categorie: 'extras'
  },
  {
    id: 15,
    url: './images/image-refrescos-2.jpg',
    name: "Refresco de 2 litros",
    price: 3,
    information:
      [],
    backgroundColor: "#e793ffb0",
    textColor: "#9BC604",
    categorie: 'extras'
  },
  {
    id: 16,
    url: './images/image-refrescos-1.png',
    name: "Refresco de 1 litro",
    price: 2,
    information:
      [],
    backgroundColor: "#ff922c75",
    textColor: "#9BC604",
    categorie: 'extras'
  },
  {
    id: 17,
    url: './images/image-refrescos-3.png',
    name: "Refresco bombita",
    price: 1,
    information:
      [],
    backgroundColor: "#ffeb3b94",
    textColor: "#9BC604",
    categorie: 'extras'
  },
  {
    id: 18,
    url: './images/image-natulac.jpg',
    name: "Jugo natulac de lata",
    price: 1,
    information:
      [],
    backgroundColor: "#c37dcf80",
    textColor: "#9BC604",
    categorie: 'extras'
  },
  {
    id: 19,
    url: './images/image-facilista.jpg',
    name: "Extra de facilista",
    price: 1,
    information:
      [],
    backgroundColor: "#ff922c75",
    textColor: "#9BC604",
    categorie: 'extras'
  },
  {
    id: 20,
    url: './images/image-pepinillos.jpg',
    name: "Extra de pepinillos",
    price: 1,
    information:
      [],
    backgroundColor: "#4caf508a",
    textColor: "#9BC604",
    categorie: 'extras'
  },
  {
    id: 21,
    url: './images/image-tocinetas.jpg',
    name: "Extra de tocinetas",
    price: 1,
    information:
      [],
    backgroundColor: "#ffeb3b87",
    textColor: "#9BC604",
    categorie: 'extras'
  },





];

export default meals;











