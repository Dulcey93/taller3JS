let myFormularioSedes = document.querySelector("#myFormularioSedes");
let myFormularioTrainers = document.querySelector("#myFormularioTrainers");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let myFormularioNiveles = document.querySelector("#myFormularioNiveles");
let myFormularioRoadmaps = document.querySelector("#myFormularioRoadmaps");
let campus = {};

myFormularioSedes.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.nombreSede}`] = {Trainers: [], Campers: [], Niveles: [], Roadmaps: []};
    listaSedes();
    myFormularioSedes.reset();
})

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    Object.entries(campus).forEach((id, val) => {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${id}">${id}</option>
        `);
    });
}

myFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Trainers"].unshift(data);
    console.log(campus);
    listaTeams();
    myFormularioTrainers.reset();
})

let listaTeams = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    Object.entries(campus).forEach((id, val) => {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${id}">${id}</option>
        `);
    });
}