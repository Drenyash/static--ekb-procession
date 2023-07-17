import {Fancybox} from "@fancyapps/ui";

class Modal {
    constructor() {
        this.init();
    }

    init() {
        Fancybox.bind('[data-fancybox="#reg-landing"]', {
            type: "inline",
            groupAttr: false,
            dragToClose: false,
        });
    }
}

export {Modal};