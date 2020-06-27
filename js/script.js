import initTabNav from "./modules/tab-nav.js";
import initAccordion from "./modules/accordion.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initAnimateOnScroll from "./modules/animate-on-scroll.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOperation from "./modules/operation.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

initTabNav();
initAccordion();
const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

initAnimateOnScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initOperation();
initFetchAnimals();
initFetchBitcoin();
