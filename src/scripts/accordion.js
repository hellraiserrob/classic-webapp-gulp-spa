import $ from 'jquery';

export default class Accordion {
  init() {
    console.log('accoridon init');

    const t = this;


    $(document).find('.internal--accordion .accordion-item').each(function () {
      
      var accordionItemElement = $(this);

      // accordionItemElement.initialise('accordion-item');

      accordionItemElement.children('.accordion-item__heading').off().on('click', function () {
        if (accordionItemElement.hasClass('accordion-item--open')) {
          t.closeAccordionItem(accordionItemElement);
        }
        else {
          t.openAccordionItem(accordionItemElement);
        }
      });
    });

  }

  openAccordionItem(accordionItemElement) {
    const t = this;

    var accordionElement = accordionItemElement.closest('.internal--accordion'),
      accordionContentElement = accordionItemElement.children('.accordion-item__content');

    if (accordionElement.hasClass('internal--accordion--single-open')) {
      accordionElement.children('.accordion-item--open').each(function () {
        t.closeAccordionItem($(this));
      });
    }

    accordionItemElement.addClass('accordion-item--open');
    accordionContentElement.slideDown('fast');
  }

  closeAccordionItem(accordionItemElement) {
    var accordionContentElement = accordionItemElement.children('.accordion-item__content');

    accordionItemElement.removeClass('accordion-item--open');
    accordionContentElement.slideUp('fast');
  }
}
