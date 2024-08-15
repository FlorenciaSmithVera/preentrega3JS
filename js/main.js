
const proveedores = []

class factura {
    constructor(numerofc, nombre, monto) {
        this.numerofc = numerofc;
        this.nombre = nombre;
        this.monto = monto;
    }
}

buttonlisto.addEventListener("click", () => {
    const facturita = new factura(numerofc.value, nombre.value, parseInt(monto.value));
    proveedores.push(facturita);
    localStorage.setItem("facturas", JSON.stringify(proveedores)) 
    alert("Cargaste Factura " + facturita.numerofc)
})




buttonfin.addEventListener("click", () => {
    confirmacion.append(textoconfirm)
    confirmacion.append(buttonverfc)
})

buttonverfc.addEventListener("click", (e) => {
    cuerpo.append(tablafac)
    tablafac.append(tablatit)
    tablatit.append(columntitulo)
    columntitulo.append(titulosposta)
    columntitulo.append(titnumero)
    columntitulo.append(titprov)
    columntitulo.append(titmonto)
    columntitulo.append(titseleccion)
    tablatit.append(cuerpodetabla)
    proveedores.forEach(el => { crearFactura(el) })
    cuerpo.append(ultimosbotones)
    
},{once: true})


let pagofinal = []

buttonpagar.addEventListener("click", () => {
    const totalpago = pagofinal.reduce((acc, el) => acc + el.monto, 0)

    const final = document.createElement("div")
    final.className = "divfinal"

    const mensajefinal = document.createElement("h5")
    mensajefinal.className = "mensajefinal"
    mensajefinal.innerText = "El total a pagar es:"

    const totalfinal = document.createElement("h5")
    totalfinal.className = "totalfinal"
    totalfinal.innerText = "$ " + totalpago

    final.append(mensajefinal)
    final.append(totalfinal)
    cuerpo.append(final)
    final.append(finalizarcircuito)

    
},{once: true})

botonlimpiar.addEventListener("click", () => { 
    pagofinal = [] 
})


historico.addEventListener("click", () => {
    const historial = JSON.parse(localStorage.getItem("facturas"))
    console.log(historial)
})


