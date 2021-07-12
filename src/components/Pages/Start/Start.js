import BasicGoodDino from "../../Dinos/BasicGoodDino.js";
import BasicBadDino from "../../Dinos/BasicBadDino.js";

const body = document.querySelector('.body');
const navBar = document.querySelector('.navBar');
const mainContent = document.querySelector('.mainContent');
const footerBar = document.querySelector('.footerBar');
const selector = document.querySelector('#clickerTest');

//add Stylesheet
document.querySelector('head').appendChild(document.createElement('link')).id =
  'startStyles';
const selectLink = document.querySelector('#startStyles');
selectLink.setAttribute('rel', 'stylesheet');
selectLink.setAttribute('type', 'text/css');
selectLink.setAttribute('href', './src/components/Pages/Start/Start.css');

const startScreen = () => {
  DinoRight = BasicBadDino('100px');
  DinoLeft = BasicGoodDino('100px');
  DinoLeft.draw(mainContent);
  mainContent.appendChild(document.createElement('div')).id = 'title';
  document.querySelector('#title').classList = 'title blue fontBig';
  document.querySelector('#title').textContent = 'Dino Wars';

};
const test = () => {
  console.log('test');
};


selector.addEventListener('click', startScreen, {once: true});

export default startScreen;
