import config from "../core/config";


const getProductsMockData = () => [
  {
    name: 'Ring',
    price: 200,
    status: 'New',
    image_url: config.api_url + '/images/p1.png'
  },
  {
    name: 'Watch',
    price: 300,
    status: 'New',
    image_url: config.api_url + '/images/p2.png'
  },
  {
    name: 'Teddy Bear',
    price: 110,
    status: 'New',
    image_url: config.api_url + '/images/p3.png'
  },
  {
    name: 'Flower Bouquet',
    price: 45,
    status: 'New',
    image_url: config.api_url + '/images/p4.png'
  },
  {
    name: 'Teddy Bear',
    price: 45,
    status: 'New',
    image_url: config.api_url + '/images/p5.png'
  },
  {
    name: 'Flower Bouquet',
    price: 70,
    status: 'New',
    image_url: config.api_url + '/images/p6.png'
  },
  {
    name: 'Watch',
    price: 400,
    status: 'New',
    image_url: config.api_url + '/images/p7.png'
  },
  {
    name: 'Ring',
    price: 450,
    status: 'New',
    image_url: config.api_url + '/images/p8.png'
  },
]

export default getProductsMockData;