
import { $, createDomElement} from '../../helpers/helper';
var configObj = {
  inline:'false',
  elementType: 'header',
  attributeObj: {
    id: 'elementId',
    class: 'btn btn-danger',
    style: 'padding:2rem;'
  },
  //content: `<div>lalala</div>`,
  data: {
    text:'hola giles',
    icono: '🍔🍟'
  }
};


var domParser = new DOMParser();

var header = createDomElement(configObj);
var main = document.getElementById('footer');

header.innerHTML = `<header id='header'>
  <h1 id="${configObj.data.icono}">${configObj.data.text}</h1>
  <span>${configObj.data.icono}</span>
</header>`;



//header.prepend(headerContent);
main.prepend(header);
