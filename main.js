function iniciarQuiz() {
  if (!confirm("¿Querés comenzar el quiz sobre Karlach?")) return;

  let score = 0;

  const r1 = prompt("1) ¿De qué raza es Karlach?\nA) Elfa\nB) Humana\nC) Tiefling");
  if (r1 && r1.toUpperCase() === "C") score++;

  const r2 = prompt("2) ¿Dónde estuvo esclavizada Karlach?\nA) Shadowfell\nB) Avernus\nC) Feywild");
  if (r2 && r2.toUpperCase() === "B") score++;

  const r3 = prompt("3) ¿Qué reemplaza su corazón?\nA) Piedra\nB) Magia\nC) Motor infernal");
  if (r3 && r3.toUpperCase() === "C") score++;

  alert(`Tu puntaje fue: ${score}/3`);
}