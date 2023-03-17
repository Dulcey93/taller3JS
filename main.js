const formularioSedes = document.querySelector("#myFormularioSedes");
const formularioTrainers = document.querySelector("#myFormularioTrainers");
const formularioCampers = document.querySelector("#myFormularioCampers");
const formularioNiveles = document.querySelector("#myFormularioNiveles");
const formularioRoadmaps = document.querySelector("#myFormularioRoadmaps");

const campus = {
  sedes: [],
  trainers: [],
  campers: [],
  niveles: [],
  roadmaps: [],
  addSede: function (sede) {
    this.sedes.push(sede);
  },
  addTrainer: function (trainer) {
    this.trainers.push(trainer);
  },
  addCamper: function (camper) {
    this.campers.push(camper);
  },
  addNivel: function (nivel) {
    this.niveles.push(nivel);
  },
  addRoadmap: function (roadmap) {
    this.roadmaps.push(roadmap);
  },
};

let listaSedes = () => {
  let opciones = document.querySelectorAll("[name='sede']");
  opciones.forEach((select) => {
    select.innerHTML = null;
    campus.sedes.forEach((sede) => {
      select.insertAdjacentHTML(
        "beforeend",
        `
        <option value="${sede.nombreSede}">${sede.nombreSede}</option>
      `
      );
    });
  });
};

let listaTeams = () => {
  let opciones = document.querySelectorAll("[name='team']");
  opciones.forEach((select) => {
    select.innerHTML = null;
    const sedeSeleccionada = document.querySelector("[name='sede']").value;
    const sedeEncontrada = campus.sedes.find((sede) => sede.nombreSede === sedeSeleccionada);
    const teams = sedeEncontrada ? sedeEncontrada.teams : [];
    teams.forEach((team) => {
      const horariosDisponibles = team.horarios
        .filter((horario) => horario.disponible)
        .map((horario) => horario.horario)
        .join(", ");
      console.log(horariosDisponibles);
      const optionText = `${team.nombre} - ${horariosDisponibles}`;
      select.insertAdjacentHTML(
        "beforeend",
        `
        <option value="${team.nombre}">${optionText}</option>
      `
      );
    });
  });
};

// Datos de contacto de las sedes de CAMPUS
formularioSedes.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const sedeSeleccionada = campus.sedes.find(
    (sede) => sede.nombreSede === data.nombreSede
  ); // Validamos si ya existe una sede con ese nombre
  if (sedeSeleccionada) {
    // Si la sede ya existe, buscamos si el equipo ya existe en la sede
    const equipoExistente = sedeSeleccionada.teams.find(
      (team) => team.nombre === data.nombreTeam
    );
    if (equipoExistente) {
      // Si el equipo ya existe, actualizamos los horarios disponibles
      equipoExistente.horarios.push(
        {
          horario: "Lunes a Viernes - mañana - piso 6",
          disponible: data.horario1 === "true",
        },
        {
          horario: "Lunes a Viernes - tarde - piso 6",
          disponible: data.horario2 === "true",
        }
      );
    } else {
      // Si el equipo no existe, lo agregamos con los horarios disponibles
      sedeSeleccionada.teams.push({
        nombre: data.nombreTeam,
        horarios: [
          {
            horario: "Lunes a Viernes - mañana - piso 6",
            disponible: data.horario1 === "true",
          },
          {
            horario: "Lunes a Viernes - tarde - piso 6",
            disponible: data.horario2 === "true",
          },
        ],
      });
    }
  } else {
    // Si la sede no existe, la agregamos con el equipo y los horarios disponibles
    campus.addSede({
      nombreSede: data.nombreSede,
      teams: [
        {
          nombre: data.nombreTeam,
          horarios: [
            {
              horario: "Lunes a Viernes - mañana - piso 6",
              disponible: data.horario1 === "true",
            },
            {
              horario: "Lunes a Viernes - tarde - piso 6",
              disponible: data.horario2 === "true",
            },
          ],
        },
      ],
    });
  }
  listaSedes();
  listaTeams();
  formularioSedes.reset();
});

// Actualizar lista de equipos cuando se cambia la sede seleccionada
document.querySelector("[name='sede']").addEventListener("change", listaTeams);

// Datos de los Trainers
formularioTrainers.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addTrainer(data);
  console.log(campus.trainers);
});

// Datos de los Campers
formularioCampers.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addCamper(data);
  console.log(campus.campers);
});

// Datos de los Niveles
formularioNiveles.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addNivel(data);
  console.log(campus.niveles);
});

// Datos del Roadmap
formularioRoadmaps.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addRoadmap(data);
  console.log(campus.roadmaps);
});
