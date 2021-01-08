function registrarAdmin() {
    var admin = [{ 'nombre': 'admin', 'correo': 'admin@admin.com', 'contrasena': 'admin' }];
    localStorage.setItem('datosAdmin', JSON.stringify(admin));

}

function Registrar() {

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;



    if (nombre.length == 0 || correo.length == 0 || contrasena.length == 0) {
        alert('No debe dejar campos vacios');
    } else {


        CrearListaUsuario(nombre, correo, contrasena);

        localStorage.setItem('ListaUsuarios', JSON.stringify(lista_usuarios));


        alert('Registro Exitoso');

        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasena").value = "";


    }
}


function Ingresar() {

    var usuarios = ObtenerListaUsuarios();
    var admin = ObtenerAdmin();


    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var existe = false;




    if (!usuarios || !admin) {
        alert('Datos incorrectos');

    } else {
        for (administrador of admin) {
            if (correo == administrador.correo && contrasena == administrador.contrasena) {
                window.location = "transaccion.html";
                existe = true;
                identidadAdmin = admin;
                localStorage.setItem('identidadAdmin', JSON.stringify(identidadAdmin));
                break;
            }


        }
        if (correo != administrador.correo && contrasena != administrador.contrasena) {

            for (usuario of usuarios) {
                if (usuario.correo == correo && usuario.contrasena == contrasena) {

                    window.location = "transaccion.html";

                    existe = true;
                    identidad = usuario;
                    localStorage.setItem('identidad', JSON.stringify(identidad));
                    break;
                }

            }


        }

        if (!existe) {
            alert('usuario no encontrado');
        }
    }

}








function GuardarCita() {


    /* var nombre = document.getElementById("nombre").value;
     var correo = document.getElementById("correo").value;
     var contrasena = document.getElementById("contrasena").value;
     /* Para obtener el texto */
    var combo = document.getElementById("especialidad");
    var selected = combo.options[combo.selectedIndex].text;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var mensaje = document.getElementById("mensaje").value;

    var identidad = Identidad();

    CrearListaCitas(identidad.nombre, identidad.correo, selected, fecha, hora, mensaje);

    localStorage.setItem('Citas', JSON.stringify(lista_citas));

    //var citas = ObtenerCitas();
    document.getElementById("mensaje").value = "";

    alert("Cita agendada");



}


function obtenerConsulta() {

    var list = ObtenerListaUsuarios(),
        tbody = document.querySelector('#tabla-consulta tbody');

    tbody.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i),
            nombre = row.insertCell(0),
            correo = row.insertCell(1),
            fecha = row.insertCell(2);
        nombre.innerHTML = list[i].nombre;
        correo.innerHTML = list[i].correo;
        fecha.innerHTML = list[i].fecha;



        tbody.appendChild(row);
    }
}

function Administrar() {

    var list = ObtenerCitas(),
        tbody = document.querySelector('#tabla-consulta tbody');

    tbody.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i),
            nombre = row.insertCell(0),
            correo = row.insertCell(1),
            area = row.insertCell(2),
            fecha = row.insertCell(3),
            hora = row.insertCell(4),
            cfecha = row.insertCell(5),
            chora = row.insertCell(6),
            aprobar = row.insertCell(7),
            negar = row.insertCell(8),
            guardar = row.insertCell(9);



        nombre.innerHTML = list[i].nombreUsuario;
        correo.innerHTML = list[i].correoUsuario;
        area.innerHTML = list[i].especialidad;
        fecha.innerHTML = list[i].fecha;
        hora.innerHTML = list[i].hora;
        cfecha.innerHTML = "<input id='fecha' type='date' step='1'min='2020-07-20' max='2021-07-01' value='2020-07-28'>";
        chora.innerHTML = "<input id='hora' type='time' class='field' min='09:00' max='15:00' value='09:00'>";
        aprobar.innerHTML = "<button type='button' class='btn-aprobar' onclick='aprobar()'>Aprobar</button><br>";
        negar.innerHTML = "<button type='button' class='btn-negar' onclick='negar()'>Negar</button><br>";
        guardar.innerHTML = "<button type='button' class='btn-guardar' onclick='guardar()'>Guardar</button><br>";


        tbody.appendChild(row);
    }
}





function ocultar() {

    var identidad = Identidad();

    if (identidad) {

        // var transaccion = document.getElementById("transaccion");
        var consulta = document.getElementById("consulta");
        var admnistrar = document.getElementById("administrar");

        //transaccion.style.display = "none";
        consulta.style.display = "none";
        admnistrar.style.display = "none";

    }





}

function aprobar() {
    alert("Cita aprobada");

}

function negar() {
    alert("Cita negada");

}

function guardar() {
    alert("Cita guardada")

}

function cerrarSesion() {
    localStorage.removeItem('identidad');
    localStorage.removeItem('identidadAdmin');

}