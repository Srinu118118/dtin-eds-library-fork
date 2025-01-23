/* eslint-disable */
// import { fetchPlaceholders } from '../../scripts/aem.js';
import { generateAccordionDOM } from '../accordion/accordion.js';

function openFunctionFAQ(block) {
  const titles = block.querySelectorAll('details summary');

  titles.forEach((title) => {
    title.addEventListener('click', () => {
      if (this.classList.contains('active')) {
        setTimeout(() => {
          this.closest('details').removeAttribute('open');
        });
        this.classList.remove('active');
      } else {
        titles.forEach((eachTitle) => {
          eachTitle.closest('details').removeAttribute('open');
          eachTitle.classList.remove('active');
        });
        this.classList.toggle('active');
      }
    });
  });
}

export default async function decorate(block) {
  // const resp = await fetchPlaceholders();
  // console.log("placeholder resp :: ", resp);
  // each row is an accordion entry
  const accordions = [...block.children];

  // loop through all accordion blocks
  [...accordions].forEach((accordion) => {
    // generate the accordion
    const accordionDOM = generateAccordionDOM(accordion);
    // empty the content ,keep root element with UE instrumentation
    accordion.textContent = '';
    // add block classes
    accordion.classList.add('accordion', 'block');
    accordion.append(accordionDOM);
  });

  // use same styling as shade-box from /docs
  block.classList.add('shade-box');
  try {
    openFunctionFAQ(block);
  } catch (error) {
    console.error(error);
  }
}
