const buttons = document.querySelectorAll('[data-tab]');
const lists = document.querySelectorAll('[data-list]');

const showContent = () => {

  lists.forEach((list, i) => {
    if (i === 0) {
      list.classList.add('is-active');
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', ()=> {

      buttons.forEach((item) => item.classList.remove('is-active'));

      lists.forEach((list) => {
        list.style.display = 'none';
        list.classList.remove('is-active');

        if (button.dataset.tab === list.dataset.list) {
          button.classList.add('is-active');
          list.classList.add('is-active');
          list.style.display = 'block';
        }
      });
    });
  });

};

export {showContent};
