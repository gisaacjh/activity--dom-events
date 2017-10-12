// cambiar el estilo de la fuente, su tamaño,y color del párrafo al hacer click
// llamar el elemento del  DOM
// crear la función que le diga que cambie el estilo
// añadir el evento click al p0arametro del callback

var styleBtn = document.querySelector('button')
  var h3 = document.querySelector('.pimp')
  var p = document.querySelector('p')

  function changeStyle() {
      h3.classList.toggle('new')
     p.classList.toggle("new")


}
  styleBtn.addEventListener('click', changeStyle)
