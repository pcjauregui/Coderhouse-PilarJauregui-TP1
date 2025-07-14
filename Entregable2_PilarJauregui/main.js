function preguntar(mensaje) {
  let respuesta;
  do {
    respuesta = prompt(mensaje + "\n(Responde 1, 2 o 3)");
  } while (respuesta !== "1" && respuesta !== "2" && respuesta !== "3");
  return respuesta;
}

function iniciarQuiz(nombre) {
  if (!confirm(`¿Querés comenzar el quiz sobre ${nombre}?`)) return;

  let score = 0;

  switch (nombre) {
    case 'Karlach': {
      const r1 = preguntar("1) ¿De qué raza es Karlach?\n1) Elfa\n2) Humana\n3) Tiefling");
      if (r1 === "3") score++;

      const r2 = preguntar("2) ¿Dónde estuvo esclavizada Karlach?\n1) Shadowfell\n2) Avernus\n3) Feywild");
      if (r2 === "2") score++;

      const r3 = preguntar("3) ¿Qué reemplaza su corazón?\n1) Piedra\n2) Magia\n3) Motor infernal");
      if (r3 === "3") score++;
      break;
    }

    case 'Wyll': {
      const r1 = preguntar("1) ¿Quién es el padre de Wyll?\n1) Elminster\n2) Ulder Ravengard\n3) Zariel");
      if (r1 === "2") score++;

      const r2 = preguntar("2) ¿Qué arma domina Wyll?\n1) Hacha\n2) Lanza\n3) Estoque");
      if (r2 === "3") score++;

      const r3 = preguntar("3) ¿Cómo obtuvo sus poderes?\n1) Nació con ellos\n2) Por pacto con Mizora\n3) Por un artefacto mágico");
      if (r3 === "2") score++;
      break;
    }

    case 'Gale': {
      const r1 = preguntar("1) ¿Dónde nació Gale?\n1) Aguas Profundas\n2) Neverwinter\n3) Baldur's Gate");
      if (r1 === "1") score++;

      const r2 = preguntar("2) ¿Quién fue su maestra y amante?\n1) Shar\n2) Mystra\n3) Sune");
      if (r2 === "2") score++;

      const r3 = preguntar("3) ¿Qué debe consumir Gale para sobrevivir?\n1) Sangre\n2) Luz solar\n3) Objetos mágicos");
      if (r3 === "3") score++;
      break;
    }

    default:
      alert("No hay preguntas disponibles para ese personaje.");
      return;
  }

  alert(`Tu puntaje fue: ${score}/3`);
}