import './app.less';
import Modules from './src/moduls';
import Config from './src/db.config';
import Header from './src/Components/header/header.component';

const app = Modules;
console.log(Config, Header, Modules);
firebase.initializeApp(Config);

