import "../reseteo.css";
import * as ibantools from 'ibantools'

type numeroCuenta = {
    codigoPais: string,
    codigoControl: string,
    codigoBanco: string,
    codigoSucursal: string,
    numeroCuenta: string,
}

const validarIBAN = (iban : string) : boolean =>  {
    return ibantools.isValidIBAN(iban);;
}



const extraerDatosIBAN = (iban: string): boolean => {
    const ibanRegex =  /^ES\d{2}(\s|-|_)?\d{4}(\s|-|_)?\d{4}(\s|-)?\d{2}(\s|-|_)?\d{10}$/;

    return ibanRegex.test(iban);
};


const extraerInformacionIBAN = (iban: string): numeroCuenta =>{
    if(extraerDatosIBAN(iban)){
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
        codigoBanco.textContent = `Banco: ${obtenerNombreBanco(parseInt(resultado.codigoBanco))}`
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

const obtenerNombreBanco = (numeroSucursal: number) : string => {
    let nombreBanco;
    switch (numeroSucursal) {
        case 2080:
            nombreBanco = "Abanca Corporación Bancaria";
            break;
        case 61:
            nombreBanco = "Banca March";
            break;
        case 188:
            nombreBanco = "Banco Alcalá";
            break;
        case 182:
            nombreBanco = "Banco Bilbao Vizcaya Argentaria";
            break;
        case 130:
            nombreBanco = "Banco Caixa Geral";
            break;
        case 234:
            nombreBanco = "Banco Caminos";
            break;
        case 2105:
            nombreBanco = "Banco Castilla-La Mancha";
            break;
        case 240:
            nombreBanco = "Banco de Crédito Social Cooperativo";
            break;
        case 81:
            nombreBanco = "Banco de Sabadell";
            break;
        case 487:
            nombreBanco = "Banco Mare Nostrum";
            break;
        case 186:
            nombreBanco = "Banco Mediolanum";
            break;
        case 238:
            nombreBanco = "Banco Pastor";
            break;
        case 75:
            nombreBanco = "Banco Popular Español";
            break;
        case 49:
            nombreBanco = "Banco Santander";
            break;
        case 3873:
            nombreBanco = "Banco Santander Totta";
            break;
        case 2038:
            nombreBanco = "Bankia";
            break;
        case 128:
            nombreBanco = "Bankinter";
            break;
        case 138:
            nombreBanco = "Bankoa";
            break;
        case 152:
            nombreBanco = "Barclays Bank PLC";
            break;
        case 3842:
            nombreBanco = "BNP Paribas Paris";
            break;
        case 3025:
            nombreBanco = "Caixa de Credit del Enginyers";
            break;
        case 2100:
            nombreBanco = "Caixabank";
            break;
        case 2045:
            nombreBanco = "Caja de Ahorros y Monte de Piedad de Ontinyent";
            break;
        case 3035:
            nombreBanco = "Caja Laboral Popular CC";
            break;
        case 3081:
            nombreBanco = "Caja Rural Castilla-La Mancha";
            break;
        case 3058:
            nombreBanco = "Cajamar Caja Rural";
            break;
        case 2000:
            nombreBanco = "Cecabank";
            break;
        case 1474:
            nombreBanco = "Citibank Europe PLC";
            break;
        case 3821:
            nombreBanco = "Commerzbank AG";
            break;
        case 3877:
            nombreBanco = "Danske Bank A/S";
            break;
        case 19:
            nombreBanco = "Deutsche Bank SAE";
            break;
        case 239:
            nombreBanco = "EVO Banco";
            break;
        case 2085:
            nombreBanco = "Ibercaja Banco";
            break;
        case 1465:
            nombreBanco = "ING Bank NV";
            break;
        case 2095:
            nombreBanco = "Kutxabank";
            break;
        case 2048:
            nombreBanco = "Liberbank";
            break;
        case 131:
            nombreBanco = "Novo Banco";
            break;
        case 73:
            nombreBanco = "Open Bank";
            break;
        case 108:
            nombreBanco = "Société Générale";
            break;
        case 2103:
            nombreBanco = "Unicaja Banco";
            break;
        case 7115:
            nombreBanco = "BBVA";
            break;
        default:
            nombreBanco = "Banco no encontrado";
    }
    return nombreBanco;
}



const validandoIBAN = () => {
    const inputIBAN = document.querySelector("#input-iban");
    if(inputIBAN && inputIBAN instanceof HTMLInputElement){
        if(validarIBAN(inputIBAN.value)){
            mostrarInformacionIban(inputIBAN.value);
        } else {
            throw new Error("El IBAN introducido no es válido.");
        }
    }   
};


const boton = document.querySelector("#boton");
if(boton && boton instanceof HTMLButtonElement){
    boton.addEventListener("click", validandoIBAN);
}
