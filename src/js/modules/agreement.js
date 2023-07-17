class Agreement {
    constructor(el) {
        this.el = el;
        this.button = this.el.querySelector('[data-agreement-button]');
        this.input = this.el.querySelectorAll('[data-agreement-checkbox]');

        this.setListeners();
    }

    setListeners() {
        this.input.forEach(item => {
           item.addEventListener('change', () => {
               this.toggleDisable(item.checked);
           }) ;

            this.toggleDisable(item.checked);
        });
    }

    toggleDisable(checked) {
        checked ? this.button.removeAttribute('disabled') : this.button.setAttribute('disabled', 'disabled');
    }
}

export {Agreement};