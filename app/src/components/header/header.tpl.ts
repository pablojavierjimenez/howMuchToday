


var configObj = {
  inline:'false',
  elementType: 'header',
  attributeObj: {
    id: 'elementId',
    class: 'btn btn-danger',
    style: 'padding:2rem;'
  },
  content: {
    innerHTML:'<div>lalala</div>',
    innerText:'hola mundo'
  }
};




var domParser = new DOMParser();

var header = createDomElement(configObj);
var main = document.getElementById('main');

var headerContent = `<header id='header'>
  <h1 id="${configObj.data.icono}">${configObj.data.text}</h1><span>${configObj.data.icono}</span>
</header>`;



header.prepend(final)
main.prepend(header)
