import fetchData from './utils/fetchData.js';
import getElement from './utils/getElement.js';
import paintDom from './utils/paintDom.js';

const form = getElement('.form');
const input = getElement('.form-input');
const results = getElement('.results');

const handleSubmit = (e) => {
  e.preventDefault();
  const {value} = input;
  if (!value) {
    const content = paintDom('error', 'please enter vaild value');
    results.innerHTML = content;
    return;
  }
  fetchData(value);
};

form.addEventListener('submit', handleSubmit);
