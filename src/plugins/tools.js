window.sliceText = function (node) {
  let text = node.innerHTML
  node.innerHTML = ''
  for (let x = 0; x < text.length; x++) {
    let span = document.createElement('SPAN')
    span.classList.add('letter')

    let letter = text.charAt(x) === ' ' ? '&nbsp;' : text.charAt(x)
    span.innerHTML = letter

    node.appendChild(span)
  }
}
