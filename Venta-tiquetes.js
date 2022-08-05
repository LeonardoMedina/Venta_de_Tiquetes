const CIUDADES = [
  "Lima",
  "Cusco",
  "Ica",
  "Ancash",
  "Arequipa",
  "Lambayeque",
  "Junín-Huancayo",
  "Puno",
  "Loreto",
  "Piura",
];

var pasajeros = [];

onload(() => {
  CIUDADES.forEach((ciudad) => {
    //Cargamos el listado de las ciudades
    addOption(slcCiudadOrigen, ciudad, ciudad);
    addOption(slcCiudadDestino, ciudad, ciudad);
  });
});

var username = prompt(
  "Buen día, estimado cliente, le damos la bienvenida a GOOD TRAVEL: VIAJANDO A OTRO NIVEL, ingrese su nombre de usuario para continuar"
);
var need = prompt(
  "Bienvenido " +
    username +
    ", a nuestro sistema de MasterTicket ¿Deseas comprar algun ticket?  (Sí/No)"
);

if (need == "Sí") {
  alert(
    "Bueno, primeramente, elija su ciudad de orígen y su ciudad de destino"
  );
} else {
  alert("¡Gracias por su preferencia 😊. Que siga teniendo un excelente dia!");
}

var value_CO; //Valor de la ciudad de origen
var value_CD; //Valor de la ciudad de destino

var limit_tiquets_avion = 30; //Las variables no se recomienda tener caracteres especiales

var limit_tiquets_Autobus = 40;
var numero_Asientos_Autbobus = 40;

var costo_total = 0;

function solicitarDatosPasajero(n) {
  alert("Rellene los datos del pasajero " + (n+1));
  let pasajero = {
    nombre: prompt("Nombre completo:"),
    edad: prompt("Edad:"),
    dni: prompt("DNI:"),
  };
  pasajeros.push(pasajero);
}

function infoPasajero(i) {
  alert(
    "Datos del pasajero " +
      (i+1) +
      ":" +
      "\n Nombre: " +
      pasajeros[i].nombre +
      "\n Edad: " +
      pasajeros[i].edad +
      "\n DNI: " +
      pasajeros[i].dni +
      "\n Asiento seleccionado: " +
      pasajeros[i].asiento
  );
}

function comprartiquetes() {
  value_CO = slcCiudadOrigen.options[slcCiudadOrigen.selectedIndex].value;
  console.log(value_CO);

  value_CD = slcCiudadDestino.options[slcCiudadDestino.selectedIndex].value;
  console.log(value_CD);

  var transporte = parseInt(
    prompt(
      "¿En qué desea viajar? Elija el número de la opción: \n 1. Avión\n 2. Autobús"
    )
  );

  getCantidadTiquetes = () =>
    parseInt(prompt("¿Cuántos tiquetes desea adquirir?"));

  if (transporte == 1) {
    var cantidad_tiquetes_a = getCantidadTiquetes();
    for (let i = 0; i < cantidad_tiquetes_a; i++) {
      solicitarDatosPasajero(i);
      elegir_avion(i);
      infoPasajero(i);
    }
    compraEfectuada("Avión");


  } else if (transporte == 2) {
    var cantidad_tiquetes_b = getCantidadTiquetes();
    var n_pasajero_b = 1;
    while (n_pasajero_b < cantidad_tiquetes_b) {
      n_pasajero_b = n_pasajero_b + 1;
      datosPasajero(n_pasajero_b);
      //elegir_bus(); No vi la llamada de la función
      alert(
        "Datos del pasajero " +
          n_pasajero_b +
          ":" +
          "\n Nombre: " +
          datos_1_b +
          "\n Edad: " +
          datos_2_b +
          "\n DNI: " +
          datos_3_b
      );
    }

    var fechaHora = new Date();
    alert(
      "Perfecto! Su compra se ha efectuado exitosamente " +
        username +
        ". Haga clic para ver los detalles de su ticket"
    );
    alert(
      "\n Usuario: " +
        username +
        "\n N° de pasajeros: " +
        cantidad_tiquetes_b +
        "\n Fecha y hora de compra: " +
        fechaHora +
        "\n Medio de Trasporte: Bus" +
        "\n Ciudad de Origen: " +
        slcCiudadOrigen +
        "\n Ciudad de destino: " +
        slcCiudadDestino +
        "\n Total de la compra :" +
        costo_total
    );
  } else {
    alert("Lo sentimos, los datos ingresados son incorrectos 😒");
  }
}

function compraEfectuada(metodo) {
  var fechaHora = new Date();
    alert(
      "Perfecto! Su compra se ha efectuado exitosamente " +
      username +
        ". Haga clic para ver los detalles de su ticket"
    );
    alert(
      "\n Usuario: " +
        username +
        "\n Nombre de pasajeros: " +
        pasajeros.length +
        "\n Fecha y hora de compra: " +
        fechaHora +
        "\n Medio de Trasporte: " + metodo +
        "\n Ciudad de Origen: " +
        value_CO +
        "\n Ciudad de destino: " +
        value_CD +
        "\n Total de la compra :" +
        costo_total
    );
}

function elegir_avion(i) {
  var elegir_asiento_a = parseInt(
    prompt("Elija los asientos de su preferencia del 1 al " + limit_tiquets_avion + ":")
  );

  //Comprobamos que no sea inferior a 1 y superior a 30
  if(elegir_asiento_a >= 1 && elegir_asiento_a <= limit_tiquets_avion){
    //Comprobamos si el asiento ha sido seleccionado anteriormente
    if(pasajeros.findIndex(pasajero => pasajero.asiento == elegir_asiento_a) != -1){
      alert(
        "Upps😒! El asiento seleccionado no se encuentra disponible. Vuelva a seleccionar su asiento"
      );
      elegir_avion(i);
    }else{
      pasajeros[i].asiento = elegir_asiento_a;
      alert("Perfecto 👍, asiento seleccionado");
    }
    
  }else{
    alert(
      "Upps😒! El asiento seleccionado no existe"
    );
    elegir_avion(i);
  }
}

function elegir_bus() {
  var asientos_bus = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  for (var i = 0; i <= 39; i++) {
    var elegir_asiento_b = parseInt(
      prompt("Elija los asientos de su preferencia del 0 al 39:")
    );
    asientos_bus[i] = asientos_bus[elegir_asiento_b];
  }

  if ((asientos_bus[elegir_asiento_b] = 0)) {
    alert("Perfecto 👍, asiento seleccionado");
    asientos_bus[elegir_asiento_b] = asientos_bus[1];
  } else {
    alert(
      "Upps😒! El asiento seleccionado no se encuentra disponible. Vuelva a seleccionar su asiento"
    );
    elegir_bus();
  }
}
