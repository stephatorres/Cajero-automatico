let cuentas = [
  { nombre: "Stepha", saldo: 500, password: "1202"}, 
  { nombre: "Dani", saldo: 300, password: "1203"}, 
  { nombre: "Juli", saldo: 100, password: "1209" } 
];
const maximo = 990;
const minimo = 10;

document.querySelector("#persona").addEventListener("change",leerPersona)
document.getElementById("menu").style.display = "none"

function leerPersona(){
  let indice = parseInt(document.querySelector("#persona").value);
  let nombre = cuentas[indice].nombre;

  document.getElementById("saludo").innerHTML = "Cordial saludo," + nombre;
  document.getElementById("meter-password").style.display = "block"

}

function ingreso(){
  let indice = parseInt(document.querySelector("#persona").value);
  let recibida = document.getElementById("password").value;
  let contra = cuentas[indice].password;

  if (recibida === contra) {
    document.getElementById("menu").style.display = "block"
    document.getElementById("meter-password").style.display = "none"
    document.getElementById("ingresar").style.display = "none"
    document.getElementById("persona").style.display = "none"
      alert("Bienvenido")
  } else {
    document.getElementById("menu").style.display = "none"
      alert("La contraseña es incorrecta o no has llenado el campo")
  } 
  
}

document.getElementById("fAgregar").addEventListener("submit",agregar)
function agregar(e){
  e.preventDefault()
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  let ingresoMonto = Number(document.querySelector("#ingresoMonto").value);
  document.querySelector("#montoIngresado").innerHTML = "Tu monto ingresado es: " + ingresoMonto;   
  let totalSumado = (saldo += ingresoMonto)
    if (totalSumado <= maximo) {
      cuentas[indice].saldo = totalSumado;
       document.querySelector("#nuevoSaldo").innerHTML = "Tu total es: " + saldo; {    
    }
      }else{
        alert("No puedes ingresar mas dinero, el limite maximo en al cuenta es $990 y en este momento tienes: "+ saldo)
      }  
}

document.getElementById("fRetirar").addEventListener("submit",retiro)
function retiro(e){
  e.preventDefault()
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  let saldoRetirado =  Number(document.querySelector("#ingresoMontoR").value);
  document.querySelector("#saldoRetirado").innerHTML = "Tu retiro es: " + saldoRetirado;
  let nuevoSaldo = saldo - saldoRetirado;
  if (nuevoSaldo >= minimo) {
    cuentas[indice].saldo = nuevoSaldo;    
  document.querySelector("#nuevoSaldoR").innerHTML = "Tu monto total despúes de retirar es: " + nuevoSaldo;     
  } else {
    alert("No puedes retirar mas dinero, el limite minimo en al cuenta es $10 y en este momento tienes: "+ saldo)
  }
}

function consulta(){
  let indice = parseInt(document.querySelector("#persona").value);
  let saldo = cuentas[indice].saldo;
  
  document.querySelector("#saldoActual").innerHTML = "Tu saldo actual es: " + saldo;
}

function cierre() {
  window.location.reload()
}