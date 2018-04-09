
import { $, createDomElement, te } from '../../helpers/helper';
import Data from '../../services/TypeList.service';

const SelectType = {} || null;
SelectType.el = $('#expenseType__list_container');
SelectType.target = $('#headerType');
SelectType.data = Data;



Data.map( ( item ) => {

  let listItem = createDomElement({
    elementType: 'li',
    attributeObj: {
      'id': 'elementId',
      'class': `expenseType__option ${item.expenseType}`,
      'data-value':  item.expenseType,
      'data-family': item.family
    },
    content: `
      <div class="expenseType__option_text">${item.expenseType}</div>
      <div class="expenseType__option_icon">${item.icon}</div>`
  });

  listItem.addEventListener('click', () => {
    console.log(SelectType.target, item.expenseType)
    SelectType.target.innerText = item.expenseType;
  });

  SelectType.el.appendChild(listItem);
})

console.log('header component work!!', SelectType);
export SelectType;
