

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//////APARTADO 1
//a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

let listaPacientesSoloPediatria : Pacientes[] = [];

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]) : void  => {
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad === "Pediatra"){
            listaPacientesSoloPediatria = [...listaPacientesSoloPediatria, pacientes[i]];
        }  
    }
};
obtenPacientesAsignadosAPediatria(pacientes);
console.log("SOLO PACIENTES PEDIATRIA",listaPacientesSoloPediatria);
console.log("ESTA ES LA ORIGINAL", pacientes);

//b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]) : void => {
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10){
            listaPacientesSoloPediatria = [...listaPacientesSoloPediatria, pacientes[i]];
        }  
    }
  };

obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log("SOLO PACIENTES PEDIATRIA y MENOR 10 AÑOS",listaPacientesSoloPediatria);
console.log("ESTA ES LA ORIGINAL", pacientes);


/// APARTADO 2
/*
Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco 
superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
*/
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
    
    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100){
            activarProctolo = true;
            console.log(activarProctolo);
            break;
        }
    }
    return activarProctolo;
};
activarProtocoloUrgencia(pacientes);


///Apartado 3

/*
El pediatra no puede atender hoy a los pacientes, queremos reasignar los 
pacientes asignados a la especialidad de pediatría a la de medico de familia
*/
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): void => {
    let nuevaListaTrasReasignarda : Pacientes[] = [];


    for(let i = 0; i < pacientes.length; i++){
        const pacientesPediatria: Pacientes = {
            ...pacientes[i],
            especialidad: "Medico de familia",
        }
        nuevaListaTrasReasignarda.push(pacientesPediatria);
    }
    console.log("NUEVA LISTA CON LOS PACIENTES REASIGNADOS ", nuevaListaTrasReasignarda);
    console.log("ORIGINAL:  ", pacientes);
};

reasignaPacientesAMedicoFamilia(pacientes);



//// Apartado 4
/*
Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes 
asignados), comprobar si en la lista hay algún paciente asignado a pediatría
*/ 
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let preguntaQuedanPacientes = true;

    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad !== "Pediatra"){
            preguntaQuedanPacientes = false
        } else {
            preguntaQuedanPacientes = true;        
        }
    }
    console.log(preguntaQuedanPacientes);
    return preguntaQuedanPacientes;
};
HayPacientesDePediatria(pacientes);



///// Apartado 5
/*
Queremos calcular el número total de pacientes que están asignados a la especialidad 
de Medico de familia, y lo que están asignados a Pediatría y a cardiología
*/

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

  
  const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    let contadorMedicofamilia: number = 0;
    let contadorPediatria: number = 0;
    let contadorCardiologia: number = 0;

    for(let i = 0; i < pacientes.length; i++){
        if(pacientes[i].especialidad === "Medico de familia" ){
            contadorMedicofamilia++
        } else if(pacientes[i].especialidad === "Pediatra") {
            contadorPediatria++    
        } else if(pacientes[i].especialidad === "Cardiólogo") {
            contadorCardiologia++
        }
    }

    console.log("MEDICO FAMILIA", contadorMedicofamilia);
    console.log("Pediatria", contadorPediatria);
    console.log("Cardiologia", contadorCardiologia);

   return  {
    medicoDeFamilia: contadorMedicofamilia,
    pediatria: contadorPediatria,
    cardiologia: contadorCardiologia,
    } 
};
cuentaPacientesPorEspecialidad(pacientes);

  