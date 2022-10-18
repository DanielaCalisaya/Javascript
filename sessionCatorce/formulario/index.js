const f = document.getElementById("formulario")
console.log(f)

f.addEventListener("submit", evento => { //cada vez que haya un submit, que me ejecute esta función
    console.log(evento)
    evento.preventDefault() //que evite el comportamiento por defecto
})