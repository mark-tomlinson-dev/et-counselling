import Accordion from "./accordion";
import Animations from "./animations";

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el);
});
