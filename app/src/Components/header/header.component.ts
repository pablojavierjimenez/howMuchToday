
const Header = {};

Header.printData = document.getElementById('headerTitle');
Header.inputData = document.getElementById('inputValue');
Header.buttonData = document.getElementById('saveValue');

Header.buttonData.addEventListener('click', () => {
  Header.printData.innerText = Header.inputData.value;
});

export default Header;
