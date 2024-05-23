import "./reseteo.css";

interface Reserva {
    tipoHabitacion: "standard" | "suite";
    pax: number;
    noches: number;
}
  
const reservas: Reserva[] = [
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 3,
    },
    {
      tipoHabitacion: "standard",
      pax: 1,
      noches: 4,
    },
    {
      tipoHabitacion: "suite",
      pax: 2,
      noches: 1,
    },
];


//Caso 1
// En el caso de un cliente particular:

// Habitación / día (IVA No Incluido):
// Standard: 100 €. o Suite: 150 €.

// Cargos adicionales:
// Por cada persona adicional sumarle 40 € al precio de cada noche.
// IVA sumarle un 21% al total.
// Crear una clase que reciba la lista de reservas y calcule el subtotal y el total teniendo en cuenta los anteriores requisitos.


class CalcularPrecioReserva {
    reservas: Reserva[];
    precios = {
        standard: 100,
        suite: 150,
        personaAdicional: 40,
        iva: 0.21,
    }

    constructor(reservas: Reserva[]) {
        this.reservas = reservas;
    }


    calcularSubtotal() : number {
        let  subtotal = 0;

        for(const reserva of this.reservas) {
            const precioHabitacion = this.precios[reserva.tipoHabitacion];
            const cargoPersonaAdicional = this.precios.personaAdicional * (reserva.pax - 1);
               
            subtotal += (precioHabitacion + cargoPersonaAdicional) * reserva.noches;
        }

        return subtotal;
    }

    calcularTotal() : number {
        const subtotal = this.calcularSubtotal();
        const IVA = subtotal * this.precios.iva
        const total = subtotal + IVA

        return total;
    }
}

const calcularReserva = new CalcularPrecioReserva(reservas);
const precioSubtotal = calcularReserva.calcularSubtotal();
const precioTOTAL = calcularReserva.calcularTotal();

console.log("CASO 1");
console.log("Este es el subtotal: ", precioSubtotal);
console.log("PRECIO TOTAL RESERVA :", precioTOTAL);
console.log("---------------------");

// Caso 2
// Cubrimos el caso de un tour operador, al reservar grandes volúmenes, le damos las siguientes condiciones especiales:

// Todas las habitaciones tienen el mismo precio (100 €).
// Adicionalmente se le aplica un 15 % de descuento a los servicios contratados.
// Crear una clase que herede de la primera que cubra el caso del cálculo de totales y subtotales para el tour operador.

class CalcularTourOperador extends CalcularPrecioReserva {
    constructor(reservas: Reserva[]) {
        super(reservas);
    }

    calcularSubtotal(): number {
        let subtotal = 0;
        for(const reserva of this.reservas){
            const precioHabitacion = 100;
            subtotal += precioHabitacion * reserva.noches;
        }

        return subtotal * 0.85;
    }


    calcularTotal(): number {
        const subtotal = this.calcularSubtotal();
        const iva = subtotal * this.precios.iva;
        const total = subtotal + iva;

        return total;
    }
}

const calcularTourOperador = new CalcularTourOperador(reservas);
const subtotalTourOperador = calcularTourOperador.calcularSubtotal();
const totalTourOperador = calcularTourOperador.calcularTotal();

console.log("CASO 2");
console.log("Subtotal Tour Operador: ", subtotalTourOperador);
console.log("Total Tour Operador: ", totalTourOperador);
console.log("---------------------");




// Desafío
// Crear una clase base con la funcionalidad común, y dos clases hijas una con el caso para cliente particular y otra para tour operador.
// En el constructor de la clase base, introduce la lista de precios de habitaciones, ¿Qué tendrás que hacer para que en el hijo puedas inicializar la clase?
// Algunas pistas:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/super

interface PreciosHabitaciones {
    standard: number;
    suite: number;
    personaAdicional: number;
    iva: number;
    descuento: number;
}


class CalcularReservaBASE {
    reservas: Reserva[];
    precios: PreciosHabitaciones;

    constructor(reservas: Reserva[], precios: PreciosHabitaciones) {
        this.reservas = reservas;
        this.precios = precios;
    }

    calcularSubtotal() : number {
        let  subtotal = 0;

        for(const reserva of this.reservas) {
            const precioHabitacion = this.precios[reserva.tipoHabitacion];
            const cargoPersonaAdicional = this.precios.personaAdicional * (reserva.pax - 1);
               
            subtotal += (precioHabitacion + cargoPersonaAdicional) * reserva.noches;
        }

        return subtotal;
    }

    calcularTotal() : number {
        const subtotal = this.calcularSubtotal();
        const IVA = subtotal * this.precios.iva
        const total = subtotal + IVA

        return total;
    }
}

class ReservaclienteParticular extends CalcularReservaBASE {
    constructor(reservas: Reserva[]) {
        const precios: PreciosHabitaciones = {
            standard: 100,
            suite: 150,
            personaAdicional: 40,
            iva: 0.21,
            descuento: 0,
        };
        super(reservas, precios);
    }
}

