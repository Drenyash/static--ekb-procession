import { Fancybox } from "@fancyapps/ui";

class Modal {
  constructor() {
    this.close = document.querySelectorAll("[data-closemodal]");
    this.init();
  }

  init() {
    Fancybox.bind("[data-fancybox]", {
      type: "inline",
      groupAttr: false,
      dragToClose: false,
    });
    this.close.forEach(el => {
      el.addEventListener("click", () => {
        Fancybox.close();
      });
    });
  }
}

export { Modal };
