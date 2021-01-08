var lista_usuarios = [];
var lista_citas = [];


function CrearListaUsuario(nombre, correo, contrasena) {

    var fecha = new Date();
    var fechaActual = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();

    var Usuario = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        fecha: fechaActual
    }
    lista_usuarios.push(Usuario);
}

function ObtenerListaUsuarios() {


    var listaUsuarios = localStorage.getItem('ListaUsuarios');
    if (listaUsuarios == null) {
        lista_usuarios = [];
    } else {
        lista_usuarios = JSON.parse(listaUsuarios);
    }
    return lista_usuarios;

}



function ObtenerAdmin() {
    var admin = localStorage.getItem('datosAdmin');
    var datos_admin = JSON.parse(admin);
    return datos_admin;

}


/*** citas */

function CrearListaCitas(nombreUsuario, correoUsuario, especialidad, fecha, hora, mensaje) {

    var Cita = {
        nombreUsuario: nombreUsuario,
        correoUsuario: correoUsuario,
        especialidad: especialidad,
        fecha: fecha,
        hora: hora,
        mensaje: mensaje
    }
    lista_citas.push(Cita);
}

function ObtenerCitas() {

    var listaCitas = localStorage.getItem('Citas');
    if (listaCitas == null) {
        lista_citas = [];
    } else {
        lista_citas = JSON.parse(listaCitas);
    }
    return lista_citas;

}

function Identidad() {

    datos_usuario = localStorage.getItem('identidad');
    var identidad = JSON.parse(datos_usuario);

    return identidad;

}