class ReservaTourOperador extends CalcularReservaBASE {
    constructor(reservas: Reserva[]) {
        const precios = {
            standard: 100,
            suite: 150,
            personaAdicional: 0,
            iva: 0.21,
            descuento: 0.15,
        }
        super(reservas, precios)
    }

    calcularSubtotal(): number {
        const subtotalBase = super.calcularSubtotal();
        const descuento = subtotalBase * this.precios.descuento;
        const subtotal = subtotalBase - descuento;

        return subtotal;
    }
}

const calcularReservaParticular = new ReservaclienteParticular(reservas);
const precioSubtotalParticular = calcularReservaParticular.calcularSubtotal();
const precioTotalParticular = calcularReservaParticular.calcularTotal();

console.log("APARTADO DESAFIO");
console.log("subtotal Cliente Particular: ", precioSubtotalParticular);
console.log("total Cliente Particular: ", precioTotalParticular);


const calcularReservaTourOperador = new ReservaTourOperador(reservas);
const precioSubtotalTourOperador = calcularReservaTourOperador.calcularSubtotal();
const precioTotalTourOperador = calcularReservaTourOperador.calcularTotal();

console.log("subtotal Tour Operador: ", precioSubtotalTourOperador);
console.log("total Tour Operador: ", precioTotalTourOperador);
console.log("---------------------");

// Ejercicio adicional
// Añadimos un campo a cada reserva en el que indicamos si el desayuno está incluido o no:
// en caso de estar incluido supone un cargo adicional de 15 € por persona y noche.
// Calcular totales y subtotales tanto para tarifa particular como tour operador.
// Una muestra de datos con los que trabajar:


interface ReservaEX {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

const reservasEX: ReservaEX[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];


interface PreciosEX {
    standard: number;
    suite: number;
    personaAdicional: number;
    iva: number;
    descuento: number;
    desayuno: number
}


class CalcularReservaPrecioEX {
    reservas: ReservaEX[];
    precios: PreciosEX;
        
    constructor(reservas: ReservaEX[], precios: PreciosEX) {
        this.reservas = reservas;
        this.precios = precios;
    }

    calcularSubtotal(): number {
        let subtotal = 0;
        for(let i = 0; i < this.reservas.length; i++){
            const reserva = this.reservas[i];
            const precioHabitacion = this.precios[reserva.tipoHabitacion];
            const cargoPersonaAdiconal = this.precios.personaAdicional * (reserva.pax - 1);
            const cargoDesayuno = reserva.desayuno ? this.precios.desayuno : 0 ;
            
            subtotal += (precioHabitacion + cargoPersonaAdiconal + cargoDesayuno) * reserva.noches;
        }

        return subtotal;
    }


    calcularTotal(): number {
        const subtotal = this.calcularSubtotal();
        const iva = subtotal * this.precios.iva;
        const total = subtotal + iva;

        return total;
    }
}

class CalcularClienteParticularEX extends CalcularReservaPrecioEX {
    constructor(reservas: ReservaEX[]) {
        const precios = {
            standard: 100,
            suite: 150,
            personaAdicional: 40,
            iva: 0.21,
            descuento: 0,
            desayuno: 15,
        }
        super(reservas, precios);
    }
}


class CalcularTourOperadorEX extends CalcularReservaPrecioEX {
    constructor(reservas: ReservaEX[]) {
        const precios = {
            standard: 100,
            suite: 100,
            personaAdicional: 0,
            iva: 0.21,
            descuento: 0.15,
            desayuno: 15,
        }
        super(reservas, precios);
    }

    calcularSubtotal(): number {
        const subtotalBase = super.calcularSubtotal();
        const descuento = subtotalBase * this.precios.descuento;
        const subtotal = subtotalBase - descuento;

        return subtotal;
    }
}



const calcularReservaParticularEX = new CalcularClienteParticularEX(reservasEX);
const precioSubtotalParticularEX = calcularReservaParticularEX.calcularSubtotal();
const precioTotalParticularEX = calcularReservaParticularEX.calcularTotal();


console.log("APARTADO EJERCICIO EXTRA");
console.log("Subtotal Cliente Particular: ", precioSubtotalParticularEX);
console.log("Total Cliente Particular: ", precioTotalParticularEX);

const calcularReservaTourOperadorEX = new CalcularTourOperadorEX(reservasEX);
const precioSubtotalTourOperadorEX = calcularReservaTourOperadorEX.calcularSubtotal();
const precioTotalTourOperadorEX = calcularReservaTourOperadorEX.calcularTotal();

console.log("Subtotal Tour Operador: ", precioSubtotalTourOperadorEX);
console.log("Total Tour Operador: ", precioTotalTourOperadorEX);