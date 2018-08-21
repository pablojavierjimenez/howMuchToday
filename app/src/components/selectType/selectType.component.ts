
import { $, createDomElement} from '../../helpers/helper';
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
      'data-id': item.id,
      'data-value':  item.expenseType,
      'data-family': item.family,
      'data-familyId': item.familyId
    },
    content: `
      <div class="expenseType__option_text">${item.expenseType}</div>
      <div class="expenseType__option_icon">${item.icon}</div>`
  });

  listItem.addEventListener('click', () => {
    console.log(SelectType.target, item.expenseType)
    SelectType.target.innerText = item.expenseType;
    var details = document.getElementsByTagName("details")[0];
    details.open = false;
  });

  SelectType.el.appendChild(listItem);
})

console.log('header component work!!', SelectType);
export SelectType;


// <li class="expenseType__option" value="desayuno">
//     <div class="expenseType__option_text">desayuno</div>
//     <div class="expenseType__option_icon">☕🥞</div>
//   </li>
//   <li class="expenseType__option" value="tentenpie"> tentenpie
//     <div class="expenseType__option_text">desayuno</div>
//     <div class="expenseType__option_icon">☕🥞</div>
// </li>
