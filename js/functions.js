function crearFactura(factura) {
    const lineafac = document.createElement("tr")

    const lineafacdos = document.createElement("th")
    lineafacdos.scope = "row"
    lineafacdos.innerText = factura.numerofc

    const lineaproveedor = document.createElement("td")
    lineaproveedor.innerText = factura.nombre

    const lineamonto = document.createElement("td")
    lineamonto.innerText = factura.monto

    const lineaseleccion = document.createElement("td")

    const botonselect = document.createElement("button")
    botonselect.type = "submit"
    botonselect.className = "seleccionfc"
    botonselect.innerText = "PAGAR"
    botonselect.onclick = () => {agregarAlPago(factura)}

    cuerpodetabla.append(lineafac)
    lineafac.append(lineafacdos)
    lineafac.append(lineaproveedor)
    lineafac.append(lineamonto)
    lineafac.append(lineaseleccion)
    lineaseleccion.append(botonselect)
    
}


function agregarAlPago(factura) {

    if (pagofinal.some(el => el.numerofc === factura.numerofc)) {
        alert("Ya lo seleccionaste")
    } else {
        pagofinal.push(factura)
    }
}



