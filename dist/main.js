"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var impuesto = new _impuestos["default"](100000, 1000);
var cliente = new _clientes["default"]("Sara", impuesto);
var pagar = cliente.calcularImpuesto();
console.log(pagar.texto);