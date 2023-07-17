import axios from 'axios';
import {Input} from "./input";

class Form {
    constructor(el) {
        this.el = el;
        this.url = this.el.getAttribute('data-form');
        this.form = this.el.querySelector('[data-form]');
        this.field = this.el.querySelector('[data-form-field]');
        this.button = this.el.querySelector('[data-form-button]');
        this.buttonAdd = this.el.querySelector('[data-addmore-button]');
        this.resultBlock = this.el.querySelector('[data-form-message]');
        this.main = this.el.querySelector('[data-form-main]');
        this.wrapper = this.el.querySelector('[data-form-wrapper]');

        this.setListeners();
    }

    setListeners() {
        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submit();
        })
        if (this.buttonAdd) {
            this.buttonAdd.addEventListener('click', () => {
                this.addMoreForm();
            })
        }
    }


    getData() {
        const els = [...this.el.querySelectorAll('input'), ...this.el.querySelectorAll('textarea'), ...this.el.querySelectorAll('select')];
        const data = new FormData;

        els.forEach((item, idx) => {
            if (item.type === 'file') {
                data.append(item.name, item.files[0]);
            } else if (item.type === 'radio' || item.type === 'checkbox') {
                if (item.checked) data.append(item.name, item.value);
            } else {
                if (data.has(item.name)) {
                    let oldValue = data.get((item.name))
                    data.set(item.name, `${oldValue} \n ${item.value}`)
                } else {
                    data.append(item.name, item.value);
                }
            }
        });

        for (var pair of data.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        return data;
    }

    disable(state) {
        if (state) {
            this.button.setAttribute('disabled', 'disabled');
        } else {
            this.button.removeAttribute('disabled');
        }
    }

    setMessage(text) {
        this.field.innerHTML = text;
    }

    showResultBlock(state) {
        if (state) {
            this.resultBlock.removeAttribute('hidden');
        } else {
            this.resultBlock.setAttribute('hidden', 'hidden');
        }
    }

    submit() {
        this.disable(true);
        this.setMessage('Отправка...');

        axios.post(this.url, this.getData())
            .then((response) => {
                this.showResultBlock(true);
                this.setMessage('Отправить');

                setTimeout(() => {
                    this.showResultBlock(false);
                }, 3000);
            })
            .catch((error) => {
                this.setMessage('Ошибка');
            })
            .finally(() => {
                setTimeout(() => {
                    this.setMessage('Отправить');
                    this.disable(false);
                }, 3000);
            });
    }

    addMoreForm() {
        // const copyData = this.main.cloneNode(true);
        // this.wrapper.append(copyData)
        const formTemplate = () => {
            return `
            <div class="form__main" data-form-main>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        ФИО
                    </p>
                    <p class="input__message">
                        Обязательное поле. Введите Ваше ФИО
                    </p>
                    <input class="input__field" placeholder="Ваше ФИО" type="text" name="USER_NAME" required=""
                           data-input-field="" tabindex="0">
                </label>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        Город
                    </p>
                    <p class="input__message">
                        Обязательное поле. Введите название Вашего города
                    </p>
                    <input class="input__field" placeholder="Ваш город" type="text" name="USER_CITY" required=""
                           data-input-field="" tabindex="0">
                </label>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        Должность
                    </p>
                    <p class="input__message">
                        Обязательное поле. Введите Вашу должность
                    </p>
                    <input class="input__field" placeholder="Ваша должность" type="text" name="USER_WORK" required=""
                           data-input-field="" tabindex="0">
                </label>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        Контактный телефон
                    </p>
                    <p class="input__message">
                        Обязательное поле. Введите Ваш контактный телефон
                    </p>
                    <input class="input__field" placeholder="Контактный телефон" type="text" name="USER_PHONE" required=""
                           data-input-field="" tabindex="0">
                </label>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        Количество дней, которое планируете провести в Екатеринбурге
                    </p>
                    <p class="input__message">
                        Обязательное поле. Введите количество дней
                    </p>
                    <input class="input__field" placeholder="Количество дней" type="text" name="USER_DAYS" required=""
                           data-input-field="" tabindex="0">
                </label>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        Дата прибытия в Екатеринбург
                    </p>
                    <p class="input__message">
                        Обязательное поле. Введите Вашу дату прибытия в Екатеринбург
                    </p>
                    <input class="input__field" placeholder="Дата прибытия в Екатеринбург" type="text" name="USER_DATE"
                           required="" data-input-field="" tabindex="0">
                </label>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        Номер авиарейса/поезда
                    </p>
                    <p class="input__message">
                        Обязательное поле. Введите Ваш номер авиарейса/поезда
                    </p>
                    <input class="input__field" placeholder="Номер авиарейса/поезда" type="text" name="USER_NUMBER"
                           required="" data-input-field="" tabindex="0">
                </label>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        Нужна ли помощь в размещении в гостинице (Да, Нет)
                    </p>
                    <p class="input__message">
                        Обязательное поле. Нужна ли помощь в размещении?
                    </p>
                        <input class="input__field" placeholder="Нужна ли помощь в размещении в гостинице?" type="text"
                               name="USER_HELP" required="" data-input-field="" tabindex="0">
                </label>
                <label class="input mb-15" data-input="">
                    <p class="input__caption">
                        Код регистрации
                    </p>
                    <p class="input__message">
                        Обязательное поле. Введите Код регистрации
                    </p>
                    <input class="input__field" placeholder="Введите код регистрации" type="text" name="USER_CODE"
                           required="" data-input-field="" tabindex="0">
                </label>
            </div>
            `;
        }
        this.wrapper.insertAdjacentHTML('beforeend', formTemplate())
        this.wrapper.children.forEach(formMain => {
            formMain.children.forEach(formInput => {
                new Input(formInput)
            })
        })

    }
}

export {Form};