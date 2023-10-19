const categorias = ["guitarras", "baterias", "accesorios"];
const datos = [
  {
    id: 1, stock: 10, categoria: "guitarras", name: "guitarra1", precio: 600000, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2020/04/1-74-1080x1080.jpg"
  },
  {
    id: 2, stock: 15, categoria: "guitarras", name: "guitarra2", precio: 690000, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/02/C350TAB-1.jpg"
  }, {
    id: 3, stock: 20, categoria: "guitarras", name: "guitarra3", precio: 800000, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/02/ENMSRBMNH1-1.jpg"
  }, {
    id: 4, stock: 11, categoria: "baterias", name: "bateria1", precio: 1600000, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/04/D2-522-WHT-1.jpg"
  }, {
    id: 5, stock: 3, categoria: "baterias", name: "bateria2", precio: 1900000, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/04/D2-522-MB-1.jpg"
  }, {
    id: 6, stock: 9, categoria: "accesorios", name: "accesorio1", precio: 15000, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/02/EC-10-1.jpg"
  }, {
    id: 7, stock: 1, categoria: "accesorios", name: "accesorio1", precio: 19800, imgUrl: "  https://www.axcessmusic.com/wp-content/uploads/2023/02/RELAYG10T-1.jpg"
  }
]


export const getItems = (categoria) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(
      datos.filter((item) => item.categoria === (categoria === null || categoria === undefined ? item.categoria : categoria))
    ), 2000)
  })
};
export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        datos.filter((item) => item.id.toString() === id)[0]
      )
    }, 2000)
  })
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve(categorias), 2000)
  });
} 