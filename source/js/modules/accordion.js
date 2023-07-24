const buttons = document.querySelectorAll('[data-acc-tab]');
const lists = document.querySelectorAll('[data-acc-list]');
const headers = document.querySelectorAll('.accordion__header');


const showAccordion = () => {

  lists.forEach((list, i) => {
    if (i === 1) {
      list.classList.add('is-active');
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', ()=> {

      buttons.forEach((item) => item.classList.remove('is-active'));

      lists.forEach((list) => {
        list.style.display = 'none';
        list.classList.remove('is-active');

        if (button.dataset.accTab === list.dataset.accList) {
          button.classList.add('is-active');
          list.classList.add('is-active');
          list.style.display = 'block';
        }
      });
    });
  });
};

const showContentAccordion = () => {
  headers.forEach((header) => {
    header.insertAdjacentHTML('beforeEnd', '<button></button>');
    header.addEventListener('click', () => {
      const activeContent = document.querySelector('#' + header.dataset.header);

      if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        header.classList.remove('active');
        activeContent.style.maxHeight = 0;
      } else {
        header.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
      }
    });
  });
};


export {showAccordion, showContentAccordion};
