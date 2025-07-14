function tiendaWyll() {
  const inventario = [
    { nombre: "Espada de la Justicia", precio: 500 },
    { nombre: "Medallón de Mizora", precio: 350 },
    { nombre: "Capa del Guerrero Elegante", precio: 300 },
    { nombre: "Contrato Infernal", precio: 150 }
  ];

  let carrito = [];
  let total = 0;
  let seguir = true;

  while (seguir) {
    let menu = "=== Tienda de Wyll ===\n";
    inventario.forEach((item, i) => {
      menu += `${i + 1}) ${item.nombre} - ${item.precio} monedas\n`;
    });
    menu += "\nElige el número del objeto a comprar:";

    const opcion = prompt(menu);
    const index = parseInt(opcion) - 1;

    if (!isNaN(index) && inventario[index]) {
      carrito.push(inventario[index]);
      total += inventario[index].precio;
      alert(`Agregado: ${inventario[index].nombre} | Total: ${total} monedas.`);
    } else {
      alert("Opción inválida.");
    }

    seguir = confirm("¿Deseás seguir comprando?");
  }

  if (carrito.length > 0) {
    let resumen = "Has comprado:\n";
    carrito.forEach(obj => resumen += `- ${obj.nombre} (${obj.precio} monedas)\n`);
    resumen += `\nTotal gastado: ${total} monedas.`;
    alert(resumen);
  } else {
    alert("No compraste nada.");
  }
}
