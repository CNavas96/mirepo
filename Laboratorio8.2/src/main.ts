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
const listaPacientesPediatria : Pacientes[] = pacientes.filter(
    (paciente : Pacientes): boolean => 
        paciente.especialidad === "Pediatra");

console.log("Lista Pacientes Pediatria: ", listaPacientesPediatria);


//b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const listaPacientesPediatriaMenorQueDiezAños : Pacientes[] = pacientes.filter(
    (paciente : Pacientes): boolean => 
        paciente.especialidad === "Pediatra" && paciente.edad < 10);

console.log("Lista Pacientes Pediatria menor de 10 años: ", listaPacientesPediatriaMenorQueDiezAños);


/// APARTADO 2
/*
Queremos activar el protocolo de urgencia si cualquier de los pacientes´
tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una
temperatura corporal superior a 39 grados.
*/
const activarProtocoloUrgencia = pacientes.some((paciente: Pacientes): boolean => {
    let activarProctolo = false;
    if(paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100){
        activarProctolo = true
    }
    return activarProctolo;
  });
console.log("PROTOCOLO: ", activarProtocoloUrgencia);


///Apartado 3
/*
El pediatra no puede atender hoy a los pacientes, queremos reasignar los 
pacientes asignados a la especialidad de pediatría a la de medico de familia.
*/
const reasignaPacientesAMedicoFamilia: Pacientes[] = pacientes.map((paciente: Pacientes): Pacientes => ({
        ...paciente,
        especialidad: "Medico de familia",
    }));

console.log("Lista pacientes reasignados: ", reasignaPacientesAMedicoFamilia);



//// Apartado 4
/*
Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados),
 comprobar si en la lista hay algún paciente asignado a pediatría
*/

const HayPacientesDePediatria: boolean = pacientes.some((paciente: Pacientes): boolean => 
    paciente.especialidad === "Pediatra"
);

console.log("Hay pacientes para Pediatria? ", HayPacientesDePediatria)


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




  //const indiceReservaCkienteFrecuente = pacientes.findIndex((paciente : Pacientes) : NumeroPacientesPorEspecialidad => paciente.especialidad === "standard");
  
//console.log(indiceReservaCkienteFrecuente);

const cuentaPacientesPorEspecialidad  = (paciente: Pacientes[]): NumeroPacientesPorEspecialidad => {
    const contador : NumeroPacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    }
   

    paciente.forEach((paciente) => {
        if(paciente.especialidad === "Medico de familia" ){
            contador.medicoDeFamilia++
        } else if(paciente.especialidad === "Pediatra") {
            contador.pediatria++    
        } else if(paciente.especialidad === "Cardiólogo") {
            contador.cardiologia++
        }
    })
    return contador;
  };
console.log(cuentaPacientesPorEspecialidad(pacientes));
