
const Header = {};

Header.printData = document.getElementById('headerTitle');
Header.itemData = document.getElementById('headerType');
Header.inputData = document.getElementById('inputValue');
Header.buttonData = document.getElementById('hmt_saveValue');

Header.buttonData.addEventListener('click', () => {
console.log(_createItemData(Header.inputData.value, Header.itemData, _getDateData()));
  Header.printData.innerText = Header.inputData.value;
});

function _createItemData(amountValue, itemData, dateData){
  return {
    'amount': amountValue,
    'itemData': itemData,
    'dateData': dateData
  }
}
function _getDateData() {
  // Copy date so don't modify original
  var d = new Date();
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  var yearWeekNumber = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  // Return array of year and week number
var start = new Date(d.getFullYear(), 0, 0);
var diff = d - start;
var oneDay = 1000 * 60 * 60 * 24;
var yearDayNumber = Math.floor(diff / oneDay);

  return {
  'year': d.getUTCFullYear(),
  'month': d.getMonth() + 1,
  'day': d.getDate(),
  'yearWeekNumber': yearWeekNumber,
  'yearDayNumber': yearDayNumber,
  'timeUTC': d.getTime(),
  'timeZone': d.getTimezoneOffset()
  };
}
export default Header;
