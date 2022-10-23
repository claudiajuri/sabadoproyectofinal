
//traigo los productos de productos.json
  

  
  async function cargarProductos() {
    const response = await fetch('./productos.json');
    const data = await response.json();
    data.productos.forEach((producto) => {
    productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.foto));
    });
  }
  
  
  console.log(productos);
 
  

