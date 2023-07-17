import "the-new-css-reset/css/reset.css";
import "swiper/css";
import "./sprite";
import "./modules/show-more";
import "../css/main.scss";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

import {App} from "./modules/app";

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
