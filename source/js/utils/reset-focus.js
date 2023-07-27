const links = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');


const resetFocus = () => {
  links.forEach((link) => {
    link.addEventListener('mousemove', () => {
      link.blur();
    });
  });

  buttons.forEach((button) => {
    button.addEventListener('mousemove', () => {
      button.blur();
    });
  });

};

export {resetFocus};
