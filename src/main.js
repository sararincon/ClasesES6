import Cliente from "./clientes.js";
import Impuesto from "./impuestos.js";

const impuesto = new Impuesto(100000, 1000);
const cliente = new Cliente("Sara", impuesto);

const pagar = cliente.calcularImpuesto();

console.log(pagar.texto);
