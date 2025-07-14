function tiendaKarlach() {
  const inventario = [
    { nombre: "Hacha Infernal", precio: 300 },
    { nombre: "Armadura de Avernus", precio: 500 },
    { nombre: "Poción de Ira", precio: 150 },
    { nombre: "Collar de Zariel", precio: 200 }
  ];

  let carrito = [];
  let total = 0;
  let seguirComprando = true;

  while (seguirComprando) {
    let mensaje = "Tienda de Karlach:\n";
    inventario.forEach((item, index) => {
      mensaje += `${index + 1}) ${item.nombre} - ${item.precio} monedas\n`;
    });
    mensaje += "\nIngresá el número del objeto que querés comprar:";

    let opcion = prompt(mensaje);
    let index = parseInt(opcion) - 1;

    if (!isNaN(index) && inventario[index]) {
      carrito.push(inventario[index]);
      total += inventario[index].precio;
      alert(`Agregaste "${inventario[index].nombre}" al carrito. Total actual: ${total} monedas.`);
    } else {
      alert("Opción no válida.");
    }

    seguirComprando = confirm("¿Querés seguir comprando?");
  }
  if (carrito.length > 0) {
    let resumen = "Compraste:\n";
    carrito.forEach(item => {
      resumen += `- ${item.nombre} (${item.precio} monedas)\n`;
    });
    resumen += `\nTotal: ${total} monedas`;
    alert(resumen);
  } else {
    alert("No compraste nada.");
  }
}
