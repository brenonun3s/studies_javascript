const data = new Date("2025-09-02 00:00:00");

let diaSemana = data.getDay();



let diaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaSemana = "Domingo";

    break;
  case 1:
    diaSemana = "Segunda";
    break;
  case 2:
    diaSemana = "Terça";
    break;
  case 3:
    diaSemana = "Quarta";
    break;
  case 4:
    diaSemana = "Quinta";
    break;
  case 5:
    diaSemana = "Sexta";
    break;
  case 6:
    diaSemana = "Sábado";
    break;
  default:
    diaSemanaTexto = "";
    break;
}

console.log(diaSemana)