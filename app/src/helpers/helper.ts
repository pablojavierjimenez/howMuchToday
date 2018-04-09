/*--------------------------------7
 *            HELPERS
 *-------------------------------*/

/************************************
 *       SIMPLE SELECTOR
 *************************************
 * @param selector
 */
export function $ (selector) {

  let out;
  let firsSelectorElement = selector.split(' ')[0];
  let selectorType = 'tag';

  if ( firsSelectorElement.charAt(0) === '.') {
    selectorType = 'class';
  }
  else if ( firsSelectorElement.charAt(0) === '#') {
    selectorType ='id';
  } ;

  switch (selectorType) {
    case 'class':
      out = document.getElementsByClassName( firsSelectorElement.slice(1, firsSelectorElement.length) )
    break;
    case 'id':
      out = document.getElementById( firsSelectorElement.slice(1, firsSelectorElement.length) )
    break;

    default:
      out = document.getElementsByTagName( firsSelectorElement );
      break;
  }

  return out;
}


/************************************
 *        CREATE DOM ELEMENT
 *************************************
 * @param {objec} configObj
 * @example
     configObj = {
       inline:'false',
       attributeObj: {
         id: 'elementId',
         class: 'btn btn-danger'
         style: 'padding:2rem;'
       },
      content: {
        innerHTML:'<div>lalala</div>',
        innerText:'hola mundo'
      }
     }
 */
export function createDomElement ( configObj: any ) {

  var el, newElementConfig;

  if ( typeof( configObj ) === 'string' ) {
    let container = document.createElement( configObj );
    return container;
  }

  ( typeof( configObj ) === 'object' ) ? newElementConfig = configObj : false ;
  ( configObj.inline ) ? el = configObj.elementType || 'span' : el = configObj.elementType || 'div';

  let container = document.createElement(el);

  if ( typeof(configObj.attributeObj) == 'object' ) {
    _addAttribute( configObj.attributeObj )
  }



  ( typeof( configObj.content ) !== 'undefined') ? _addContent( configObj.content ) : false ;




  function _addContent( attributeObj ) {
    container.innerHTML = configObj.content;
  }

  function _addAttribute( attributeObj ) {
    for( let attr in attributeObj ){
      container.setAttribute(attr, attributeObj[attr]);
    }
  }

  // console.log(container);
  return container;
}

/************************************
 *        TEXT TO DOM ELEMENT
 *************************************
 * @param string
 */
function textToDomElement ( string ) {
  var domParser = new DOMParser();
  var out = domParser.parseFromString(string,"text/xml").firstElementChild;
  return out;
}
