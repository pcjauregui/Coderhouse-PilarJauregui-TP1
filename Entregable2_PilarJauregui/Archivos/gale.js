function tiendaGale() {
  const inventario = [
    { nombre: "Tomo de Mystra", precio: 400 },
    { nombre: "Anillo de Absorción Mágica", precio: 300 },
    { nombre: "Capa de Conjurador", precio: 250 },
    { nombre: "Fragmento de Weave", precio: 600 }
  ];

  let carrito = [];
  let total = 0;
  let seguir = true;

  while (seguir) {
    let menu = "=== Tienda de Gale ===\n";
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
