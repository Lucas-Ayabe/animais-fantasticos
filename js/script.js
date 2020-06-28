import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initAnimateOnScroll from "./modules/animate-on-scroll.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOperation from "./modules/operation.js";
import fetchAnimals from "./modules/fetch-animals.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const accordion = new Accordion("[data-accordion] dt");
const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
const tooltip = new Tooltip("[data-tooltip]");

smoothScroll.init();
accordion.init();
tabNav.init();
modal.init();
tooltip.init();

fetchAnimals("/animais.api.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

initAnimateOnScroll();
initDropdownMenu();
initMenuMobile();
initOperation();
