
alert("Bienvenido a Bazar Tuti! ¿Que producto desea comprar?")
let seleccionarProductos = Number(prompt( "1-vasos $2500 2-cubiertos $1500 3-bowls $4000 4-jarras $5000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es vasos, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 2500)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es cubiertos, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 1500)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es bowls, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 4000)
    break;
    case 4:
      seleccionarCantidad = Number(prompt("el producto seleccionado es jarros, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 5000)
    break;

    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-vasos $3000 2-cubiertos $1500 3-bowls $5000 4-jarras $6000 "))
}

alert("el total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("el costo de envio es de 1000, el total es: " + total)
    }
}

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  }

  
}

metodoDePago()