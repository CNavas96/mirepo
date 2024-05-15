import "../reseteo.css";


type numeroCuenta = {
    codigoPais: string,
    codigoControl: string,
    codigoBanco: string,
    codigoSucursal: string,
    numeroCuenta: string,
}


const validarIBAN = (iban: string): boolean => {
    const ibanRegex =  /^ES\d{2}(\s|-|_)?\d{4}(\s|-|_)?\d{4}(\s|-)?\d{2}(\s|-|_)?\d{10}$/;

    return ibanRegex.test(iban);
};


const extraerInformacionIBAN = (iban: string): numeroCuenta =>{
    if(validarIBAN(iban)){
        const codigoPais: string = iban.slice(0,4).replace(/ \s|-|_/g, "");

        const codigoControl: string = iban.slice(4,8).replace(/ \s|-|_/g, "");

        const codigoBanco: string = iban.slice(8,12).replace(/ \s|-|_/g, "");

        const codigoSucursal: string = iban.slice(12,14).replace(/ \s|-|_/g, "");

        const numeroCuenta: string = iban.slice(14).replace(/ \s|-|_/g, "");

        return {
            codigoPais: codigoPais,
            codigoControl: codigoControl,
            codigoBanco: codigoBanco,
            codigoSucursal: codigoSucursal,
            numeroCuenta: numeroCuenta,
        }
    } else {
        throw new Error("No esta extayendo bien la informacion")
    }
};

const mostrarInformacionIban = (iban: string) : void => {
    const resultado = extraerInformacionIBAN(iban);
    const div = document.querySelector("#lista-informacion");

    if(div && div instanceof HTMLDivElement){
        const lista = document.createElement("ul");

        const codigoBanco = document.createElement("li");
        codigoBanco.textContent = `Banco: ${resultado.codigoBanco}`
        lista.appendChild(codigoBanco);

        const codigoSucursal = document.createElement("li");
        codigoSucursal.textContent = `Sucursal: ${resultado.codigoSucursal}`
        lista.appendChild(codigoSucursal);

        const codigoControl = document.createElement("li");
        codigoControl.textContent = `Digito de control : ${resultado.codigoControl}`;
        lista.appendChild(codigoControl);

        const numeroCuenta = document.createElement("li");
        numeroCuenta.textContent = `Numero de cuenta: ${resultado.numeroCuenta}`
        lista.appendChild(numeroCuenta);

        div.innerHTML = "";
        div.appendChild(lista);
    } else {
        alert("Numero de IBAN INCORRECTO");
    }
};

const manejadorIBAN = () => {
    const ibanInput = document.querySelector("#input-iban");

    if(ibanInput && ibanInput instanceof HTMLInputElement){
        const ibanCuenta = ibanInput.value;
        mostrarInformacionIban(ibanCuenta);
    } else {
        throw new Error("El manejador de iban falla");
    }
};

const boton = document.querySelector("#boton");
if(boton && boton instanceof HTMLButtonElement){
    boton.addEventListener("click", manejadorIBAN);
}

