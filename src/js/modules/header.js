class Header {
    constructor(el) {
        this.el = el;
        this.setListeners();
    }

    setListeners() {
        this.toggle();

        document.addEventListener('scroll', () => {
            this.toggle();
        });
    }

    toggle() {
        if (window.scrollY === 0 && this.check()) {
            this.el.classList.add('invert');
        } else {
            this.el.classList.remove('invert');
        }
    }

    check() {
        const el = this.el.querySelectorAll('[data-section-drop]');
        let flag = true;

        for (let i = 0; i < el.length; i++) {
            if (!el[i].hasAttribute('hidden')) {
                flag = false;
                break;
            }
        }

        return flag;
    }

    fix() {
        this.el.classList.remove('invert');
    }
}

export {Header};