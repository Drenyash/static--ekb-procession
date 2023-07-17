import "./bvi/scss/bvi.scss";

import Swiper, {Navigation} from "swiper";
import Bvi from "./bvi/js/bvi";
import { Slider } from "./slider";
import { Form } from "./form";
import { Modal } from "./modal";
import { Input } from "./input";
import { Agreement } from "./agreement";
import { Header } from "./header";

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        this.initHeader();
        this.initForms();
        this.initMasonry();
        this.initSlider();
        this.initTimeline();
        this.initBvi();
        this.initModal();
        this.initInputs();
        this.initAgreement();
    }

    initHeader() {
        const el = document.querySelector('[data-header]');
        if (el) this.header = new Header(el);
    }

    initMasonry() {
        const el = document.querySelector('[data-masonry]');

        if (el) {
            this.masonry = new Masonry(el, {
                itemSelector: '.masonry__item',
                columnWidth: '.masonry__item',
                gutter: 10,
            });
        }
    }

    initSlider() {
        const el = document.querySelectorAll('[data-slider]');
        if (el.length) this.slider = [];

        el.forEach(item => {
            this.slider.push(new Slider(item));
        });
    }

    initTimeline() {
        const el = document.querySelector('[data-timeline]');

        if (el) {
            this.timeline = new Swiper(el.querySelector('.swiper-container'), {
                slidesPerView: 'auto',
                modules: [Navigation],
                navigation: {
                    nextEl: '.timeline__button--next',
                    prevEl: '.timeline__button--prev',
                },
            });
        }
    }

    initBvi() {
        new Bvi({
            target: '[data-link-vipanel]',
            speech: true
        });
    }




    initForms() {
        const el = document.querySelectorAll('[data-form]');

        el.forEach(item => new Form(item));
    }

    initModal() {
        new Modal();
    }

    initInputs() {
        const el = document.querySelectorAll('[data-input]');

        el.forEach(item => new Input(item));
    }

    initAgreement() {
        const el = document.querySelectorAll('[data-agreement]');
        el.forEach(item => new Agreement(item));
    }
}

export {App};
