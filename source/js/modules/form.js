import Pristine from 'pristinejs';

const formNode = document.querySelector('.form__content');

const formValidate = () => {
  const pristine = new Pristine(formNode, {
    classTo: 'form__label',
    errorClass: 'is-invalid',
    errorTextParent: 'form__label',
    errorTextTag: 'span',
    errorTextClass: 'form__error',
  });

  formNode.addEventListener('submit', function (e) {
    e.preventDefault();
    const valid = pristine.validate();
    formNode.reset();
  });
};

export {formValidate};
