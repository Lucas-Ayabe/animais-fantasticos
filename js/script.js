import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initAnimateOnScroll from "./modules/animate-on-scroll.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOperation from "./modules/operation.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const accordion = new Accordion("[data-accordion] dt");
const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);

smoothScroll.init();
accordion.init();
tabNav.init();

initAnimateOnScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
initFetchBitcoin();
