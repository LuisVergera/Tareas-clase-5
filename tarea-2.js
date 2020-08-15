

document.querySelector("#ingresar").onclick= function(){
    const primerNombreUsuario= document.querySelector("#primer-nombre-usuario").value
    const segundoNombreUsuario= document.querySelector("#segundo-nombre-usuario").value
    const apellidoUsuario= document.querySelector("#apellido-usuario").value
    const edadUsuario= document.querySelector("#edad-usuario").value
    const informacionUsuario= `Nombre: ${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario} Edad:${edadUsuario}`
    let titulo= document.querySelector("#titulo")

    informacion.textContent= informacionUsuario

    titulo.textContent= ('Bienvenido ' + primerNombreUsuario)

    return false
}
