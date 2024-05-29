// const { get } = require("browser-sync");

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
      const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 300000);
      calc();
      cards();
      forms('form',modalTimerID);
      modal('[data-modal]', '.modal', modalTimerID);
      slider({
            container: '.offer__slider',
            slide: '.offer__slide',
            nextArrow: '.offer__slider-next',
            prevArrow: '.offer__slider-prev',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner'
        });
      timer('.timer', '2024-06-10');
      tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');

    
});