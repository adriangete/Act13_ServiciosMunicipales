var map;
var datos = new Array();
var totalpedido = 0;

document.getElementById("lupa").addEventListener("click", generarAlmacen, false);

class servicios {
    constructor(id, Descripcion, Tipo, Direccion, Latitud, Longitud, Precio, Duracion) {
        this.codigo = id;
        this.descripcion = Descripcion;
        this.tipo = Tipo;
        this.direccion = Direccion;
        this.latitud = Latitud;
        this.longitud = Longitud;
        this.precio = Precio;
        this.duracion = Duracion;

    }
    leerRegistro() {
        return this;
    }
}

function generarAlmacen(evt) {

    var cuerpoa = document.querySelector("#cuerpoServicios");
    cuerpoa.innerHTML = "";

    for (i = 0; i < datos.length; i++) {

        registro = datos[i]





        linea = document.createElement("tr");
        botonId = document.createElement("button");
        // En el atributo  del button creado paso el artículo seleccionado pedido  
        botonId.registro = registro;

       botonId.addEventListener("click", contratarServicio, true)
        dato = document.createTextNode(registro.codigo);
        botonId.appendChild(dato);
        Columna = document.createElement("td");
        Columna.appendChild(botonId);
        linea.appendChild(Columna);

        parrafo = document.createElement("p");
        dato = document.createTextNode(registro.descripcion);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)


        parrafo = document.createElement("p");
        dato = document.createTextNode(registro.precio);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)

        parrafo = document.createElement("p");
        dato = document.createTextNode(registro.duracion);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)



        parrafo = document.createElement("p");
        dato = document.createTextNode(registro.direccion);
        Columna = document.createElement("td");
        Columna.appendChild(dato);
        linea.appendChild(Columna)

       cuerpoa.appendChild(linea);

    }
  

}
function contratarServicio() {
 
     registro=this.registro ;
     crearMapa();
       /*map = new google.maps.Map(
          document.getElementById('map_canvas'), {
              
          // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
              center: new google.maps.LatLng(registro.latitud,registro.longitud),//latitud,longitud),//
             // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
          zoom: 18, // zoom del mapa
          draggableCursor: 'auto', // forma del cursor
          draggingCursor: 'crosshair',
          mapTypeId: google.maps.MapTypeId.HYBRID // tipo de mama
      }); */
      // Tabla Pedidos

      var cuerpoPedido = document.querySelector("#cuerpoPedido");
      

      linea = document.createElement("tr");
      botonId = document.createElement("button");
      // En el atributo  del button creado paso el artículo seleccionado pedido  
      botonId.registro = registro;

      botonId.addEventListener("click", crearMapa, true)
      dato = document.createTextNode(registro.codigo);
      botonId.appendChild(dato);
      Columna = document.createElement("td");
      Columna.appendChild(botonId);
      linea.appendChild(Columna);

      parrafo = document.createElement("p");
      dato = document.createTextNode(registro.descripcion);
      Columna = document.createElement("td");
      Columna.appendChild(dato);
      linea.appendChild(Columna)


      parrafo = document.createElement("p");
      dato = document.createTextNode(registro.precio);
      Columna = document.createElement("td");
      Columna.appendChild(dato);
      linea.appendChild(Columna)

      var ccantidad = document.createElement("input");
      ccantidad.type="text"
      ccantidad.registro = registro;

      ccantidad.addEventListener("keyup", calculoimporte, false)

      Columna = document.createElement("td");
      Columna.appendChild(ccantidad);
      linea.appendChild(Columna)


      var cimporte = document.createElement("input");
      cimporte.type="text"
      cimporte.disabled="true"
      Columna = document.createElement("td");
      Columna.appendChild(cimporte);
      linea.appendChild(Columna)

      this.removeEventListener("click",contratarServicio,true);
      cuerpoPedido.appendChild(linea);
  
}
function calculoimporte() {

    articuloventa = this.registro;
    var precio = articuloventa.precio;
    var cantidad = this.value
    var importeLinea = parseFloat(precio) * parseFloat(cantidad);

    var lineaPadre = this.parentElement.parentElement;
   
    var hijosVentaPedido = lineaPadre.childNodes;
   
    var importelinea = hijosVentaPedido[4].firstChild;

    var importeAnterior = parseFloat(importelinea.value);  
    if (isNaN(importeAnterior)) {
        importeAnterior = 0;
    }
    
    importelinea.value = importeLinea
    if (isNaN(importelinea.value)) {
        importelinea.value = '0';
    }
    if (isNaN(totalpedido)) {
        totalpedido = 0;
    }
    totalpedido = totalpedido + importeLinea - importeAnterior;
    var ctotal = document.querySelector("#total");
    ctotal.value = totalpedido;
}
function crearMapa(){
    registro=this.registro ;
    map = new google.maps.Map(
        document.getElementById('map_canvas'), {
            
        // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
            center: new google.maps.LatLng(registro.latitud,registro.longitud),//latitud,longitud),//
           // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
        zoom: 18, // zoom del mapa
        draggableCursor: 'auto', // forma del cursor
        draggingCursor: 'crosshair',
        mapTypeId: google.maps.MapTypeId.HYBRID // tipo de mama
    });
}