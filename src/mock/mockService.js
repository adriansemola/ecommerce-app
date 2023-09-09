const getItems = (categoria) => {

  const datos = [
    {
      id: 1, categoria: "guitarra", name: "guitarra1", precio: 100, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2020/04/1-74-1080x1080.jpg"
    },
    {
      id: 2, categoria: "guitarra", name: "guitarra2", precio: 100, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/02/C350TAB-1.jpg"
    }, {
      id: 3, categoria: "guitarra", name: "guitarra3", precio: 100, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/02/ENMSRBMNH1-1.jpg"
    }, {
      id: 4, categoria: "bateria", name: "bateria1", precio: 100, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/04/D2-522-WHT-1.jpg"
    }, {
      id: 5, categoria: "bateria", name: "bateria2", precio: 100, imgUrl: "https://www.axcessmusic.com/wp-content/uploads/2023/04/D2-522-MB-1.jpg"
    }
  ].filter((item) => item.categoria === (categoria === null ? item.categoria : categoria));
  return datos;
};

const getCategories = () => {
  return ["guitarra", "bateria", "teclado"];
};
export default { getItems, getCategories };