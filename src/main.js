import Cliente from "./clientes.js";
import Impuesto from "./impuestos.js";

const valores = document.querySelector("#submitValues");

valores.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre_cliente = document.querySelector("#nombreCliente").value;
  const monto_bruto = parseInt(document.querySelector("#montoBruto").value);
  const monto_deduccion = parseInt(
    document.querySelector("#montoDeduccion").value
  );
  const resultado = document.querySelector("#resultado");

  const nuevoT = new Impuesto(monto_bruto, monto_deduccion);
  const nuevo_cliente = new Cliente(nombre_cliente, nuevoT);
  const pagara = nuevo_cliente.calcularImpuesto();

  resultado.innerHTML = pagara.texto;
});
