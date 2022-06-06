import {url} from './api.js';
import displayData from './displayData.js';
import getElement from './getElement.js';
import paintDom from './paintDom.js';

const results = getElement('.results');

const fetchData = async (value) => {
  results.innerHTML = paintDom('loading');
  try {
    const response = await fetch(`${url}${value}`);
    const {
      query: {search},
    } = await response.json();
    if (search.length < 1) {
      results.innerHTML = paintDom('error', 'no matched your search keyword');
    }
    displayData(search);
  } catch (error) {
    results.innerHTML = paintDom('error', 'there is error');
  }
};

export default fetchData;
