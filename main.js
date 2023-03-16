const campus = {
  sedes: [],
  trainers: [],
  campers: [],
  niveles: [],
  roadmaps: [],
  addSede: function(sede) {
    this.sedes.push(sede);
  },
  addTrainer: function(trainer) {
    this.trainers.push(trainer);
  },
  addCamper: function(camper) {
    this.campers.push(camper);
  },
  addNivel: function(nivel) {
    this.niveles.push(nivel);
  },
  addRoadmap: function(roadmap) {
    this.roadmaps.push(roadmap);
  },
};

// Datos de contacto de las sedes de CAMPUS
const formularioSedes = document.querySelector('#myFormularioSedes');
formularioSedes.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addSede(data);
  console.log(campus.sedes);
});

// Datos de los Trainers
const formularioTrainers = document.querySelector('#myFormularioTrainers');
formularioTrainers.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addTrainer(data);
  console.log(campus.trainers);
});

// Datos de los Campers
const formularioCampers = document.querySelector('#myFormularioCampers');
formularioCampers.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addCamper(data);
  console.log(campus.campers);
});

// Datos de los Niveles
const formularioNiveles = document.querySelector('#myFormularioNiveles');
formularioNiveles.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addNivel(data);
  console.log(campus.niveles);
});

// Datos del Roadmap
const formularioRoadmaps = document.querySelector('#myFormularioRoadmaps');
formularioRoadmaps.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  campus.addRoadmap(data);
  console.log(campus.roadmaps);
});