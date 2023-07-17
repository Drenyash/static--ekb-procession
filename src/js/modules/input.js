class Input {
    constructor(el) {
        this.el = el;
        this.field = this.el.querySelector('[data-input-field]');

        this.setListeners();
    }

    toggleDisable(checked) {
        checked ? this.button.removeAttribute('disabled') : this.button.setAttribute('disabled', 'disabled');
    }

    setListeners() {
        this.field.addEventListener('invalid', (e) => {
            e.preventDefault();
            this.setErrorClass(true);
        });

        this.field.addEventListener('input', () => {
            if (this.el.classList.contains('error') && this.field.name === 'USER_CODE') {
                if (this.field.value !== 'Екб300') {
                    this.setErrorClass(true);
                } else {
                    this.setErrorClass(false);
                }
            } else if (this.el.classList.contains('error') && this.field.value.length > 0) {
                this.setErrorClass(false);
            }
        });

    }

    setErrorClass(flag) {
        flag ? this.el.classList.add('error') : this.el.classList.remove('error');
    }
}

export {Input};